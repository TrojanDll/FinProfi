// const arrowRight = document.querySelector("#arrow-right");
// const arrowLeft = document.querySelector("#arrow-left");
// const container = document.querySelector(".container");
// const table = document.querySelector(".index-table__wrapper");

// // console.log(container.style);
// let tables = [];

// // for (let tableItem of table) {
// //   let columnWidthSumm = 0;
// //   tableItem.querySelectorAll("th").forEach((item) => {columnWidthSumm += item.style.width});
// //   tables.push({ tableItem: tableItem, columnWidthSumm: columnWidthSumm });
// // }

// const containerWidth = +window.getComputedStyle(container).width.slice(0, -2);
// const tableWidth = +window.getComputedStyle(table).width.slice(0, -2);

// let tablePos = 0;
// let maxTablePos = tableWidth - containerWidth;
// // console.log(maxTablePos);

// // table.style.left = 0;

// function tablePosChange(num) {
//   if (num < 0) {
//     if (tablePos <= Math.abs(num)) {
//       tablePos = 0;
//     } else {
//       tablePos += num;
//     }
//   } else if (num > 0) {
//     if (tablePos >= maxTablePos - num) {
//       tablePos = maxTablePos;
//     } else {
//       tablePos += num;
//     }
//   }
//   // console.log(num);
//   // console.log(tablePos);

//   table.style.left = -tablePos + "px";
//   changeArrowsStatus();
// }

// function changeArrowsStatus() {
//   if (tablePos == 0) {
//     arrowLeft.classList.remove("index-table__arrow_enabled");
//     arrowLeft.classList.add("index-table__arrow_disabled");
//   } else if (tablePos > 0) {
//     arrowLeft.classList.add("index-table__arrow_enabled");
//     arrowLeft.classList.remove("index-table__arrow_disabled");
//   }

//   if (tablePos == maxTablePos) {
//     arrowRight.classList.remove("index-table__arrow_enabled");
//     arrowRight.classList.add("index-table__arrow_disabled");
//   } else if (tablePos < maxTablePos) {
//     arrowRight.classList.add("index-table__arrow_enabled");
//     arrowRight.classList.remove("index-table__arrow_disabled");
//   }
// }

// arrowRight.addEventListener("click", (e) => {
//   tablePosChange(tableWidth / 6);
// });

// arrowLeft.addEventListener("click", (e) => {
//   tablePosChange(-(tableWidth / 6));
// });

// var tables = document.getElementsByClassName("index-table__wrapper");
let tables = document.querySelectorAll(".index-table__wrapper");

const tableSections = document.querySelectorAll(".index-table");
tableSections.forEach((tableSection) => {
  const header = tableSection.querySelector(".index-table__item-header");
  let headerHeight =
    +window.getComputedStyle(header).height.slice(0, -2) + 3 + "px";
  console.log(headerHeight);
  // console.log(tableSection.querySelector(".index-table__arrows"));
  // tableSection.querySelector(".index-table__arrows").style.top = headerHeight;
});

tables.forEach(function (table, i) {
  var id = table.dataset["id"];
  const arrowRight = document.querySelector("#arrow-right_" + id);
  const arrowLeft = document.querySelector("#arrow-left_" + id);
  const container = document.querySelector("#container_" + id);

  //const table = document.querySelector(".index-table__wrapper");
  console.log(arrowRight);

  const containerWidth = +window.getComputedStyle(container).width.slice(0, -2);
  const tableWidth = +window.getComputedStyle(table).width.slice(0, -2);

  if (containerWidth == tableWidth) {
    arrowRight.style.display = "none";
    arrowLeft.style.display = "none";
  } else if (containerWidth != tableWidth) {
    arrowRight.style.display = "block";
    arrowLeft.style.display = "block";
  }

  // console.log(table);
  // console.log(`tableWidth ${tableWidth}`);
  // console.log(`containerWidth ${containerWidth}`);

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
    console.log("arrowRight");
  });

  arrowLeft.addEventListener("click", (e) => {
    tablePosChange(-(tableWidth / 6));
    console.log("arrowLeft");
  });
});
