

var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var repeatBtn = document.querySelector(".replay-btn");
var volumeBtn = document.querySelector(".volume-btn");
var tooltiptext = document.querySelector(".tooltiptext");

//Yêu cầu: Chuyển đổi hết thành phần trăm (%)

var handleUpdateValue = function (value) { // update thanh tiến trình
  progress.style.width = `${value}%`;
};

//Tính độ dài của progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; //Cắm cờ
var initialClientX;
var initialValue = 0;
var value; // % thanh kéo
var audioDuration = 0; // Tổng thời gian của bài nhạc
var isRepeat = false;

progressBar.addEventListener("mousedown", function (e) {
  console.log('progressBar', progressBar);

  if (e.which === 1) { // Click chuột trái
    var offsetX = e.offsetX;
    // console.log('offsetX', offsetX);
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;

    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  // console.log('progressSpan', e);
  // console.log('progressSpan e.clientX', e.clientX);
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  // console.log('document mousemove');

  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    handleUpdateValue(value);
  }
});

document.addEventListener("mouseup", function () {
  // console.log('document mouseup');
  if(isDrag){
    var playTimeCurrent = (audioDuration / 100) * value; // Tua nhạc tay
    console.log('timeCurrenPlay:', playTimeCurrent);
    console.log('value:', value, '%');
    audio.currentTime = playTimeCurrent // Thuộc tính currentTime! dc gán lại
  }

  isDrag = false;
  initialValue = value;

});

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");
console.log('audio: ', audio);

var durationEl = progressBar.nextElementSibling;

var currentTimeEl = progressBar.previousElementSibling;

var playBtn = document.querySelector(".play-btn");

var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

var playBtnIcon = `<i class="fa-solid fa-play"></i>`;

var getTime = function (seconds) {
  //Giây => Phút và giây
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
//Lắng nghe sự kiện load xong nhạc
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
  audioDuration = audio.duration // Lấy tổng thời lượng nhạc = giây
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("timeupdate", function () { // Kiểm tra được nhạc đã ntn hết chưa
  // console.log("Đang chạy");
  currentTimeEl.innerText = getTime(audio.currentTime); // Cập nhập số time cho time hiện tại


  //Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
  var value = (audio.currentTime * 100) / audio.duration;
  if(!isDrag){ // Khi không kéo thì update value % đã chạy
    handleUpdateValue(value);
    console.log('Khi không kéo % đã chạy hiện tại là: ', value);
    if (value === 100 && isRepeat) { // Khi tự phát hết nhạc thì tua về vs thay icon
      value = 0;
      playBtn.click();
      playBtn.innerHTML = playBtnIcon;
    }
  }
});

// Kiểm tra xem quá trình phát lại video đã kết thúc chưa:
// Đưa các giá trị về ban đầu
audio.addEventListener("ended", function () {
  value = 0;
  audio.currentTime = 0;
  handleUpdateValue(0);
  playBtn.innerHTML = pauseBtnIcon;
})

// Lặp lại nhạc
repeatBtn.addEventListener("click", function () {
  if (isRepeat) {
    isRepeat = false;
  } else {
    isRepeat = true;
  }
  console.log('isRepeat: ', isRepeat);
});

progressBar.addEventListener("mousemove", function(e){
  var X = e.offsetX;
  console.log(X);
  document.querySelector(".tooltiptext").style.left = X + "px"
  tooltiptext.innerText = getTime((X)); // Cập nhập số time cho time hiện tại

})

// -------------------------------------------------------------------------------------------------
// var showAllValue = document.querySelector(".show-all-value");
// showAllValue.innerHTML =
// `
// progressBarWidth: ${progressBarWidth} <br>
// isDrag: ${isDrag} <br>
// initialClientX: ${initialClientX} <br>
// initialValue: ${initialValue} <br>
// value: ${value} <br>
// audio: ${audio} <br>
// durationEl: ${durationEl} <br>
// currentTimeEl: ${currentTimeEl} <br>
// isRepeat: ${isRepeat} <br>
// `;