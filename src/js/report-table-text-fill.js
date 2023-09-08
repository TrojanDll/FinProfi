let mainData = [
    {
        name: "Основные средства",
        code: "21",
    },

    {
        name: "Нематериальные активы",
        code: "120",
    },

    {
        name: "Доходные вложения в материальные активы",
        code: "130",
    },
];

let subData = [
    {
        name: "Переменные затраты",
        code: "10",
    },

    {
        name: "Постоянные затраты",
        code: "11",
    },

    {
        name: "Прсроченнная кредиторская задолженность",
        code: "12",
    },

    {
        name: "Амортизация основных средств и нематериаль",
        code: "13",
    },

    {
        name: "Сумма затрат по арендному имуществу",
        code: "14",
    },

    {
        name: "Дебиторская задолженность на начало года",
        code: "15",
    },

    {
        name: "Кредиторская задолженность на начало года",
        code: "16",
    },

    {
        name: "Запасы на начало года",
        code: "17",
    },

    {
        name: "Прочие краткосрочные активы на начало года",
        code: "18",
    },

    {
        name: "Прочие краткосрочные обязательства на начало года",
        code: "19",
    },

    {
        name: "Краткосрочные активы на начало года",
        code: "20",
    },

    {
        name: "Краткосрочные обязательства на начало года",
        code: "21",
    },

    {
        name: "Собственный капитал на начало года",
        code: "22",
    },

    {
        name: "Уставный капитал на начало года",
        code: "23",
    },

    {
        name: "Долгосрочные активы на начало года",
        code: "24",
    },

    {
        name: "Долгосрочные финансовые вложения на начало года",
        code: "25",
    },

    {
        name: "Краткосрочные финансовые вложения на начало года",
        code: "26",
    },

    {
        name: "Обязательства органиизации по кредитам и займам",
        code: "27",
    },
];

const textFirst = document.querySelector(".report-table__text_first");
const textSecond = document.querySelector(".report-table__text_second");

let newMainDataArr = mainData.map((elem) => {
    return `
        <div class="report-table__text__item">
            <div class="report-table__text__item__title">
                ${elem.name}
            </div>

            <div class="report-table__text__item__code">${elem.code}</div>
        </div>
    `;
});

newMainDataArr.forEach((block) => {
    textFirst.innerHTML += block;
});

let newSubDataArr = subData.map((elem) => {
    return `
        <div class="report-table__text__item">
            <div class="report-table__text__item__title">
                ${elem.name}
            </div>

            <div class="report-table__text__item__code">${elem.code}</div>
        </div>
    `;
});

newSubDataArr.forEach((block) => {
    textSecond.innerHTML += block;
});
