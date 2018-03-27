/**
 * Get a request object to indexedDB.
 *
 * @param {Object} options Database connection options.
 *
 * @returns {IDBOpenDBRequest}
 */
export default function (options) {
	const DB_NAME = options.dbName;
	const DB_VERSION = options.dbVersion;

	return window.indexedDB.open(DB_NAME, DB_VERSION);
}

/**
 * Clear all items out of the store.
 *
 * @param {IDBDatabase} store The indexedDB.
 */
export const clear = function clear(store) {
	let req = store.clear();

	req.onsuccess = function () {
		console.log('Object Store Cleared');
	};
};

export const get = function get(store, key) {
	return new Promise(resolve => {
		let req = store.get(key);

		req.onsuccess = function (evt) {
			resolve(evt);
		};
	});
};

/**
 * Get an object store connection.
 *
 * @param {IDBDatabase} db The indexedDB.
 * @param {String} store_name The store name.
 * @param {String} mode Operation mode.
 *
 * @returns {IDBObjectStore}
 */
export const getObjectStore = function getObjectStore(db, store_name, mode) {
	const tx = db.transaction(store_name, mode);
	return tx.objectStore(store_name);
};

/**
 * I feel like the two getAll functions below can be combined.
 * I also feel like since we are currying, that these functions will already
 * have access to the {store} or {db}. I need to explore.
 */

/**
 * Get all items from the store.
 *
 * @param {IDBDatabase} db The indexedDB.
 * @param {IDBObjectstore} objectStore The object store.
 * @returns {Promise<any>} The result set.
 */
export const getAll = function getAll(db, objectStore) {
	return new Promise((resolve) => {
		const store = getObjectStore(db, objectStore, 'readwrite');
		let req = store.getAll();

		req.onsuccess = function (evt) {
			resolve(evt);
		};
	});
};

/**
 * Get all items from object store.
 *
 * @param {IDBObjectstore} store The object store.
 * @returns {Promise<any>} The result set.
 */
export const getAllResolved = function getAllResolved(store) {
	return new Promise((resolve) => {
		let req = store.getAll();

		req.onsuccess = function (evt) {
			resolve(evt);
		};
	});
};

/**
 * Add object to store.
 *
 * @param {IDBObjectstore} store The object store.
 * @param {Object} data Data to add.
 */
export const addItem = function addItem(store, data) {
	let req = store.add(data);

	req.onsuccess = function () {
		console.log('Added!');
	};
};

/**
 * Delete object from store.
 *
 * @param {IDBObjectstore} store The object store.
 * @param {Number} id The id.
 */
export const deleteItem = function deleteItem(store, id) {
	let req = store.delete(parseInt(id));

	req.onsuccess = function () {
		console.log('removed');
	};
};

/**
 * Update object from store.
 *
 * @param {IDBObjectstore} store The object store.
 * @param {Object} data The data to insert.
 */
export const updateItem = function updateItem(store, data) {
	let req = store.put(data);

	req.onsuccess = function () {
		console.log('updated');
	};
};

/**
 * Create a connection to an object store.
 *
 * @param {IDBDatabase db The indexedDB.
 * @returns {function(*=): function(*=): function()}
 */
export const dbConnect = (db) => (objectStore) => (method) => () => {
	let store = getObjectStore(db, objectStore, method);
	return function (cb, data) {
		return cb(store, data);
	};
};
