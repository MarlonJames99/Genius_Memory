const _data = {
	gameOn: false,
	timeout: undefined,
	sounds: [],

	strict: false,
	playerCanPlay: false,
	score: 0,
	gameSequence: [],
	playerSequence: []
};

const _gui = {
	counter: document.querySelector(".gui__counter"),
	switch: document.querySelector(".gui__btn-switch"),
	led: document.querySelector(".gui__led"),
	strict: document.querySelector(".gui__btn--strict"),
	start: document.querySelector(".gui__btn--start"),
	pads: document.querySelectorAll(".game__pad")
}

const _soundUrls = [
	"audio/simonSound1.mp3",
	"audio/simonSound2.mp3",
	"audio/simonSound3.mp3",
	"audio/simonSound4.mp3"
];

_soundUrls.forEach(sndPath => {
	const audio = new Audio(sndPath);
	_data.sounds.push(audio);
});

_gui.switch.addEventListener("click", () => {
	_data.gameOn = _gui.switch.classList.toggle("gui__btn-switch--on");
	_gui.counter.classList.toggle("gui__counter--on");
	_gui.counter.innerHTML = "--";

	_data.strict = false;
	_data.playerCanPlay = false;
	_data.score = 0;
	_data.gameSequence = [];
	_data.playerSequence = [];
    
	disablePads();

	_gui.led.classList.remove("gui__led--active");
});

_gui.strict.addEventListener("click", () => {
	if (!_data.gameOn)
		return;
	
	_data.strict = _gui.led.classList.toggle("gui__led--active");
});

_gui.start.addEventListener("click", () => {

});

const padListener = (e) => {

}

_gui.pads.forEach(pad => {
	pad.addEventListener("click", padListener);
});

const startGame = () => {

}

const setScore = () => {

}

const newColor = () => {

}

const playSequence = () => {

}

const blink = (text, callback) => {

}

const waitForPlayerClick = () => {

}

const resetOrPlayAgain = () => {

}

const changePadCursor = (cursorType) => {

}

const disablePads = () => {
	_gui.pads.forEach(pad => {
		pad.classList.remove("game__pad--active");
	});
}