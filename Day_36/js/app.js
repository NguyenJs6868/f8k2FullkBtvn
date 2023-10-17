/*
 1 Covid-19 xuất hiện lần đầu tiên ở nước nào ?
 ["Viet Nam", "USA", "China", "India"]

 2 Thực hiện giãn cách xã hội tối thiểu trong bao nhiêu ngày ?
 ["15 ngày", "7 ngày", "21 ngày", "1 tháng"]

 3 Con chó có mấy cái đùi
 ["1 đùi", "2 đôi đùi", "2 đùi", "4 tay" ]

 4 Một con vịt có mấy cái cánh ?
 ["1 cánh", "2 đôi cánh", "1 đôi cánh", "Không có"]

 5 Bạn sẽ làm được bài tập về nhà này chứ?
 ["Không :v", "Có", "Dễ :v", "Thôi dẹp đi"]
 require-text": "(Choose 2 correct answer(s))"

 6 Bạn có phải developer không?
 ["Không", "Có", "Chắc chắn rồi", "Không bíc :v"]
 require-text": "(Choose 2 correct answer(s))"

 7 Chim cánh cụt có mấy cánh?
 ["Không có cánh", "2 chân", "2 tay", "2 cánh"]

 8 Khẩu hiệu 5K là gì ?
 [Không đeo khẩu trang", Không tụ tập nơi đông người", Không ra đường", "Khoảng cách - Khẩu trang - Khử khuẩn - Khai báo y tế - Khử khuẩn"]

*/

// màn start click nút ->

import { client } from "./client.js";

const quizizzGameEL = document.querySelector(".quizizzGame");
const quizizzGamesStartEL = quizizzGameEL.querySelector(".quizizzGames-start");
const quizizzGamesPlayEL = quizizzGameEL.querySelector(".quizizzGames-play");

const btnStartEL = quizizzGameEL.querySelector(".btn-start");
const downnTimeEL = quizizzGameEL.querySelector(".downn-time");

const timeIKntervalStart = 3;

btnStartEL.addEventListener("click", function() {
    console.log('Click Start');

    // ẩn nút start
    btnStartEL.style.display = 'none';
    downnTimeEL.style.display = "flex";

    function countdown(seconds) {
        let count = seconds;

        const timer = setInterval(() => {
            console.log(count);
            count--;
            downnTimeEL.innerText = count;
            if (count === 0) {
                downnTimeEL.innerText = "GO"
            }

            if (count < 0) {
                clearInterval(timer);
                console.log("Đếm ngược hoàn thành!");

                quizizzGamesStartEL.style.display = 'none';
                quizizzGamesStartEL.remove();
                quizizzGamesPlayEL.style.visibility = 'visible';

            }
        }, 1000);
    }
    countdown(timeIKntervalStart);


});

async function getListQuestion  () {
    const res = await client.get(`/quizz-questions`);
    console.log('getListQuestion res: ', res);
};
getListQuestion();

async function getCorrectAnswer  () {
    const res = await client.get(`/quizz-correct-answer/4`);
    console.log('getCorrectAnswer res: ', res);
};
getCorrectAnswer();

// -> remove màn start đi -> hiện màn PLay lên