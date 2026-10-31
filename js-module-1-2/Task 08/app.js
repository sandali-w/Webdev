let startYear = parseInt(prompt("Enter start year:"));
let endYear = parseInt(prompt("Enter end year:"));
let listHtml = "";

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        listHtml += `<li>${year}</li>`;
    }
}

document.querySelector("#leap-list").innerHTML = listHtml;