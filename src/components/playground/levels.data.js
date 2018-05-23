/**
 * List with levels and tasks
 * @returns {Object<Array>}
 */
export default [
    [
        {
            matrix: [
                [{ key: '0-0', letter: 'R' }, { key: '0-1', letter: 'S' }, { key: '0-2', letter: 'A' }],
                [{ key: '1-0', letter: 'E' }, { key: '1-1', letter: 'A' }, { key: '1-2', letter: 'G' }],
                [{ key: '2-0', letter: 'D' }, { key: '2-1', letter: 'U' }, { key: '2-2', letter: 'X' }],
            ],
            words: [
                { stack: '0-1_1-1_1-2_0-2', value: 'SAGA' },
                { stack: '0-0_1-0_2-0_2-1_2-2', value: 'REDUX' }
            ]
        }
    ],
    [
        {
            matrix: [
                [{ key: '0-0', letter: 'Н' }, { key: '0-1', letter: 'И' }, { key: '0-2', letter: 'Б' }, { key: '0-3', letter: 'М' }],
                [{ key: '1-0', letter: 'Т' }, { key: '1-1', letter: 'Х' }, { key: '1-2', letter: 'О' }, { key: '1-3', letter: 'И' }],
                [{ key: '2-0', letter: 'С' }, { key: '2-1', letter: 'В' }, { key: '2-2', letter: 'Д' }, { key: '2-3', letter: 'Р' }],
                [{ key: '3-0', letter: 'И' }, { key: '3-1', letter: 'Ф' }, { key: '3-2', letter: 'Е' }, { key: '3-3', letter: 'Д' }],
            ],
            words: [
                { stack: '0-2_0-1_0-0_1-0', value: 'БИНТ' },
                { stack: '3-3_3-2_3-1_3-0_2-0', value: 'ДЕФИС' },
                { stack: '2-1_1-1_1-2_2-2', value: 'ВХОД' },
                { stack: '2-3_1-3_0-3', value: 'РИМ' },
            ]
        }
    ],
    [
        {
            matrix: [
                [{ key: '0-0', letter: 'Д' }, { key: '0-1', letter: 'А' }, { key: '0-2', letter: 'З' }, { key: '0-3', letter: 'О' }, { key: '0-4', letter: 'В' }],
                [{ key: '1-0', letter: 'О' }, { key: '1-1', letter: 'Т' }, { key: '1-2', letter: 'Р' }, { key: '1-3', letter: 'С' }, { key: '1-4', letter: 'А' }],
                [{ key: '2-0', letter: 'Ц' }, { key: '2-1', letter: 'Р' }, { key: '2-2', letter: 'И' }, { key: '2-3', letter: 'Ф' }, { key: '2-4', letter: 'П' }],
                [{ key: '3-0', letter: 'Е' }, { key: '3-1', letter: 'А' }, { key: '3-2', letter: 'К' }, { key: '3-3', letter: 'Р' }, { key: '3-4', letter: 'А' }],
                [{ key: '4-0', letter: 'Н' }, { key: '4-1', letter: 'Т' }, { key: '4-2', letter: 'Д' }, { key: '4-3', letter: 'Я' }, { key: '4-4', letter: 'З' }],
            ],
            words: [
                { stack: '0-0_1-0_2-0_3-0_4-0_4-1', value: 'ДОЦЕНТ' },
                { stack: '3-2_3-1_2-1_1-1_0-1', value: 'КАРТА' },
                { stack: '0-2_0-3_0-4', value: 'ЗОВ' },
                { stack: '1-3_1-4_2-4_2-3_2-2_1-2', value: 'САПФИР' },
                { stack: '4-4_3-4_3-3_4-3_4-2', value: 'ЗАРЯД' },
            ]
        }
    ],
    [
        {
            matrix: [
                [{ key: '0-0', letter: 'О' }, { key: '0-1', letter: 'Т' }, { key: '0-2', letter: 'К' }, { key: '0-3', letter: 'Л' }, { key: '0-4', letter: 'Т' }, { key: '0-5', letter: 'Е' }],
                [{ key: '1-0', letter: 'Р' }, { key: '1-1', letter: 'Д' }, { key: '1-2', letter: 'И' }, { key: '1-3', letter: 'А' }, { key: '1-4', letter: 'Г' }, { key: '1-5', letter: 'Р' }],
                [{ key: '2-0', letter: 'Ц' }, { key: '2-1', letter: 'И' }, { key: '2-2', letter: 'О' }, { key: '2-3', letter: 'Н' }, { key: '2-4', letter: 'Х' }, { key: '2-5', letter: 'У' }],
                [{ key: '3-0', letter: 'А' }, { key: '3-1', letter: 'О' }, { key: '3-2', letter: 'Т' }, { key: '3-3', letter: 'И' }, { key: '3-4', letter: 'С' }, { key: '3-5', letter: 'Б' }],
                [{ key: '4-0', letter: 'Р' }, { key: '4-1', letter: 'В' }, { key: '4-2', letter: 'А' }, { key: '4-3', letter: 'Р' }, { key: '4-4', letter: 'Т' }, { key: '4-5', letter: 'Д' }],
                [{ key: '5-0', letter: 'Е' }, { key: '5-1', letter: 'П' }, { key: '5-2', letter: 'О' }, { key: '5-3', letter: 'О' }, { key: '5-4', letter: 'В' }, { key: '5-5', letter: 'Е' }],
            ],
            words: [
                { stack: '1-1_1-2_0-2_0-1_0-0_1-0', value: 'ДИКТОР' },
                { stack: '3-5_2-5_2-4_1-4_1-3_0-3_0-4_0-5_1-5', value: 'БУХГАЛТЕР' },
                { stack: '5-2_5-1_5-0_4-0_3-0_2-0_2-1_2-2_2-3_3-3_3-4_4-4', value: 'ОПЕРАЦИОНИСТ' },
                { stack: '3-2_3-1_4-1_4-2_4-3_5-3_5-4_5-5_4-5', value: 'ТОВАРОВЕД' },
            ]
        }
    ],
    [
        {
            matrix: [
                [{ key: '0-0', letter: 'Т' }, { key: '0-1', letter: 'В' }, { key: '0-2', letter: 'О' }, { key: '0-3', letter: 'Л' }, { key: '0-4', letter: 'Ь' }, { key: '0-5', letter: 'К' }, { key: '0-6', letter: 'О' }, { key: '0-7', letter: 'Д' }, { key: '0-8', letter: 'О' }, { key: '0-9', letter: 'М' }],
                [{ key: '1-0', letter: 'Т' }, { key: '1-1', letter: 'А' }, { key: '1-2', letter: 'К' }, { key: '1-3', letter: 'И' }, { key: '1-4', letter: 'Л' }, { key: '1-5', letter: 'Е' }, { key: '1-6', letter: 'О' }, { key: '1-7', letter: 'О' }, { key: '1-8', letter: 'Р' }, { key: '1-9', letter: 'А' }],
                [{ key: '2-0', letter: 'И' }, { key: '2-1', letter: 'Н' }, { key: '2-2', letter: 'Ь' }, { key: '2-3', letter: 'Л' }, { key: '2-4', letter: 'И' }, { key: '2-5', letter: 'Г' }, { key: '2-6', letter: 'К' }, { key: '2-7', letter: 'Ш' }, { key: '2-8', letter: 'О' }, { key: '2-9', letter: 'С' }],
                [{ key: '3-0', letter: 'К' }, { key: '3-1', letter: 'У' }, { key: '3-2', letter: 'Б' }, { key: '3-3', letter: 'И' }, { key: '3-4', letter: 'Л' }, { key: '3-5', letter: 'Ф' }, { key: '3-6', letter: 'Н' }, { key: '3-7', letter: 'И' }, { key: '3-8', letter: 'К' }, { key: '3-9', letter: 'А' }],
                [{ key: '4-0', letter: 'А' }, { key: '4-1', letter: 'Р' }, { key: '4-2', letter: 'Щ' }, { key: '4-3', letter: 'Е' }, { key: '4-4', letter: 'Е' }, { key: '4-5', letter: 'В' }, { key: '4-6', letter: 'Т' }, { key: '4-7', letter: 'Л' }, { key: '4-8', letter: 'У' }, { key: '4-9', letter: 'Г' }],
                [{ key: '5-0', letter: 'М' }, { key: '5-1', letter: 'А' }, { key: '5-2', letter: 'И' }, { key: '5-3', letter: 'Т' }, { key: '5-4', letter: 'Н' }, { key: '5-5', letter: 'Р' }, { key: '5-6', letter: 'Е' }, { key: '5-7', letter: 'А' }, { key: '5-8', letter: 'Ь' }, { key: '5-9', letter: 'Ю' }],
                [{ key: '6-0', letter: 'И' }, { key: '6-1', letter: 'Ж' }, { key: '6-2', letter: 'Н' }, { key: '6-3', letter: 'А' }, { key: '6-4', letter: 'К' }, { key: '6-5', letter: 'А' }, { key: '6-6', letter: 'Р' }, { key: '6-7', letter: 'З' }, { key: '6-8', letter: 'В' }, { key: '6-9', letter: 'Г' }],
                [{ key: '7-0', letter: 'П' }, { key: '7-1', letter: 'И' }, { key: '7-2', letter: 'С' }, { key: '7-3', letter: 'Т' }, { key: '7-4', letter: 'Т' }, { key: '7-5', letter: 'Н' }, { key: '7-6', letter: 'Т' }, { key: '7-7', letter: 'Ь' }, { key: '7-8', letter: 'Л' }, { key: '7-9', letter: 'И' }],
                [{ key: '8-0', letter: 'Р' }, { key: '8-1', letter: 'Р' }, { key: '8-2', letter: 'П' }, { key: '8-3', letter: 'Т' }, { key: '8-4', letter: 'А' }, { key: '8-5', letter: 'А' }, { key: '8-6', letter: 'Б' }, { key: '8-7', letter: 'К' }, { key: '8-8', letter: 'С' }, { key: '8-9', letter: 'О' }],
                [{ key: '9-0', letter: 'И' }, { key: '9-1', letter: 'Н' }, { key: '9-2', letter: 'Р' }, { key: '9-3', letter: 'У' }, { key: '9-4', letter: 'Ж' }, { key: '9-5', letter: 'Р' }, { key: '9-6', letter: 'А' }, { key: '9-7', letter: 'И' }, { key: '9-8', letter: 'Т' }, { key: '9-9', letter: 'М' }],
            ],
            words: [
                { stack: '1-2_1-3_0-3_0-2_0-1_1-1_1-0_0-0', value: 'КИЛОВАТ' },
                { stack: '2-9_1-9_0-9_0-8_1-8_1-7_0-7_0-6_0-5', value: 'САМОРОДОК' },
                { stack: '3-5_3-4_2-4_2-5_1-5_1-4_0-4', value: 'ФЛИГЕЛЬ' },
                { stack: '4-1_3-1_3-2_3-3_2-3_2-2_2-1_2-0_3-0', value: 'РУБИЛЬНИК' },
                { stack: '4-7_4-8_3-8_2-8_2-7_2-6_1-6', value: 'ЛУКОШКО' },
                { stack: '6-8_5-8_5-9_4-9_3-9', value: 'ВЬЮГА' },
                { stack: '6-9_7-9_7-8_7-7_6-7_5-7', value: 'ГИЛЬЗА' },
                { stack: '9-9_8-9_8-8_9-8_9-7_8-7', value: 'МОСТИК' },
                { stack: '8-6_9-6_9-5_9-4_8-4', value: 'БАРЖА' },
                { stack: '8-5_7-5_7-6_6-6_6-5_6-4_7-4', value: 'АНТРАКТ' },
                { stack: '3-7_3-6_4-6_5-6_5-5_4-5_4-4_5-4_5-3', value: 'ИНТЕРВЕНТ' },
                { stack: '8-3_9-3_9-2_9-1_9-0_8-0', value: 'ТУРНИР' },
                { stack: '8-2_8-1_7-1_7-2_7-3_6-3_6-2_5-2_4-2_4-3', value: 'ПРИСТАНИЩЕ' },
                { stack: '7-0_6-0_6-1_5-1_5-0_4-0', value: 'ПИЖАМА' },
            ]
        }
    ]
]