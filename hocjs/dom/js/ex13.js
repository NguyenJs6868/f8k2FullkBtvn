
var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progressBar.querySelector("span");

// Yêu cầu chuyển đổi hết thành phần trăm (%)

var handleUpdateValue = function(value) {
	progress.style.width = `${value}%`;
};

// Tính độ dài của progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; // Căm cờ
var inintilaClientX;
var initialValue = 0;
var value = 0; // Khoảng cc

progressBar.addEventListener("mousedown", function(e) {
	if (e.which === 1) { // Chuột trái
		var offsetX = e.offsetX;
		value = (offsetX * 100) / progressBarWidth;
		initialValue = value;
		inintilaClientX = e.clientX; // !
		isDrag = true; // Cho click sau đó kéo?
		console.log('progressBar value: ', value);
		handleUpdateValue(value)

	}
});

progressSpan.addEventListener("mousedown", function(e) {
	e.stopPropagation();
	if (e.which === 1) { // Chuột trái
		isDrag = true;
		inintilaClientX = e.clientX; // !
	}
})

document.addEventListener("mousemove", function(e) {
	if(isDrag) {
		var mouseWidth = e.clientX - inintilaClientX; // Trừ khoảng cách click bar và khoảng cách trong progress
		value = (mouseWidth * 100) / progressBarWidth;
		value = initialValue + value //

		console.log('document initialValue: ', initialValue);
		if (value < 0) { // Kéo quá độ dài bar
				value = 0;
			}

			if (value > 100) {
				value = 100;
			}

			handleUpdateValue(value)
	}
});
// Nhả chuột
document.addEventListener("mouseup", function() { // Nhả chuột
	isDrag = false;
 initialValue = value; // Giá trị sau khi nhả chuột lấy vị trí sau cùng
});

// Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");

var durationEl = progressBar.nextElementSibling;
var currentEl = progressBar.previousElementSibling;

var playBtn = document.querySelector(".play-btn");
var playBtnIcon = `<i class="fa-solid fa-play"></i>`;
var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

var getTime = function(seconds) {
	// Giây => Phút và giây
	var mins = Math.floor(seconds / 60);
	seconds -= mins * 60;
	var seconds = Math.floor(seconds); //  Lẻ làm tròn xuống

	console.log('seconds',seconds);
	return `${mins < 10 ? `0${mins}` : mins}:${seconds < 10 ?`0${seconds}` :seconds}`
}
audio.addEventListener("loadeddata", function () {
	console.log('audio', getTime(audio.duration));
	durationEl.innerText = getTime(audio.duration)
});

playBtn.addEventListener("click", function () {
	// console.log(1);
	if(audio.paused) { // Check trạng thái
		audio.play();
		this.innerHTML = pauseBtnIcon;
	} else {
		audio.pause(); // Dùng để điểu khiển - phương thức là hành động
		this.innerHTML = playBtnIcon;
	}
});

audio.addEventListener("timeupdate", function () {
	console.log('audio.currentTime', audio.currentTime); // Thuộc tính currentTime
	currentEl.innerText = getTime(audio.currentTime);

	// Lấy ra tỷ lệ phần trăm dựa vào current time và duration
	var value = (audio.currentTime * 100) / audio.duration;
	handleUpdateValue(value)
});

// console.log('progressBarWidth', progressBarWidth);
// console.log('isDrag', isDrag);
// console.log('inintilaClientX', inintilaClientX);
// console.log('initialValue', initialValue);
// console.log('value', value);

