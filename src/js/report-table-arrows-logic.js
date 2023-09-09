const arrowRightFirst = document.querySelector(
    ".report-table__arrow_right-first"
);
const arrowLeftFirst = document.querySelector(
    ".report-table__arrow_left-first"
);
const arrowRightSecond = document.querySelector(
    ".report-table__arrow_right-second"
);
const arrowLeftSecond = document.querySelector(
    ".report-table__arrow_left-second"
);
const tableFirst = document.querySelector(
    ".report-table__inputs-wrapper_first"
);
const tableSecond = document.querySelector(
    ".report-table__inputs-wrapper_second"
);

// const containerWidth = +window.getComputedStyle(container).width.slice(0, -2);
const tableWidth = +window.getComputedStyle(tableSecond).width.slice(0, -2);

let containerWidth;

if (window.innerWidth >= 930) {
    containerWidth = 409;
} else if (window.innerWidth >= 680) {
    containerWidth = 230;
}

let tablePosFirst = 0;
let tablePosSecond = 0;
let maxTablePos = tableWidth - containerWidth;

console.log(tableWidth);

console.log(containerWidth);
console.log(maxTablePos);

changeArrowsStatusFirst();
changeArrowsStatusSecond();

function tablePosChangeFirst(num) {
    if (num < 0) {
        if (tablePosFirst <= Math.abs(num)) {
            tablePosFirst = 0;
        } else {
            tablePosFirst += num;
        }
    } else if (num > 0) {
        if (tablePosFirst >= maxTablePos - num) {
            tablePosFirst = maxTablePos;
        } else {
            tablePosFirst += num;
        }
    }
    // console.log(num);
    // console.log(tablePos);

    tableFirst.style.left = -tablePosFirst + "px";
    console.log(tablePosFirst);
    changeArrowsStatusFirst();
}

function changeArrowsStatusFirst() {
    if (tablePosFirst == 0) {
        arrowLeftFirst.classList.remove("report-table__arrow_enabled");
        arrowLeftFirst.classList.add("report-table__arrow_disabled");
    } else if (tablePosFirst > 0) {
        arrowLeftFirst.classList.add("report-table__arrow_enabled");
        arrowLeftFirst.classList.remove("report-table__arrow_disabled");
    }

    if (tablePosFirst == maxTablePos) {
        arrowRightFirst.classList.remove("report-table__arrow_enabled");
        arrowRightFirst.classList.add("report-table__arrow_disabled");
    } else if (tablePosFirst < maxTablePos) {
        arrowRightFirst.classList.add("report-table__arrow_enabled");
        arrowRightFirst.classList.remove("report-table__arrow_disabled");
    }
}

arrowRightFirst.addEventListener("click", (e) => {
    console.log("Right event");
    tablePosChangeFirst(tableWidth / 6);
});

arrowLeftFirst.addEventListener("click", (e) => {
    console.log("Leftsdvs event");
    tablePosChangeFirst(-(tableWidth / 6));
});

function tablePosChangeSecond(num) {
    if (num < 0) {
        if (tablePosSecond <= Math.abs(num)) {
            tablePosSecond = 0;
        } else {
            tablePosSecond += num;
        }
    } else if (num > 0) {
        if (tablePosSecond >= maxTablePos - num) {
            tablePosSecond = maxTablePos;
        } else {
            tablePosSecond += num;
        }
    }
    // console.log(num);
    // console.log(tablePos);

    tableSecond.style.left = -tablePosSecond + "px";
    console.log(tablePosSecond);
    changeArrowsStatusSecond();
}

function changeArrowsStatusSecond() {
    if (tablePosSecond == 0) {
        arrowLeftSecond.classList.remove("report-table__arrow_enabled");
        arrowLeftSecond.classList.add("report-table__arrow_disabled");
    } else if (tablePosSecond > 0) {
        arrowLeftSecond.classList.add("report-table__arrow_enabled");
        arrowLeftSecond.classList.remove("report-table__arrow_disabled");
    }

    if (tablePosSecond == maxTablePos) {
        arrowRightSecond.classList.remove("report-table__arrow_enabled");
        arrowRightSecond.classList.add("report-table__arrow_disabled");
    } else if (tablePosSecond < maxTablePos) {
        arrowRightSecond.classList.add("report-table__arrow_enabled");
        arrowRightSecond.classList.remove("report-table__arrow_disabled");
    }
}

arrowRightSecond.addEventListener("click", (e) => {
    console.log("Right event");
    tablePosChangeSecond(tableWidth / 6);
});

arrowLeftSecond.addEventListener("click", (e) => {
    console.log("Leftsdvs event");
    tablePosChangeSecond(-(tableWidth / 6));
});
