/**
 * Maybe Find a way to shuffle the the pieces?
 */
import Timer from './countdown';
import Messages from './messages';


class JigSaw {

	constructor() {
		this.init();
	}

	init() {
		this.initializeState();
		this.createPuzzlePiece();
		this.solvePuzzle();
		this.cacheDOM();
		this.bindFunctions();
		this.updateHintsButton();
		this.bindEvents();

		Messages.createMessage('Select Level');
	}

	bindFunctions() {
		this.handleDragOver = this.handleDragOver.bind(this);
		this.handleDrop = this.handleDrop.bind(this);
		this.handleDragEnter = this.handleDragEnter.bind(this);
		this.handleDragLeave = this.handleDragLeave.bind(this);
		this.handleDragEnd = this.handleDragEnd.bind(this);
		this.onAnimationEnd = this.onAnimationEnd.bind(this);
		this.onTransitionEnd = this.onTransitionEnd.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.start = this.start.bind(this);
		this.selectLevel = this.selectLevel.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.showHint = this.showHint.bind(this);
		this.hideHint = this.hideHint.bind(this);
		this.updateHintsButton = this.updateHintsButton.bind(this);
	}

	initializeState() {
		this.DOM = {
			puzzleImagePieces: []
		};
		this.store = {
			currentDropZone: null,
			started: false,
			level: false,
			hints: 3,
			puzzlePieces: JigSaw.createPuzzlePiecesArray(5, 45)
		};
	}

	cacheDOM() {
		this.DOM.draggables = Array.from(document.querySelectorAll('.puzzle__piece'));
		this.DOM.dropZones = Array.from(document.querySelectorAll('.puzzle__spot'));
		this.DOM.puzzleContainer = document.querySelector('.puzzle__pieces');
		this.DOM.docFrag = document.createDocumentFragment();
		this.DOM.infoForm = document.querySelector('.puzzle-info__form');
		this.DOM.infoContainer = document.querySelector('.puzzle-info__container');
		this.DOM.infoPanelLevel = this.DOM.infoContainer.querySelector('.puzzle-info__panel--level');
		this.DOM.infoPanelStats = this.DOM.infoContainer.querySelector('.puzzle-info__panel--stats');
		this.DOM.puzzleStartBtn = document.getElementById('puzzle-start');
		this.DOM.levelInputs = Array.from(document.querySelectorAll('.puzzle-info__input'));
		this.DOM.messageContainer = document.querySelector('.puzzle__message-container');
		this.DOM.puzzleHint = document.querySelector('.puzzle__hint');
		this.DOM.puzzleHintBtn = document.querySelector('.puzzle-info__hint');
		this.DOM.timerBar = document.querySelector('.puzzle-info__timer-bar');
	}

	bindEvents() {
		this.DOM.draggables.forEach((draggable) => {
			draggable.addEventListener('dragstart', JigSaw.handleDragStart, false);
			draggable.addEventListener('animationend', this.onAnimationEnd);
		});

		this.DOM.levelInputs.forEach((input) => {
			input.addEventListener('change', this.handleInputChange);
		});

		this.DOM.infoContainer.addEventListener('transitionend', this.onTransitionEnd);
		this.DOM.infoForm.addEventListener('submit', this.handleFormSubmit);
		this.DOM.puzzleStartBtn.addEventListener('click', this.start);
		this.DOM.puzzleHintBtn.addEventListener('mousedown', this.showHint);
		this.DOM.puzzleHintBtn.addEventListener('mouseup', this.hideHint);
	}

	onAnimationEnd(e) {
		if (e.animationName === 'falling' && e.target.classList.contains('puzzle__piece--falling')) {
			e.target.classList.remove('puzzle__piece--falling');
			e.target.style.animationDelay = 0 + 's';
			e.target.classList.add('fadeInAndUp');
			this.DOM.puzzleContainer.appendChild(e.target);
		}

		if (e.animationName === 'fadeInAndUp' && e.target.classList.contains('fadeInAndUp')) {
			e.target.classList.remove('fadeInAndUp');
		}
	}

	onTransitionEnd(e) {
		if (e.propertyName === 'transform' && e.currentTarget.classList.contains('puzzle-info__container')) {
			if (e.propertyName === 'transform' && this.DOM.infoContainer.classList.contains('puzzle-info__container--slide-in')) {
				this.DOM.infoContainer.classList.remove('puzzle-info__container--slide-in');
				return;
			}
			this.DOM.infoContainer.classList.remove('transitioning');

			this.showHideInfoPanels();
		}
	}

