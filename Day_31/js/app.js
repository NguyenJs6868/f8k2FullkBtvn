/*
Trong thời gian đếm ngược sẽ không click vào button để lấy link được -> Hàm set interval đếm ngược, chặn sự kiện click vs prevent
Sau khi hết thời gian sẽ có bấm vào button để lấy link -> hết thời gian thì add class UI vs mở xóa hàm chặn click hoặc add url vào
Trong thời gian chờ đợi, nếu chuyển sang tab khác => Bộ đếm sẽ dừng lại -> Bắt sự kiện chuyển tab? ...
... chặn ko lấy được link chuyển tab ngay cả khi mở F12 lên sửa

https://fullstack.edu.vn/
*/
var counterEl = document.querySelector(".counter");
console.log('counterEl: ', [counterEl]);

var btnGetLink = document.querySelector(".action button");
console.log('btnGetLink: ', [btnGetLink]);


var initStartTime = 2; // 30 giây ban đầu cho tự chạy
var flagTimeOut = false; // Cở hết giờ, sau 30s sẽ mở = true

function countdown(seconds) {
	var startTime = Date.now();
	// console.log("startTime: ", startTime);

	function updateTimer() {
			var elapsedTime = Date.now() - startTime;
			var remainingTime = seconds * 1000 - elapsedTime;
			// Thời gian còn lại = 30s*1000 => (30 000) - thời gian trôi qua

			if (remainingTime <= 0) {
					console.log("Hết thời gian!");
					flagTimeOut = true;
					counterEl.textContent = 0;
					btnGetLink.removeAttribute("disabled");

			} else {
					var secondsRemaining = Math.ceil(remainingTime / 1000);
					console.log('secondsRemaining: ', secondsRemaining);
					counterEl.textContent = secondsRemaining // Gám lại text time đếm ngược

					requestAnimationFrame(updateTimer);
			}
	}

	requestAnimationFrame(updateTimer);
}

countdown(initStartTime);

// Gán sự kiện chuyển trang cho Nút GetLink
btnGetLink.addEventListener("click", function () {
	if (flagTimeOut) {
		// window.location.href = 'https://fullstack.edu.vn';
		window.open("https://fullstack.edu.vn", "_blank"); //This will open Google in a new window.
	}
});