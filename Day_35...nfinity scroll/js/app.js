import { client } from "./client.js";

const listCategoryEl = document.querySelector(".list-category");
const loadingEl = document.getElementById("loading");

let isLoadingData = false;
let page = 1;
let limit = 2; // Giới hạn
let start = 0; // Bắt đầu lấy từ bài viết vs index = 0

// Lấy chiều cao của hàm hình
const windowHeight = window.innerHeight;
console.log('windowHeight: ', windowHeight);

const getCategory = async () => {
    console.log('getCategory start: ', start);
    console.log('getCategory isLoadingData: ', isLoadingData);

    if (!isLoadingData) {
        isLoadingData = true ; // Mở cờ
        loadingEl.classList.display = "block";


        // Gọi hàm Get list
        const response = await client.get( `/categorys?_start=${start}&_limit=${limit}`);
        console.log('getCategory res: ', response);

        const status = Number(response['response']['status']);
        console.log('getCategory status: ', status);

        const { data } = response;
        console.log('getCategory data: ', data);


        if (status === 200) {
            // Lặp và in dữ liệu lên html
            listCategoryEl.innerHTML =
            `
                ${data.map((item) =>
                    `
                    <div class="wrap-item">
                        <h3 class="title">${item.title}</h3>
                        <div class="item">
                            <img src="${item.thumbnail}" alt="${item.type[0]}">
                        </div>
                        <div class="item-content">
                            ${item.content}
                        </div>
                    </div>
                    `
                )}
            `




            start += limit; // Mỗi lần cho gọi bao nhiêu, sau khởi đầu gọi tăng lên bấy nhiêu
            loadingEl.style.display = "none";

        }



    }
};

getCategory(); // Gọi hiển thị lần đầu

function handleScroll() {
	console.log('Cuộn  1 khấc chuột gọi API GET -  Tăng số limit lên, event :');

    const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
        );
        const scrollTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
        );

        if (scrollTop + windowHeight >= documentHeight) {
            console.log("Đã cuộn tới cuối chiều cao màn hình");
            getCategory();
        }
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