	updateHintsButton() {
		this.DOM.puzzleHintBtn.innerHTML = this.store.hints !== 1 ? `${this.store.hints} Hints` : `${this.store.hints} Hint`;
	}

	resetForm() {
		this.DOM.levelInputs.forEach((input) => {
			input.checked = false;
		});
	}

	resetPuzzle() {
		this.DOM.timerBar.style.width = 0;
		this.DOM.dropZones.forEach((dropZone) => {
			dropZone.innerHTML = '';
		});

		this.initializeState();
		this.createPuzzlePiece();
		this.solvePuzzle();
		this.cacheDOM();
		this.bindEvents();
		this.updateHintsButton();

		Messages.createMessage('Select Level');

		this.DOM.puzzleContainer.innerHTML = '';
		this.showHideInfoPanels();
		this.timer.deleteTimer();
		this.timer = null;
		this.resetForm();
		this.updateStartButtonText();
	}

	showHideInfoPanels() {
		if (this.store.level) {
			this.DOM.infoPanelLevel.classList.add('hide');
			this.DOM.infoPanelStats.classList.remove('hide');
		}

		if (!this.store.level) {
			this.DOM.infoPanelLevel.classList.remove('hide');
			this.DOM.infoPanelStats.classList.add('hide');
		}
	}

	start() {
		if (!this.store.started) {
			this.store.started = true;
			Messages.clearMessage();
			this.updateStartButtonText();

			this.DOM.dropZones.forEach((dropZone) => {
				dropZone.addEventListener('drop', this.handleDrop, false);
				dropZone.addEventListener('dragenter', this.handleDragEnter, false);
				dropZone.addEventListener('dragleave', this.handleDragLeave, false);
				dropZone.addEventListener('dragover', this.handleDragOver, false);
				dropZone.addEventListener('dragend', this.handleDragEnd, false);
			});

			this.timer.startTimer();
		} else {
			this.resetPuzzle();
		}
	}

	updateStartButtonText() {
		if (this.store.started) {
			this.DOM.puzzleStartBtn.innerHTML = 'Reset';
		} else {
			this.DOM.puzzleStartBtn.innerHTML = 'Start';
		}
	}

	selectLevel(level) {
		this.store.level = level;

		this.timer = new Timer('.puzzle-info__timer', this.store.level);

		// Make a start button and have it do this when clicked!
		this.DOM.draggables.forEach((draggable) => {
			draggable.classList.add('puzzle__piece--falling');
		});

		this.DOM.infoContainer.classList.add('puzzle-info__container--slide-in', 'transitioning');

		Messages.createMessage('Click Start to Begin!');
	}

	handleInputChange(e) {
		this.DOM.levelInputs.forEach((input) => {
			this.DOM.messageContainer.classList.remove('visible');

			Messages.clearMessage();

			if (e.target !== input) {
				input.checked = false;
				return;
			}
			input.checked = true;
		});
	}

	showHint() {
		if (!this.store.started) {
			Messages.createMessage('Nice Try!');
			return;
		}

		if (!this.store.hints > 0) {
			Messages.createMessage('No Hints Left!');
			return;
		}

		this.DOM.puzzleHint.classList.add('visible');
	}

	hideHint() {
		this.DOM.puzzleHint.classList.remove('visible');

		Messages.clearMessage();

		if (!this.store.started) {
			Messages.createMessage('Click Start to Begin!');
		}

		if (this.store.hints > 0 && this.store.started) {
			this.store.hints = this.store.hints - 1;
		}
		this.updateHintsButton();
	}

	handleFormSubmit(e) {
		e.preventDefault();

		const form = this.DOM.infoForm;

		const selected = Array.from(form.elements).filter((el) => el.checked);

		if (selected.length === 0) {
			Messages.createMessage('Select Level');
			return;
		}
		const level = parseInt(selected[0].value, 10);
		this.selectLevel(level);
	}

	createPuzzlePiece() {
		this.DOM.puzzleImagePieces = this.store.puzzlePieces.map((piece) => {
			const pieceImage = JigSaw.createPieceImageContainer(piece.id);
			const imageNumber = JigSaw.createPieceImageNumber(piece.id);
			const image = JigSaw.createPieceImage(piece.id);

			pieceImage.appendChild(image);
			pieceImage.appendChild(imageNumber);

			return pieceImage;
		});
	}

