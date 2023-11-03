// let mainData = [
//     {
//         name: "Основные средства",
//         code: "21",
//     },

//     {
//         name: "Нематериальные активы",
//         code: "120",
//     },

//     {
//         name: "Доходные вложения в материальные активы",
//         code: "130",
//     },
// ];

// let subData = [
//     {
//         name: "Переменные затраты",
//         code: "10",
//     },

//     {
//         name: "Постоянные затраты",
//         code: "11",
//     },

//     {
//         name: "Прсроченнная кредиторская задолженность",
//         code: "12",
//     },

//     {
//         name: "Амортизация основных средств и нематериаль",
//         code: "13",
//     },

//     {
//         name: "Сумма затрат по арендному имуществу",
//         code: "14",
//     },

//     {
//         name: "Дебиторская задолженность на начало года",
//         code: "15",
//     },

//     {
//         name: "Кредиторская задолженность на начало года",
//         code: "16",
//     },

//     {
//         name: "Запасы на начало года",
//         code: "17",
//     },

//     {
//         name: "Прочие краткосрочные активы на начало года",
//         code: "18",
//     },

//     {
//         name: "Прочие краткосрочные обязательства на начало года",
//         code: "19",
//     },

//     {
//         name: "Краткосрочные активы на начало года",
//         code: "20",
//     },

//     {
//         name: "Краткосрочные обязательства на начало года",
//         code: "21",
//     },

//     {
//         name: "Собственный капитал на начало года",
//         code: "22",
//     },

//     {
//         name: "Уставный капитал на начало года",
//         code: "23",
//     },

//     {
//         name: "Долгосрочные активы на начало года",
//         code: "24",
//     },

//     {
//         name: "Долгосрочные финансовые вложения на начало года",
//         code: "25",
//     },

//     {
//         name: "Краткосрочные финансовые вложения на начало года",
//         code: "26",
//     },

//     {
//         name: "Обязательства органиизации по кредитам и займам",
//         code: "27",
//     },
// ];

// const wrapperFirst = document.querySelectorAll(
//     ".report__table__items-wrapper_first"
// );

// const wrapperSecond = document.querySelectorAll(
//     ".report__table__items-wrapper_second"
// );

// function insertMainData() {
//     return new Promise((resolve, reject) => {
//         wrapperFirst.forEach((item) => {
//             let newMainDaraArr = mainData.map((elem) => {
//                 return `
//                     <div class="report__table__item report-table-item">
//                         <div
//                             class="report__table__item__text-wrapper report-table-item__text-wrapper"
//                         >
//                             <div class="report__table__item__header report-table-item__header">
//                                 ${elem.name}
//                             </div>
//                             <div class="report__table__item__code report-table-item__code">
//                                 ${elem.code}
//                             </div>
//                         </div>

//                         <div
//                             class="report__table__item__inputs-wrapper report-table-item__inputs-wrapper"
//                         >
//                             <div class="report-table-item__inputs-wrapper-sub">
//                                 <div class="report-table-item__inputs-wrapper__to-scroll">
//                                     <input
//                                         type="text"
//                                         class="report__table__item__input report-table-item__input"
//                                         placeholder="0"
//                                     />
//                                     <input
//                                         type="text"
//                                         class="report__table__item__input report-table-item__input"
//                                         placeholder="0"
//                                     />
//                                     <input
//                                         type="text"
//                                         class="report__table__item__input report-table-item__input"
//                                         placeholder="0"
//                                     />
//                                     <input
//                                         type="text"
//                                         class="report__table__item__input report-table-item__input"
//                                         placeholder="0"
//                                     />
//                                     <input
//                                         type="text"
//                                         class="report__table__item__input report-table-item__input"
//                                         placeholder="0"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 `;
//             });

//             newMainDaraArr.forEach((block) => {
//                 item.innerHTML += block;
//             });
//         });

//         resolve("рузультирующее значение, которое передано дальше");
//     });
// }

// !задать число инпутов, используеться для задания ширины!
let numberOfInputs = 5;

// insertMainData().then((resMessage) => {
const inputsWrapper = document.querySelectorAll(
    ".report-table-item__inputs-wrapper"
);

function setSizeForInputsWrapper() {
    if (window.innerWidth >= 1230) {
        // console.log(inputsWrapper);
        inputsWrapper.forEach((item) => {
            item.style.width = `${
                numberOfInputs * 185 + 39 * (numberOfInputs - 1)
            }px`;
        });
        // console.log("1230");
        return 0;
    }

    if (window.innerWidth >= 930) {
        inputsWrapper.forEach((item) => {
            item.style.width = `${
                numberOfInputs * 175 + 10 * (numberOfInputs - 1)
            }px`;
        });
        // console.log("930");
        return 0;
    }

    if (window.innerWidth >= 680) {
        inputsWrapper.forEach((item) => {
            item.style.width = `${
                numberOfInputs * 130 + 10 * (numberOfInputs - 1)
            }px`;
        });
        // console.log("680");
        return 0;
    }

    if (window.innerWidth >= 480) {
        inputsWrapper.forEach((item) => {
            item.style.width = `${
                numberOfInputs * 94 + 20 * (numberOfInputs - 1)
            }px`;
        });
        // console.log("480");
        return 0;
    }

    if (window.innerWidth >= 1) {
        document
            .querySelectorAll(".report-table-item__inputs-wrapper__to-scroll")
            .forEach((item) => {
                // console.log(item);
                item.style.width = `${
                    numberOfInputs * 149 + 22 * (numberOfInputs - 1)
                }px`;
            });
        // console.log("1");
        return 0;
    }
}

setSizeForInputsWrapper();
// });

// wrapperSecond.forEach((item) => {
//     let newSubDaraArr = subData.map((elem) => {
//         return `
//         <div class="report__table__item report-table-item">
//             <div
//                 class="report__table__item__text-wrapper report-table-item__text-wrapper"
//             >
//                 <div class="report__table__item__header report-table-item__header">
//                     ${elem.name}
//                 </div>
//                 <div class="report__table__item__code report-table-item__code">
//                     ${elem.code}
//                 </div>
//             </div>

//             <div
//                 class="report__table__item__inputs-wrapper report-table-item__inputs-wrapper"
//             >
//                 <div class="report-table-item__inputs-wrapper-sub">
//                     <div class="report-table-item__inputs-wrapper__to-scroll">
//                         <input
//                             type="text"
//                             class="report__table__item__input report-table-item__input"
//                             placeholder="0"
//                         />
//                         <input
//                             type="text"
//                             class="report__table__item__input report-table-item__input"
//                             placeholder="0"
//                         />
//                         <input
//                             type="text"
//                             class="report__table__item__input report-table-item__input"
//                             placeholder="0"
//                         />
//                         <input
//                             type="text"
//                             class="report__table__item__input report-table-item__input"
//                             placeholder="0"
//                         />
//                         <input
//                             type="text"
//                             class="report__table__item__input report-table-item__input"
//                             placeholder="0"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `;
//     });

//     newSubDaraArr.forEach((block) => {
//         item.innerHTML += block;
//     });
// });
