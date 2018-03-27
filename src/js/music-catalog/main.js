import Modal from './lib/modal';
import data from './lib/albums';
import createStore from './lib/indexedDB';
import {
	getAll,
	addItem,
	getAllResolved,
	get,
	dbConnect } from './lib/indexedDB';

import {
	albumTemplate,
	modalTemplate
} from './lib/views';

// Locals.
let db;
let result;
let albumConnection;

// IndexedDB connection details.
const dbOptions = {
	dbName: 'AlbumsNew',
	dbVersion: 1,
	objectStore: 'albums'
};

/**
 * Utility function for composing API URL.
 *
 * @param artist Name of the artist.
 * @param album Name of the album.
 *
 * @returns {string} The API url.
 */
const createURL = ({ artist, album }) => {
	return `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=2537d223dfb430676c5ceb304042d647&artist=${artist}&album=${album}&format=json`
};

/**
 * Map over the data and create an array of URLs.
 */
const artistURLs = data.map(createURL);

/**
 * Create and resolve an array of API calls.
 *
 * @param {Array} urls API urls.
 *
 * @returns {Promise<any[]>} The album data.
 */
const fetchAlbumData = (urls) => {
	return Promise.all(urls.map(artistURL => fetch(artistURL).then(res => res.json())))
		.then(albums => albums);
};

/**
 * Event handler for opening the modal for a specific album.
 *
 * @param {String} key The IndexedDB keypath.
 *
 * @returns {Function} The event handler.
 */
function openModal(key) {
	return function (e) {
		// Detect the trigger/click target.
		const trigger = e.target;
		// Create the DB connection.
		const getOne = albumConnection();
		// Get the album data and open the modal.
		getOne(get, key)
			.then(album => {
				const { result } = album.target;
				new Modal(trigger, {
					modalTitle: '',
					modalContentTemplate: modalTemplate(result),
					onAfter: function () {},
					onBefore: function () {}
				});
			});
	};
}

/**
 * Bind the click event on albums.
 */
function bindEvents() {
	const albums = document.querySelectorAll('.album');

	albums.forEach((album) => {
		const key = album.getAttribute('data-id');
		album.addEventListener('click', openModal(key));
	});
}

/**
 * Create and append the album markup.
 *
 * @param {Event} evt The IndexedDB event.
 */
function renderMarkup(evt) {
	const { result } = evt.target;
	const albumHTML = result.map(albumTemplate).join(',');
	const albumsContainer = document.getElementById('albums');

	albumsContainer.innerHTML = albumHTML;
}

function render() {
	const loader = document.querySelector('.loading');
	const getAllConnection = albumConnection();
	const albums = getAllConnection(getAllResolved); // Returns a promise.
	albums
		.then((newResult) => {
			renderMarkup(newResult);
			bindEvents();
			loader.classList.add('hide');
		});
}

/**
 * Hydrate the IndexedDB.
 */
function hydrateDB() {
	// Fetch the album data and add to IndexedDB.
	fetchAlbumData(artistURLs)
		.then((albums) => {
			albums.forEach(({ album }) => {
				console.log(album);
				const add = albumConnection();
				const newAlbum = {
					id: album.name,
					image: album.image[5],
					artist: album.artist,
					album: album.name,
					playcount: album.playcount,
					listeners: album.listeners,
					content: album.wiki && album.wiki.content ? album.wiki.content : '',
					tracks: album.tracks.track
				};
				add(addItem, newAlbum);
			});
			// Render the page.
			render();
		});
}

/**
 * Check to see if there are records.
 *
 * @param db
 * @param objectStore
 * @returns {*}
 */
function areThereRecords(db, objectStore) {
	return getAll(db, objectStore);
}

/**
 * Initialize the app.
 */
function init() {
	// Open a request object.
	const request = createStore(dbOptions);

	// Handle the onsuccess event.
	request.onsuccess = function () {
		db = this.result;
		albumConnection = dbConnect(db)('albums')('readwrite');
		areThereRecords(db, 'albums')
			.then(newResult => {
				const currentResult = newResult.target.result;
				if (currentResult.length === 0) {
					hydrateDB(db);
				}
				render(db);
			});
	};

	// Handle onupgradeneeded event.
	request.onupgradeneeded = function (e) {
		result = e.currentTarget.result;
		let store = result.createObjectStore(dbOptions.objectStore, { keyPath: 'id' });
	};
}

document.addEventListener('DOMContentLoaded', init);
