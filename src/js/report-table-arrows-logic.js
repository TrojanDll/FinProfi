const arrowRight = document.querySelector(".report__table__arrow_right");
const arrowLeft = document.querySelector(".report__table__arrow_left");
const table = document.querySelectorAll(
    ".report-table-item__inputs-wrapper__to-scroll"
);

let containerWidth = 0;
const tableWidth = +window.getComputedStyle(table[0]).width.slice(0, -2);
console.log(tableWidth);

if (window.innerWidth >= 1230) {
    containerWidth = 408;
} else if (window.innerWidth >= 930) {
    containerWidth = 358;
} else if (window.innerWidth >= 680) {
    containerWidth = 268;
} else if (window.innerWidth >= 480) {
    containerWidth = 210;
} else if (window.innerWidth >= 1) {
    containerWidth = 320;
}

let tablePos = 0;
let maxTablePos = tableWidth - containerWidth;

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

    table.forEach((table) => {
        table.style.left = -tablePos + "px";
    });

    changeArrowsStatus();
}

function changeArrowsStatus() {
    if (tablePos == 0) {
        arrowLeft.classList.remove("report__table__arrow_enabled");
        arrowLeft.classList.add("report__table__arrow_disabled");
    } else if (tablePos > 0) {
        arrowLeft.classList.add("report__table__arrow_enabled");
        arrowLeft.classList.remove("report__table__arrow_disabled");
    }

    if (tablePos == maxTablePos) {
        arrowRight.classList.remove("report__table__arrow_enabled");
        arrowRight.classList.add("report__table__arrow_disabled");
    } else if (tablePos < maxTablePos) {
        arrowRight.classList.add("report__table__arrow_enabled");
        arrowRight.classList.remove("report__table__arrow_disabled");
    }
}

arrowRight.addEventListener("click", (e) => {
    tablePosChange(tableWidth / 6);
});

arrowLeft.addEventListener("click", (e) => {
    tablePosChange(-(tableWidth / 6));
});
