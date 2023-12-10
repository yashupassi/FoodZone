import Colors from "../common/styles/Colors";

/**
 * Common Constants
 */
export const DEBOUNCE_API_SUCCESS_CODE = "5"
export const SUCCESS = "success";
export const UPDATE = "update";
export const LOADING = "loading";
export const ERROR = "error";
export const NOT_FOUND = "not_found";
export const MESSAGE = "message";
export const STATUS = "status";
export const PENDING = "pending";
export const EMPTY = "empty";
export const RESPONSE = "response";
export const LOG_OUT = "log_out";
export const TOKEN_NOT_FOUND = "token_not_found";
export const ACTIVE = 1;
export const DEACTIVE = 0;
export const USER_NOT_CONFIRMED_EXCEPTION = "UserNotConfirmedException";
export const VERIFY_USER = "verify_user";
export const VERIFY_EMAIL = "verify_email";
export const NOT_AUTHORIZED_EXCEPTION = "NotAuthorizedException";
export const YES = 'YES';
export const NO = "NO";
export const VALIDATION_ERROR = "validation_error";
export const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const DEFAULT_LANGUAGE = "en";
export const USER_DENIED_GALLERY_PERMISSION = "User cancelled image selection";
export const FILTER_TYPE_SELECTION = "selection"
export const FILTER_TYPE_RATING = "rating"
export const FILTER_TYPE_MULTI_SLIDER = "multi_slider"
export const PASSWORD_ACCEPTANCE_SCORE = 33
export const COUNT_ADD = 'add'
export const COUNT_SUBTRACT = 'sub'
export const RUPPEE_SYMBOL = '₹'

export const PASSWORD_SCORE_BAR_ARRAY = [
    {
        value: 1,
        color: Colors.redish_brown,
        title: "Too Weak",
        progress: 0
    },
    {
        value: 2,
        color: Colors.orange,
        title: "Weak",
        progress: 33
    },
    {
        value: 3,
        color: Colors.yellow,
        title: "Moderate",
        progress: 66
    },
    {
        value: 4,
        color: Colors.theme_color,
        title: "Strong",
        progress: 100
    }
]

