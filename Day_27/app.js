const products = [
	{
		id: 1,
		name: 'Sản phẩm 1',
		price: 1000,
	},
	{
		id: 2,
		name: 'Sản phẩm 2',
		price: 2000,
	},
	{
		id: 3,
		name: 'Sản phẩm 3',
		price: 3000,
	},
	{
		id: 4,
		name: 'Sản phẩm 4',
		price: 4000,
	},
]

// const para = document.createElement("p");

const AddToCartPage = document.querySelector('.add-to-cart-page');
const productTable = AddToCartPage.querySelector('#product_table');

const listProduct = Array.from(productTable.children).slice(1); // Bỏ head
console.log('listProduct: ', listProduct, typeof listProduct);

let id_this_item = null;
let input_this_item = null;

listProduct.forEach(item => {
	// console.log(item.children[0].children[3].children[1]);
	id_this_item = item.children[0].children[3].children[1];
	input_this_item = item.children[0].children[3].children[0];

	input_this_item.addEventListener("change", function (e) {
		input_this_item = e.target.value;
		console.log('input_this_item: ', input_this_item);
	});

	console.log('input_this_item: ', input_this_item);

	id_this_item.addEventListener("click", function (e) {
		// console.log('id_this_item: ', e.target.id);
		id_this_item = e.target.id;
	});

});

// console.log('id_this_item: ',id_this_item);


