import { client } from "./client.js";

const listCategoryEl = document.querySelector(".list-category");
const loadingEl = document.querySelector(".loading");

let isLoadingData = false;
let page = 1;
let limit = 2; // Giới hạn
// let limit = null;
let start = 0; // Bắt đầu lấy từ bài viết vs index = 0

// Lấy chiều cao của hàm hình

var windowHeight = window.innerHeight;
console.log('windowHeight: ', windowHeight);

document.body.style.minHeight = (windowHeight + 0.1) + 'px';

let arrCategory = [];

const getCategory = async () => {
    console.log('getCategory start: ', start);
    console.log('getCategory isLoadingData: ', isLoadingData);

    if (!isLoadingData) {
        isLoadingData = true ; // Mở cờ
        loadingEl.classList.display = "block";


        // Gọi hàm Get list
        const response = await client.get( `/categorys?_start=${start}&_limit=${limit ? limit : ''}`);
        console.log('getCategory res: ', response);

        const status = Number(response['response']['status']);
        console.log('getCategory status: ', status);

        const { data } = response;
        console.log('getCategory data: ', data);

        // Lấy tạm độ dài data trả all ntn vì tìm mãi ko thấy total đâu cả
        const res = await client.get( `/categorys?_start=${0}&_limit=${''}`);


        const lengthData = res.data.length;
        console.log('getCategory lengthData: ', lengthData);

        if (status === 200) {
            // Lặp và in dữ liệu lên html

            console.log('arrCategory: ', arrCategory);
            data.map((item) => {
                arrCategory.push(
                `
                    <div class="wrap-item">
                        <h3 class="title">${item.title}</h3>
                        <div class="tag">${item.tag}</div>
                        <div class="item">
                            <img src="${item.thumbnail}" alt="${item.type[0]}">
                        </div>
                        <div class="item-content">
                            ${item.content}
                        </div>
                    </div>
                `
                );
            });

            listCategoryEl.innerHTML = arrCategory;

            start += limit; // Mỗi lần cho gọi bao nhiêu, sau khởi đầu gọi tăng lên bấy nhiêu


            if (start < lengthData) { // Đạt độ dài của mảng data thì dừng không gọi nữa

                loadingEl.classList.display = "none";

                isLoadingData = false;
            };

        }



    }
};

getCategory(); // Gọi hiển thị lần đầu

function handleScroll() {
	console.log('Cuộn  1 khấc chuột gọi API GET -  Tăng số limit lên, event :');

//     const windowHeight = window.innerHeight;
//     console.log('windowHeight: ', windowHeight);
//
//     const documentHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
//     const scrollTop = Math.max(
//         window.pageYOffset,
//         document.documentElement.scrollTop,
//         document.body.scrollTop
//     );
//
//     if (scrollTop + windowHeight >= documentHeight) {
//         console.log("Đã cuộn tới cuối chiều cao màn hình");
//     }
    getCategory();

}
window.addEventListener("scrollend", handleScroll);

// import fs from './loopFile.json';
//
// function loop() {
//     console.log('loop');
//     // Đọc dữ liệu từ file JSON ban đầu
//     const rawData = fs.readFileSync('data.json');
//     const data = JSON.parse(rawData);
//
//     // Tạo 800 bản ghi mới với id tăng dần
//     const new_data = [];
//     for (let i = 1; i <= 800; i++) {
//     data.categorys.forEach(category => {
//         const newCategory = { ...category };
//         newCategory.id = i;
//         new_data.push(newCategory);
//         i++;
//     });
//     }
//
//     // Ghi dữ liệu mới vào file JSON
//     fs.writeFileSync('new_data.json', JSON.stringify(new_data, null, 2));
// };
//
// loop();