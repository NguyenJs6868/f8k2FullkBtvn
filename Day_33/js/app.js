const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// Tạo một thể hiện mới của SpeechRecognition
const speechRecognition = new SpeechRecognition();
// Sử dụng tiếng Việt
speechRecognition.lang = "vi-VN";

// Truy vấn từng thành phần bút vs đoạn văn
var searchBoxEl = document.querySelector('.search-box');
var btnStarToTalk = document.querySelector('.btn');
var actionEl = document.querySelector('.action');
var resultEl = document.querySelector('.result');


btnStarToTalk.addEventListener('click', function () {
	console.log('Bấm vào đây để nói');
   if (this.classList.contains("speaking")) {
      speechRecognition.stop();
    } else {
      speechRecognition.start();
    }
});

speechRecognition.addEventListener("start", function (e) {
   console.log('Đã bắt đầu nhận dạng giọng nói: ');
   btnStarToTalk.classList.add("speaking"); // Nút chuyển màu xanh
   actionEl.innerText = 'Hãy nói nội dung bạn muốn';

});

speechRecognition.addEventListener("result", function (e) {
   let result = e.results[0][0].transcript;
   console.log('result: ', result);
   // In text thu được vào thẻ result
   actionEl = `<p>Your request: ${result}</p>`;
   listenProcess(result);
   //
});

// hàm tái sử dụng vs tham số truyền vào và rút gọn windowOpen mở cửa sổ mới
const windowOpen = (href) => {
   window.open(href);
 };

const listenProcess = (result) => {
   let flagListed = false;
   let href;
   let transcriptListWords = `${result}`;

   // Nếu chuỗi trả về có nhiều từ bao gồm từ cần tìm thì = true -> 'YouTube', 'YouTube'
   if (transcriptListWords) {
      console.log('transcriptListWords: ', transcriptListWords);

      if (transcriptListWords.match(/Google/gi)) {
         flagListed = true;
         href = "https://www.google.com.vn";
      }

      if (transcriptListWords.match(/Facebook/gi)) {
         flagListed = true;
         href = "https://www.facebook.com";
      }

      if (transcriptListWords.match(/Youtube/gi)) {
         flagListed = true;
         href = "https://www.youtube.com";
      }

      if (transcriptListWords.match(/Google Drive/gi)) {
         flagListed = true;
         href = "https://drive.google.com/drive/my-a";
      }

      if (transcriptListWords.match(/Google Map/gi)) {
         flagListed = true;
         href = "https://www.google.com/maps";
      }

      if (!flagListed) {
         resultEl.innerText = `Không thực hiện được yêu cầu`;
      }

      // actionEl.classList.add = "success";

   }

   // Sau lần nỗi href sẽ được gán động vào windowOpen
   if (href) {
      setTimeout(function () {
         actionEl.innerText = 'Đã nói xong. Hy vọng kết quả như ý bạn';
         windowOpen(href);
      }, 2000);
   }
   //
}

speechRecognition.addEventListener("end", function () {
   console.log('speechRecognition end');
   btnStarToTalk.classList.remove("speaking");
   btnStarToTalk.innerText = "Bấm vào đây để nói";
   actionEl.innerText = '';

});

// Dừng nhận diện khi giọng nói kết thúc
// recognition.onspeechhend = () => {
// 	console.log('Dừng nhận diện khi giọng nói kết thúc');
// 	recognition.stop();
// };

// recognition.onend = function() {
// 	console.log('Nhận dạng giọng nói đã kết thúc');
// };

// recognition.onerror = function(event) {
// 	console.error('Lỗi nhận dạng giọng nói: ', event.error);
// };







