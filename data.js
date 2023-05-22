const url = 'https://crm.mcgroup.pl';

const users = [
    {
        "id": 6,
        "name": "Razbitskaya Helena ",
        "first_name": "Helena",
        "second_name": "Razbitskaya",
        "photo_link": "/uploads/users_photos/2022/11/09/1667998808/20221109140008.jpg",
        "subject": ["1","2","3","4","5","6","7"]
    },
    {
        "id": 7,
        "name": "Zaharowa Julia ",
        "first_name": "Julia",
        "second_name": "Zaharowa",
        "photo_link": "/uploads/users_photos/2022/11/09/1667953325/20221109012205.jpg",
        "subject": ["3","4","5","6","7"]
    },
    {
        "id": 15,
        "name": "Bystrou Tsimafei ",
        "first_name": "Tsimafei",
        "second_name": "Bystrou",
        "photo_link": "/uploads/users_photos/2022/11/09/1667953351/20221109012231.jpg",
        "subject": ["3","4"]
    },
    {
        "id": 467,
        "name": "Khadarovich Dmitri ",
        "first_name": "Dmitri",
        "second_name": "Khadarovich",
        "photo_link": "/uploads/users_photos/2022/11/09/1667998392/20221109135312.jpg",
        "subject": ["3","4"]
    }
];
const lang = {
    ru: {
        days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    en: {
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut', 'Sun'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    pl: {
        days: ['Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sob.', 'Niedz.'],
        months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']
    },
}

const tasks = [
    {
        "id": 5548,
        "author_id": 7,
        "executor_id": 467,
        "client_id": 43,
        "term_date": "2023-05-20 17: 00: 00",
    }, {
        "id": 5567,
        "author_id": 7,
        "executor_id": 7,
        "client_id": 0,
        "term_date": "2023-05-18 16: 00: 00",

    }, {
        "id": 5575,
        "author_id": 7,
        "executor_id": 7,
        "client_id": 0,
        "term_date": "2023-05-17 11: 10: 00"
    }, {
        "id": 5578,
        "author_id": 467,
        "executor_id": 467,
        "client_id": 43,
        "term_date": "2023-05-24 11: 00: 00"
    }, {
        "id": 5585,
        "author_id": 15,
        "executor_id": 15,
        "client_id": 43,
        "term_date": "2023-05-24 16: 00: 00",
    }, {
        "id": 5596,
        "author_id": 7,
        "executor_id": 7,
        "client_id": 0,
        "term_date": "2023-05-18 10: 45: 00",
    }, {
        "id": 5597,
        "author_id": 7,
        "executor_id": 7,
        "client_id": 0,
        "term_date": "2023-05-19 12: 00: 00",
    }, {
        "id": 5608,
        "author_id": 7,
        "executor_id": 7,
        "client_id": 0,
        "term_date": "2023-05-18 15: 30: 00",
    }, {
        "id": 5609,
        "author_id": 15,
        "executor_id": 15,
        "client_id": 43,
        "term_date": "2023-05-23 11: 00: 00",
    }
]