	static createPieceImage(pieceID) {
		const image = document.createElement('img');
		image.setAttribute('src', '../drag-n-drop/images/puzzle/piece-' + pieceID + '.png');
		image.setAttribute('data-id', pieceID);

		return image;
	}

	static createPieceImageNumber(pieceID) {
		const imageNumber = document.createElement('span');
		imageNumber.classList.add('puzzle__piece__number');
		imageNumber.innerHTML = pieceID;

		return imageNumber;
	}

	static createPieceImageContainer(pieceID) {
		const pieceImage = document.createElement('div');
		pieceImage.classList.add('puzzle__piece');
		pieceImage.setAttribute('data-id', pieceID);
		pieceImage.setAttribute('draggable', true);

		return pieceImage;
	}

	static createPuzzlePiecesArray(startID, endID) {
		let start = startID;

		const puzzlePieces = [];

		while (start <= endID) {
			const puzzlePiece = {
				id: start,
				solved: false
			};
			puzzlePieces.push(puzzlePiece);

			start += 1;
		}

		return puzzlePieces;
	}

	static handleDragStart(e) {
		e.dataTransfer.setData('text/plain', e.target.dataset.id);
		e.dataTransfer.dropEffect = 'copy';

		return true;
	}

	handleDrop(e) {
		e.preventDefault();
		e.stopPropagation();

		const parent = this.findParentByClassName(e.target, 'current-target');
		this.store.currentDropZone = parent;

		if (this.store.currentDropZone && this.store.currentDropZone.childElementCount > 0) {
			const el = this.store.currentDropZone.firstElementChild;
			const removed = this.store.currentDropZone.removeChild(el);
			this.DOM.puzzleContainer.appendChild(removed);
			const data = e.dataTransfer.getData('text/plain');
			parent.appendChild(document.querySelector('.puzzle__piece[data-id="' + data + '"]'));
		} else {
			const data = e.dataTransfer.getData('text/plain');
			e.target.appendChild(document.querySelector('.puzzle__piece[data-id="' + data + '"]'));
		}

		this.isPuzzleComplete();
	}

	handleDragEnter(e) {
		e.stopPropagation();
		e.preventDefault();
		const parent = this.findParentByClassName(e.target, 'puzzle__spot');

		if (this.store.currentDropZone && (parent !== this.store.currentDropZone)) {
			this.store.currentDropZone.classList.remove('current-target', 'target-overlay');
		}

		return true;
	}

	handleDragLeave(e) {
		e.stopPropagation();
		e.preventDefault();

		const parent = this.findParentByClassName(e.target, 'puzzle__spot');

		parent.classList.remove('current-target', 'target-overlay');

		return false;
	}

	handleDragEnd(e) {
		e.preventDefault();
		e.stopPropagation();

		this.store.currentDropZone.classList.remove('target-overlay');

		return false;
	}

	handleDragOver(e) {
		e.stopPropagation();
		e.preventDefault();
		e.dataTransfer.dropEffect = 'move';

		const parent = this.findParentByClassName(e.target, 'puzzle__spot');
		parent.classList.add('current-target', 'target-overlay');

		return false;
	}

	static isMatch(element) {
		const puzzlePiece = element.querySelector('.puzzle__piece');

		if (!puzzlePiece) {
			return true;
		}
		const id = parseInt(element.getAttribute('data-id'), 10);
		const pieceID = parseInt(element.querySelector('.puzzle__piece').getAttribute('data-id'), 10);

		return id !== pieceID;
	}

	isPuzzleComplete() {
		const completed = this.DOM.dropZones.some(JigSaw.isMatch);

		if (!completed) {
			Messages.createMessage('Nice Job!!!');
			setTimeout(() => {
				Messages.clearMessage();
				this.resetPuzzle();
			}, 5000);
		}
	}

	solvePuzzle() {
		const viewport = document.querySelector('.puzzle__viewport');
		const piecesArray = Array.from(viewport.querySelectorAll('.puzzle__spot'));

		piecesArray.forEach((piece) => {
			const id = parseInt(piece.getAttribute('data-id'), 10);
			const image = this.DOM.puzzleImagePieces.filter(puzzleImage => parseInt(puzzleImage.getAttribute('data-id'), 10) === id);

			piece.appendChild(image[0]);
		});
	}

	findParentByClassName(el, selector) {
		if (el.parentNode === null) {
			return null;
		}

		if (el.classList.contains(selector)) {
			return el;
		}

		return this.findParentByClassName(el.parentNode, selector);
	}
}

window.JigSaw = new JigSaw();
