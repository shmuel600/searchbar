//model
const database = ["apple", "banana", "orange", "bananas", "pizza"];
const searchBar = document.querySelector(".search-bar");
const items = document.querySelector(".items");
const noResult = "No result found";

//view
function view(arr) {
    items.innerHTML = "";
    if (arr.length === 0) {
        showItem(noResult);
    }
    for (const item of arr) {
        showItem(item);
    }
}
function showItem(item) {
    const div = document.createElement("div");
    div.textContent = item;
    div.classList.add(item === noResult ? "no-result" : "item");
    items.append(div);
}

//main
view(database);
searchBar.oninput = function () {
    const filtered = database.filter(function (item) {
        return item.startsWith(searchBar.value);
    })
    view(filtered);
}
