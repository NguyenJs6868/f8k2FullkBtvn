var checkAll = document.querySelector(".check-all");
var checkItems = document.querySelectorAll(".check-item"); // 1 Danh sách
var listCheckboxItem = document.querySelector(".list-check-item");

checkAll.addEventListener("change", function (e) {
	// console.log(e);
	var checkStatus = this.checked;

	checkItems.forEach(function (checkItem) {
		checkItem.checked = checkStatus;
	});
});

checkItems.forEach(function (checkItem) {

	checkItem.addEventListener("change", function (e) {
		// var status = checkItems.checked;
		var status = Array.from(checkItems).every(function (checkbox) {
			return checkbox.checked === true;
		});

		checkAll.checked = status;
	});

});

