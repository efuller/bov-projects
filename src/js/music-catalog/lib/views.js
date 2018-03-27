/**
 * Album template.
 * @param {Object} album Album information.
 *
 * @returns {string} The album markup.
 */
export const albumTemplate = (album) => {
	const background = `background: url(${album.image['#text']}) no-repeat top center; background-size: cover;`;
	return `
		<div class="album" data-id="${album.id}" data-album="${album.album}" data-artist="${album.artist}" style="${background}">
			<div class="album__meta">
				<h3 class="album__album">${album.album}</h3>
				<div class="album__artist">${album.artist}</div>
			</div>
		</div>
		`;
};

/**
 * Individual track list item.
 *
 * @param {Array} tracks The track listing.
 *
 * @returns {string} The <li> markup.
 */
export const listTracks = (tracks) => {
	return tracks.map((track) => {
		return `
			<li><a href="${track.url}">${track.name}</a></li>
		`;
	}).join('');
};

/**
 * The modal template.
 *
 * @param {Object} album The album info.
 *
 * @returns {string} The markup for the modal content.
 */
export const modalTemplate = (album) => {
	return `
		<div class="album-details" data-id="${album.id}" data-album="${album.album}" data-artist="${album.artist}">
			<div class="album-details-left">
				<figure class="album-details__figure">
					<img src="${album.image['#text']}" alt="${album.album}" class="album-details__image">
				</figure>
				<div class="album-details__meta">
					<div class="album-details__meta-left">
						<div class="album__album"><span class="album-details__meta-bold">Album: </span>${album.album}</div>
						<div class="album__artist"><span class="album-details__meta-bold">Artist: </span>${album.artist}</div>
					</div>
					<div class="album-details__meta-right">
						<div class="album__playcount"><span class="album-details__meta-bold">Playcount: </span>${album.playcount}</div>
						<div class="album__listeners"><span class="album-details__meta-bold">Listeners: </span>${album.listeners}</div>
					</div>
				</div>
				<p class="album-details__content">${album.content}</p>
			</div>
			<div class="album-details-right">
				<div class="album-details__tracks-container">
					<h3>Tracks:</h3>
					<ul class="album-details__tracks">
						${listTracks(album.tracks)}
					</ul>
				</div>
			</div>
		</div>
		`;
};