export const RESTAURANT_LIST = [
    {
        id: 1,
        title: "Royal South Vegetarians Paradise",
        address: "SCO-13, GOL MARKET, opposite FCI GODOWN, near AYYAPPA TEMPLE URBAN ESTATE, PHASE-3, Focal Point, Ludhiana, Punjab 141010",
        image: require('../../assets/img/png/restaurant1.png'),
        averageRatings: '4.2',
        totalRatings: 99,
        distance:10,
        menu: [
            {
                type: "Meal",
                dishes: [
                    {
                        id: 100,
                        title: "Prantha",
                        duration: '20 mins',
                        image: require("../../assets/img/png/prantha.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 50
                    },
                    {
                        id: 101,
                        title: "Veg Pulao",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pulao.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 150
                    },
                    {
                        id: 102,
                        title: "Shahi Paneer",
                        duration: '40 mins',
                        image: require("../../assets/img/png/shahiPaneer.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 350
                    }
                ]
            },
            {
                type: "Junk",
                dishes: [
                    {
                        id: 200,
                        title: "Burger",
                        duration: '20 mins',
                        image: require("../../assets/img/png/burger.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 70
                    },
                    {
                        id: 201,
                        title: "Pizza",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pizza.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 650
                    },
                    {
                        id: 202,
                        title: "Potato chips",
                        duration: '50 mins',
                        image: require("../../assets/img/png/potatoChips.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 350
                    }
                ]
            },
            {
                type: "Chinese",
                dishes: [
                    {
                        id: 300,
                        title: "Hakka Noodles",
                        duration: '20 mins',
                        image: require("../../assets/img/png/hakkaNoodles.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 150
                    },
                    {
                        id: 301,
                        title: "Manchurian",
                        duration: '30 mins',
                        image: require("../../assets/img/png/manchurian.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 120
                    },
                    {
                        id: 302,
                        title: "Spring roll",
                        duration: '50 mins',
                        image: require("../../assets/img/png/springRoll.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Food of indians",
        address: "S18, chowk, Water Tank, New Basant Vihar, Ludhiana, Punjab",
        image: require('../../assets/img/png/restaurant2.png'),
        averageRatings: '4.0',
        totalRatings: 110,
        distance:15,
        menu: [
            {
                type: "Meal",
                dishes: [
                    {
                        id: 104,
                        title: "Prantha #1",
                        duration: '20 mins',
                        image: require("../../assets/img/png/prantha.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 50
                    },
                    {
                        id: 105,
                        title: "Veg Pulao #1",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pulao.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 150
                    },
                    {
                        id: 106,
                        title: "Shahi Paneer #1",
                        duration: '40 mins',
                        image: require("../../assets/img/png/shahiPaneer.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 250
                    }
                ]
            },
            {
                type: "Junk",
                dishes: [
                    {
                        id: 204,
                        title: "Burger #1",
                        duration: '20 mins',
                        image: require("../../assets/img/png/burger.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 70
                    },
                    {
                        id: 205,
                        title: "Pizza #1",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pizza.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 650
                    },
                    {
                        id: 206,
                        title: "Potato chips #1",
                        duration: '50 mins',
                        image: require("../../assets/img/png/potatoChips.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 150
                    }
                ]
            },
            {
                type: "Chinese",
                dishes: [
                    {
                        id: 304,
                        title: "Hakka Noodles #1",
                        duration: '20 mins',
                        image: require("../../assets/img/png/hakkaNoodles.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 120
                    },
                    {
                        id: 305,
                        title: "Manchurian #1",
                        duration: '30 mins',
                        image: require("../../assets/img/png/manchurian.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 120
                    },
                    {
                        id: 306,
                        title: "Spring roll #1",
                        duration: '50 mins',
                        image: require("../../assets/img/png/springRoll.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Bukhara",
        address: "ITC MAURYA, Sardar Patel Marg, Akhaura Block, Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi 110021",
        image: require('../../assets/img/png/restaurant3.png'),
        averageRatings: '3.0',
        totalRatings: 50,
        distance:20,
        menu: [
            {
                type: "Meal",
                dishes: [
                    {
                        id: 107,
                        title: "Prantha #2",
                        duration: '20 mins',
                        image: require("../../assets/img/png/prantha.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 40,
                    },
                    {
                        id: 108,
                        title: "Veg Pulao #2",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pulao.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 100
                    },
                    {
                        id: 109,
                        title: "Shahi Paneer #2",
                        duration: '40 mins',
                        image: require("../../assets/img/png/shahiPaneer.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 400
                    }
                ]
            },
            {
                type: "Junk",
                dishes: [
                    {
                        id: 207,
                        title: "Burger #2",
                        duration: '20 mins',
                        image: require("../../assets/img/png/burger.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 208,
                        title: "Pizza #2",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pizza.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 700
                    },
                    {
                        id: 209,
                        title: "Potato chips #2",
                        duration: '50 mins',
                        image: require("../../assets/img/png/potatoChips.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 200
                    }
                ]
            },
            {
                type: "Chinese",
                dishes: [
                    {
                        id: 307,
                        title: "Hakka Noodles #2",
                        duration: '20 mins',
                        image: require("../../assets/img/png/hakkaNoodles.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 400
                    },
                    {
                        id: 308,
                        title: "Manchurian #2",
                        duration: '30 mins',
                        image: require("../../assets/img/png/manchurian.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 300
                    },
                    {
                        id: 309,
                        title: "Spring roll #2",
                        duration: '50 mins',
                        image: require("../../assets/img/png/springRoll.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Tamra Restaurante",
        address: "Level 1 Shangri-La Eros New Delhi, 19, Ashoka Rd, Connaught",
        image: require('../../assets/img/png/restaurant4.png'),
        averageRatings: '4.0',
        totalRatings: 500,
        distance:30,
        menu: [
            {
                type: "Meal",
                dishes: [
                    {
                        id: 110,
                        title: "Prantha #3",
                        duration: '20 mins',
                        image: require("../../assets/img/png/prantha.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 110
                    },
                    {
                        id: 111,
                        title: "Veg Pulao #3",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pulao.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 190
                    },
                    {
                        id: 112,
                        title: "Shahi Paneer #3",
                        duration: '40 mins',
                        image: require("../../assets/img/png/shahiPaneer.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 500
                    }
                ]
            },
            {
                type: "Junk",
                dishes: [
                    {
                        id: 210,
                        title: "Burger #3",
                        duration: '20 mins',
                        image: require("../../assets/img/png/burger.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 211,
                        title: "Pizza #3",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pizza.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 400
                    },
                    {
                        id: 212,
                        title: "Potato chips #3",
                        duration: '50 mins',
                        image: require("../../assets/img/png/potatoChips.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            },
            {
                type: "Chinese",
                dishes: [
                    {
                        id: 310,
                        title: "Hakka Noodles #3",
                        duration: '20 mins',
                        image: require("../../assets/img/png/hakkaNoodles.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 311,
                        title: "Manchurian #3",
                        duration: '30 mins',
                        image: require("../../assets/img/png/manchurian.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 100
                    },
                    {
                        id: 312,
                        title: "Spring roll #3",
                        duration: '50 mins',
                        image: require("../../assets/img/png/springRoll.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Pindi Restaurant Delhi",
        address: "16, Pandara Rd, Pandara Flats, Market, New Delhi, Delhi 110003",
        image: require('../../assets/img/png/restaurant3.png'),
        averageRatings: '4.0',
        totalRatings: 800,
        distance:5,
        menu: [
            {
                type: "Meal",
                dishes: [
                    {
                        id: 113,
                        title: "Prantha #4",
                        duration: '20 mins',
                        image: require("../../assets/img/png/prantha.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 114,
                        title: "Veg Pulao #4",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pulao.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 200
                    },
                    {
                        id: 115,
                        title: "Shahi Paneer #4",
                        duration: '40 mins',
                        image: require("../../assets/img/png/shahiPaneer.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 600
                    }
                ]
            },
            {
                type: "Junk",
                dishes: [
                    {
                        id: 213,
                        title: "Burger #4",
                        duration: '20 mins',
                        image: require("../../assets/img/png/burger.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 214,
                        title: "Pizza #4",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pizza.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 300
                    },
                    {
                        id: 215,
                        title: "Potato chips #4",
                        duration: '50 mins',
                        image: require("../../assets/img/png/potatoChips.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 300
                    }
                ]
            },
            {
                type: "Chinese",
                dishes: [
                    {
                        id: 313,
                        title: "Hakka Noodles #4",
                        duration: '20 mins',
                        image: require("../../assets/img/png/hakkaNoodles.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 300
                    },
                    {
                        id: 314,
                        title: "Manchurian #4",
                        duration: '30 mins',
                        image: require("../../assets/img/png/manchurian.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 200
                    },
                    {
                        id: 315,
                        title: "Spring roll #4",
                        duration: '50 mins',
                        image: require("../../assets/img/png/springRoll.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 200
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Spice Art",
        address: "Crowne Plaza, Twin District Centre, Swarn Jayanti Park, Sector 10, Rohini, Delhi 110085",
        image: require('../../assets/img/png/restaurant2.png'),
        averageRatings: '4.5',
        totalRatings: 400,
        distance:5.5,
        menu: [
            {
                type: "Meal",
                dishes: [
                    {
                        id: 116,
                        title: "Prantha #5",
                        duration: '20 mins',
                        image: require("../../assets/img/png/prantha.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 90
                    },
                    {
                        id: 117,
                        title: "Veg Pulao #5",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pulao.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 100
                    },
                    {
                        id: 118,
                        title: "Shahi Paneer #5",
                        duration: '40 mins',
                        image: require("../../assets/img/png/shahiPaneer.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 300
                    }
                ]
            },
            {
                type: "Junk",
                dishes: [
                    {
                        id: 216,
                        title: "Burger #5",
                        duration: '20 mins',
                        image: require("../../assets/img/png/burger.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 217,
                        title: "Pizza #5",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pizza.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 200
                    },
                    {
                        id: 218,
                        title: "Potato chips #5",
                        duration: '50 mins',
                        image: require("../../assets/img/png/potatoChips.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 200
                    }
                ]
            },
            {
                type: "Chinese",
                dishes: [
                    {
                        id: 316,
                        title: "Hakka Noodles #5",
                        duration: '20 mins',
                        image: require("../../assets/img/png/hakkaNoodles.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 317,
                        title: "Manchurian #5",
                        duration: '30 mins',
                        image: require("../../assets/img/png/manchurian.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 150
                    },
                    {
                        id: 318,
                        title: "Spring roll #5",
                        duration: '50 mins',
                        image: require("../../assets/img/png/springRoll.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 150
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Minar Restaurant",
        address: "L-11, Connaught Cir, Block L, Connaught Place, New Delhi, Delhi 110001",
        image: require('../../assets/img/png/restaurant1.png'),
        averageRatings: '4.3',
        totalRatings: 100,
        distance:10,
        menu: [
            {
                type: "Meal",
                dishes: [
                    {
                        id: 119,
                        title: "Prantha #6",
                        duration: '20 mins',
                        image: require("../../assets/img/png/prantha.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 120,
                        title: "Veg Pulao #6",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pulao.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 100
                    },
                    {
                        id: 121,
                        title: "Shahi Paneer #6",
                        duration: '40 mins',
                        image: require("../../assets/img/png/shahiPaneer.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            },
            {
                type: "Junk",
                dishes: [
                    {
                        id: 219,
                        title: "Burger #6",
                        duration: '20 mins',
                        image: require("../../assets/img/png/burger.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 220,
                        title: "Pizza #6",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pizza.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 100
                    },
                    {
                        id: 221,
                        title: "Potato chips #6",
                        duration: '50 mins',
                        image: require("../../assets/img/png/potatoChips.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            },
            {
                type: "Chinese",
                dishes: [
                    {
                        id: 319,
                        title: "Hakka Noodles #6",
                        duration: '20 mins',
                        image: require("../../assets/img/png/hakkaNoodles.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 320,
                        title: "Manchurian #6",
                        duration: '30 mins',
                        image: require("../../assets/img/png/manchurian.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 100
                    },
                    {
                        id: 321,
                        title: "Spring roll #6",
                        duration: '50 mins',
                        image: require("../../assets/img/png/springRoll.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Raajsik - Indian Cuisine Restaurant",
        address: "Umrao Hotels and Resorts, National Highway - 8, Samalkha, Delhi 110037",
        image: require('../../assets/img/png/restaurant4.png'),
        averageRatings: '4.0',
        totalRatings: 1000,
        distance:15,
        menu: [
            {
                type: "Meal",
                dishes: [
                    {
                        id: 122,
                        title: "Prantha #7",
                        duration: '20 mins',
                        image: require("../../assets/img/png/prantha.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 60
                    },
                    {
                        id: 123,
                        title: "Veg Pulao #7",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pulao.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 90
                    },
                    {
                        id: 124,
                        title: "Shahi Paneer #7",
                        duration: '40 mins',
                        image: require("../../assets/img/png/shahiPaneer.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            },
            {
                type: "Junk",
                dishes: [
                    {
                        id: 222,
                        title: "Burger #7",
                        duration: '20 mins',
                        image: require("../../assets/img/png/burger.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 20
                    },
                    {
                        id: 223,
                        title: "Pizza #7",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pizza.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 280
                    },
                    {
                        id: 224,
                        title: "Potato chips #7",
                        duration: '50 mins',
                        image: require("../../assets/img/png/potatoChips.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 170
                    }
                ]
            },
            {
                type: "Chinese",
                dishes: [
                    {
                        id: 322,
                        title: "Hakka Noodles #7",
                        duration: '20 mins',
                        image: require("../../assets/img/png/hakkaNoodles.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 160
                    },
                    {
                        id: 323,
                        title: "Manchurian #7",
                        duration: '30 mins',
                        image: require("../../assets/img/png/manchurian.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 150
                    },
                    {
                        id: 324,
                        title: "Spring roll #7",
                        duration: '50 mins',
                        image: require("../../assets/img/png/springRoll.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Kwality",
        address: "No.7, Regal Building, Sansad Marg, Hanuman Road Area, Connaught Place, New Delhi, Delhi 110001",
        image: require('../../assets/img/png/restaurant2.png'),
        averageRatings: '3.5',
        totalRatings: 900,
        distance:12,
        menu: [
            {
                type: "Meal",
                dishes: [
                    {
                        id: 125,
                        title: "Prantha #8",
                        duration: '20 mins',
                        image: require("../../assets/img/png/prantha.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 70
                    },
                    {
                        id: 126,
                        title: "Veg Pulao #8",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pulao.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 110
                    },
                    {
                        id: 127,
                        title: "Shahi Paneer #8",
                        duration: '40 mins',
                        image: require("../../assets/img/png/shahiPaneer.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 400
                    }
                ]
            },
            {
                type: "Junk",
                dishes: [
                    {
                        id: 225,
                        title: "Burger #8",
                        duration: '20 mins',
                        image: require("../../assets/img/png/burger.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 40
                    },
                    {
                        id: 226,
                        title: "Pizza #8",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pizza.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 340
                    },
                    {
                        id: 227,
                        title: "Potato chips #8",
                        duration: '50 mins',
                        image: require("../../assets/img/png/potatoChips.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 160
                    }
                ]
            },
            {
                type: "Chinese",
                dishes: [
                    {
                        id: 325,
                        title: "Hakka Noodles #8",
                        duration: '20 mins',
                        image: require("../../assets/img/png/hakkaNoodles.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 326,
                        title: "Manchurian #8",
                        duration: '30 mins',
                        image: require("../../assets/img/png/manchurian.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 100
                    },
                    {
                        id: 327,
                        title: "Spring roll #8",
                        duration: '50 mins',
                        image: require("../../assets/img/png/springRoll.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "Kiyan, New Delhi",
        address: "NH-8, Samalkha, New Delhi, Delhi 110037",
        image: require('../../assets/img/png/restaurant1.png'),
        averageRatings: '3.4',
        totalRatings: 600,
        distance:13,
        menu: [
            {
                type: "Meal",
                dishes: [
                    {
                        id: 128,
                        title: "Prantha #9",
                        duration: '20 mins',
                        image: require("../../assets/img/png/prantha.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 129,
                        title: "Veg Pulao #9",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pulao.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 100
                    },
                    {
                        id: 130,
                        title: "Shahi Paneer #9",
                        duration: '40 mins',
                        image: require("../../assets/img/png/shahiPaneer.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            },
            {
                type: "Junk",
                dishes: [
                    {
                        id: 228,
                        title: "Burger #9",
                        duration: '20 mins',
                        image: require("../../assets/img/png/burger.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 229,
                        title: "Pizza #9",
                        duration: '30 mins',
                        image: require("../../assets/img/png/pizza.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 100
                    },
                    {
                        id: 230,
                        title: "Potato chips #9",
                        duration: '50 mins',
                        image: require("../../assets/img/png/potatoChips.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            },
            {
                type: "Chinese",
                dishes: [
                    {
                        id: 328,
                        title: "Hakka Noodles #9",
                        duration: '20 mins',
                        image: require("../../assets/img/png/hakkaNoodles.png"),
                        averageRatings: '4.0',
                        totalRatings: 200,
                        price: 100
                    },
                    {
                        id: 329,
                        title: "Manchurian #9",
                        duration: '30 mins',
                        image: require("../../assets/img/png/manchurian.png"),
                        averageRatings: '4.5',
                        totalRatings: 400,
                        price: 100
                    },
                    {
                        id: 330,
                        title: "Spring roll #9",
                        duration: '50 mins',
                        image: require("../../assets/img/png/springRoll.png"),
                        averageRatings: '4.1',
                        totalRatings: 500,
                        price: 100
                    }
                ]
            }
        ]
    }
]

/**
 * Local storage keys
 */

export const FOODZONE_LOGIN_DATA = "foodzone_login_data";
export const FOODZONE_USER_DATA = "foodzone_user_data"
export const FOODZONE_CART_DATA = "foodzone_cart_data"

/** ---------------------------------------------- */

/** Regexp Patterns */

export const PAPER_PATTERN_NAME = /[0-9]|[#$%^&*().,/-<>]/g;
export const PAPER_PATTERN_REMOVE_SPACE = /\s/gi;
export const PAPER_PATTERN_REMOVE_SPACE_AND_NUMERIC_VALUES = /[^a-zA-Z+]/gi;
export const PAPER_PATTERN_NUMERIC = /\D/gi;

/**------------------------------------------------------------------------ */

/**
 * Screen Names
 * */

export const LOGIN_SCREEN = "Login";
export const HOME_SCREEN = "Home";
export const DETAIL_SCREEN = "Detail";
export const DISH_SCREEN = "Dish"
export const CART_SCREEN = "Cart"

/** ------------------------------ */

/**
 * Device constants
 * */
export const DEVICE_CONSTANTS_ROOT = "device_constants";
export const DEVICE_CONSTANTS_UPDATE = "device_constants_update";
export const DEVICE_CONSTANTS_RESET = "device_constants_reset";
export const DEVICE_CONSTANTS_KEY = "device_constants_key";

//Device UI constants
export const DEVICE_CONSTANTS_IS_LOGGED_IN = "device_constants_is_logged_in";
export const DEVICE_CONSTANTS_REQUEST_STATUS = "device_constants_request_status";
export const DEVICE_CONSTANTS_IS_ON_BOARD = "device_constants_is_on_board";
export const DEVICE_CONSTANTS_LOADING = "device_constants_loading"
export const DEVICE_CONSTANTS_LANGUAGE = "device_constants_language"

/** ------------------------------ */

/**
* User constants
* */
export const USER_ROOT = "user";
export const USER_UPDATE = "user_update";
export const USER_RESET = "user_reset";
export const USER_KEY = "user_key";

//User UI constants
export const USER_DATA = "user_data";
export const USER_LOCATION = "user_location"

/** ------------------------------ */

/**
* LOGIN constants
* */
export const LOGIN_ROOT = "login";
export const LOGIN_UPDATE = "login_update";
export const LOGIN_RESET = "login_reset";
export const LOGIN_KEY = "login_key";

//LOGIN UI constants
export const LOGIN_REQUEST_LOADING = "login_request_loading";
export const LOGIN_REQUEST_STATUS = "login_request_status"
export const LOGIN_SOCIAL_REQUEST_STATUS = 'login_social_request_status'
export const LOGIN_FB_REQUEST_LOADING = 'login_fb_request_loading'
export const LOGIN_GOOGLE_REQUEST_LOADING = 'login_google_request_loading'


/** ------------------------------ */