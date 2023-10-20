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

// import
import { client } from "./client.js";
// Truy vấn phần tử
const quizizzGameEL = document.querySelector(".quizizzGame");
const quizizzGamesStartEL = quizizzGameEL.querySelector(".quizizzGames-start");
const quizizzGamesPlayEL = quizizzGameEL.querySelector(".quizizzGames-play");

const btnStartEL = quizizzGameEL.querySelector(".btn-start");
const downnTimeEL = quizizzGameEL.querySelector(".downn-time");
// Gán biến
const timeIKntervalStart = 3;
let arrQuestion = [];
let arrIdQues = [];


 btnStartEL.addEventListener("click", async function () {
    console.log('Click Start');
    // ẩn nút start
    btnStartEL.style.display = 'none';
    // chèn ui đếm ngược
    downnTimeEL.style.display = "flex";
    countdown(timeIKntervalStart)
    // Gọi luôn câu hỏi cho kịp - tùy
    await getListQuestion();
    console.log('arrQuestion sau gán: ', arrQuestion);
    if (arrQuestion.length > 0) {
        playQuiz();
    }
});

// Hàm đếm ngược
async function countdown(seconds) {
    const timer = setInterval(() => {
        console.log('countdown: ' ,seconds);
        seconds--;
        downnTimeEL.innerText = seconds;
        if (seconds === 0) {
            downnTimeEL.innerText = "GO" // Gán chữ go 0s
        }
        if (seconds < 0) {
            clearInterval(timer);
            console.log("Đếm ngược hoàn thành!");
            quizizzGamesStartEL.style.display = 'none';
            quizizzGamesStartEL.remove(); // Xóa màn Start
            quizizzGamesPlayEL.style.visibility = 'visible'; // Hiện màn Play
        }
    }, 1000);
}

/*
Ban đầu Gọi API list câu hỏi về đếm length -> để random các số trong giới hạn đó
*/
async function getListQuestion  () {
    try {
        const res = await client.get(`/quizz-questions`);
        // console.log('getListQuestion res: ', res);
        const status = res?.response.status;
        const data = res?.data;

        if (status === 200) {
            console.log('getListQuestion 200');
            arrQuestion = data; // Gán dữ liệu câu hỏi
        }
    } catch (error) {
        alert(error)
    }
};

// -> remove màn start đi -> hiện màn PLay lên
const arrNumberQuesUsed = [];

async function playQuiz() {

    arrQuestion.map(item => {
        console.log('item: ', item);
        arrIdQues.push(item.id);
    });

    console.log('playQuiz arrIdQues: ', arrIdQues);

    // console.log('playQuiz arrIdQues: ', arrIdQues);


};

function randomNumber(quantity) {
    console.log('randomNumber');
    const arrNumber = []; //
    // tạo ra ảng các số có só lượng câu hỏi theo số lượng các câu hỏi
    for (let i = 1; i <= quantity.length; i++) {
        arrNumber.push(i);
        console.log('i: ', i);
    }

    // random số để lấy câu hỏi ngẫu nhiên
    const numberRamdomQues = Math.floor(Math.random() * arrNumber);

    console.log('numberRamdomQues: ', numberRamdomQues);
    return numberRamdomQues;
};

// function getOneQues() {};


async function getCorrectAnswer  () {
    const res = await client.get(`/quizz-correct-answer/4`);
    console.log('getCorrectAnswer res: ', res);
};
// getCorrectAnswer();
