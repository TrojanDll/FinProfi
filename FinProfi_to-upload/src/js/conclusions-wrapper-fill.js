let dataWithoutList = [
    {
        grade: "like",
        title: "Платежеспособность",
        descr: 'Платежеспособность компании Платежеспособность компании  АО “Волжская рыбная компания” подкреплена безупречной кредитной историей. Наша устойчивая финансовая база обеспечивает нам возможность инвестировать в развитие и современные технологии. Клиенты могут быть уверены в надежности и долгосрочной стабильности нашего бизнеса. "СпецТех" — ваш надежный партнер в сфере инноваций и успешных решений. ',
    },

    {
        grade: "dislike",
        title: "Периоды существенного ухудшения",
        descr: 'Финансовый анализ компании АО "СпецТех" на 23.07.2023 выявил периоды существенного ухудшения в финансовых показателях. Возможные причины такого развития событий требуют дополнительного изучения и анализа. Мы предпримем необходимые меры для стабилизации ситуации и улучшения финансовой позиции компании.',
    },

    {
        grade: "like",
        title: "Финансовая устойчивость",
        descr: 'Финансовый анализ компании АО "СпецТех" на 23.07.2023 выявил периоды существенного ухудшения в финансовых показателях. Возможные причины такого развития событий требуют дополнительного изучения и анализа. Мы предпримем необходимые меры для стабилизации ситуации и улучшения финансовой позиции компании.',
    },

    {
        grade: "warning",
        title: "Чистые активы",
        descr: 'Финансовый анализ компании АО "СпецТех" на 23.07.2023 выявил периоды существенного ухудшения в финансовых показателях. Возможные причины такого развития событий требуют дополнительного изучения и анализа. Мы предпримем необходимые меры для стабилизации ситуации и улучшения финансовой позиции компании.',
    },

    {
        grade: "like",
        title: "Вероятность банкротства",
        descr: 'Финансовый анализ компании АО "СпецТех" на 23.07.2023 выявил периоды существенного ухудшения в финансовых показателях. Возможные причины такого развития событий требуют дополнительного изучения и анализа. Мы предпримем необходимые меры для стабилизации ситуации и улучшения финансовой позиции компании.',
    },

    {
        grade: "like",
        title: "Деловая активность",
        descr: 'Финансовый анализ компании АО "СпецТех" на 23.07.2023 выявил периоды существенного ухудшения в финансовых показателях. Возможные причины такого развития событий требуют дополнительного изучения и анализа. Мы предпримем необходимые меры для стабилизации ситуации и улучшения финансовой позиции компании.',
    },

    {
        grade: "dislike",
        title: "Рентабельность",
        descr: 'Финансовый анализ компании АО "СпецТех" на 23.07.2023 выявил периоды существенного ухудшения в финансовых показателях. Возможные причины такого развития событий требуют дополнительного изучения и анализа. Мы предпримем необходимые меры для стабилизации ситуации и улучшения финансовой позиции компании.',
    },
];

let dataList = [
    {
        grade: "like",
        title: "Анализ безубыточности",
        text: [
            "Понятие финансового анализа предприятия",
            "Цели и задачи финансового анализа предприятия",
            "Источники данных для анализа",
            "Методики финансового анализа предприятия",
            "Этапы проведения финансового анализа предприятия",
            "Вывод",
        ],
    },

    {
        grade: "like",
        title: "Ключевые активы компании",
        text: [
            "Понятие финансового анализа предприятия",
            "Цели и задачи финансового анализа предприятия",
            "Источники данных для анализа",
            "Методики финансового анализа предприятия",
            "Этапы проведения финансового анализа предприятия",
            "Вывод",
        ],
    },

    {
        grade: "warning",
        title: "Основные источники финансирования",
        text: [
            "Понятие финансового анализа предприятия",
            "Цели и задачи финансового анализа предприятия",
            "Источники данных для анализа",
            "Методики финансового анализа предприятия",
            "Этапы проведения финансового анализа предприятия",
            "Вывод",
        ],
    },

    {
        grade: "like",
        title: "Финансовые результаты",
        text: [
            "Понятие финансового анализа предприятия",
            "Цели и задачи финансового анализа предприятия",
            "Источники данных для анализа",
            "Методики финансового анализа предприятия",
            "Этапы проведения финансового анализа предприятия",
            "Вывод",
        ],
    },
];

const conclusionsWrapper = document.querySelector(".conclusions__wrapper");
const conclusionsListWrapper = document.querySelector(
    ".conclusions__list-wrapper"
);

let counter = 0;

let arrDataWithoutList = dataWithoutList.map((data) => {
    counter++;

    let gradeClass = "";
    if (data.grade == "like") {
        gradeClass = " like-grade";
    } else if (data.grade == "dislike") {
        gradeClass = " dislike-grade";
    } else if (data.grade == "warning") {
        gradeClass = " warning-grade";
    }

    return `
        <div class="conclusions-item">
        <div class="conclusions-item__title">
            <div class="conclusions-item__title__grade${gradeClass}" ></div>
            <div class="conclusions-item__title__text">
                ${counter}. ${data.title}
            </div>
        </div>

        <div class="conclusions-item__descr">
            ${data.descr}
        </div>

        <a href="#" class="conclusions-item__link"
            >Изучить подробнее и прочитать рекомендации</a
        >
        </div>
    </div>
    `;
});

arrDataWithoutList.forEach((item) => {
    conclusionsWrapper.innerHTML += item;
});

let arrDataList = dataList.map((data) => {
    let arrListItems = data.text.map((text) => {
        return `
        <li class="conclusions-item__list__item">
            ${text}
        </li>
        `;
    });

    let listItems = "";

    arrListItems.forEach((item) => {
        listItems += item;
    });

    counter++;

    let gradeClass = "";
    if (data.grade == "like") {
        gradeClass = " like-grade";
    } else if (data.grade == "dislike") {
        gradeClass = " dislike-grade";
    } else if (data.grade == "warning") {
        gradeClass = " warning-grade";
    }

    return `
    <div class="conclusions-item">
    <div class="conclusions-item__title">
        <div class="conclusions-item__title__grade${gradeClass}"></div>
        <div class="conclusions-item__title__text">
            ${counter}. ${data.title}
        </div>
    </div>

    <ul class="conclusions-item__list">
        ${listItems}
    </ul>

    <a href="#" class="conclusions-item__link"
        >Изучить подробнее и прочитать рекомендации</a
    >
</div>
    `;
});

arrDataList.forEach((item) => {
    conclusionsListWrapper.innerHTML += item;
});
