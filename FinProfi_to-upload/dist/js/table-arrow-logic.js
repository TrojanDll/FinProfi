const arrowRight = document.querySelector("#arrow-right");
const arrowLeft = document.querySelector("#arrow-left");
const container = document.querySelector(".container");
const table = document.querySelector(".index-table__wrapper");

const containerWidth = +window.getComputedStyle(container).width.slice(0, -2);
const tableWidth = +window.getComputedStyle(table).width.slice(0, -2);
// console.log(table);
// console.log(tableWidth);
// console.log(containerWidth);

let tablePos = 0;
let maxTablePos = tableWidth - containerWidth;
// console.log(maxTablePos);

// table.style.left = 0;

function tablePosChange(num) {
    if (num < 0) {
        if (tablePos <= Math.abs(num)) {
            tablePos = 0;
        } else {
            tablePos += num;
        }
    } else if (num > 0) {
        if (tablePos >= maxTablePos - num) {
            tablePos = maxTablePos;
        } else {
            tablePos += num;
        }
    }
    // console.log(num);
    // console.log(tablePos);

    table.style.left = -tablePos + "px";
    changeArrowsStatus();
}

function changeArrowsStatus() {
    if (tablePos == 0) {
        arrowLeft.classList.remove("index-table__arrow_enabled");
        arrowLeft.classList.add("index-table__arrow_disabled");
    } else if (tablePos > 0) {
        arrowLeft.classList.add("index-table__arrow_enabled");
        arrowLeft.classList.remove("index-table__arrow_disabled");
    }

    if (tablePos == maxTablePos) {
        arrowRight.classList.remove("index-table__arrow_enabled");
        arrowRight.classList.add("index-table__arrow_disabled");
    } else if (tablePos < maxTablePos) {
        arrowRight.classList.add("index-table__arrow_enabled");
        arrowRight.classList.remove("index-table__arrow_disabled");
    }
}

arrowRight.addEventListener("click", (e) => {
    tablePosChange(tableWidth / 6);
});

arrowLeft.addEventListener("click", (e) => {
    tablePosChange(-(tableWidth / 6));
});
