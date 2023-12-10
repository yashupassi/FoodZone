import { LOGIN_FB_REQUEST_LOADING, LOGIN_GOOGLE_REQUEST_LOADING, LOGIN_KEY, LOGIN_REQUEST_LOADING, LOGIN_REQUEST_STATUS, LOGIN_RESET, LOGIN_SOCIAL_REQUEST_STATUS, LOGIN_UPDATE, LOG_OUT, MESSAGE, STATUS } from "../Types";

const INIT_STATE = {
    [LOGIN_KEY]: {
        [LOGIN_REQUEST_LOADING]: false,
        [LOGIN_REQUEST_STATUS]: {
            [STATUS]: undefined,
            [MESSAGE]: undefined
        },
        [LOGIN_GOOGLE_REQUEST_LOADING]:false,
        [LOGIN_FB_REQUEST_LOADING]:false,
        [LOGIN_SOCIAL_REQUEST_STATUS]:{
            [STATUS]: undefined,
            [MESSAGE]: undefined
        }
    }
}

export default (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case LOGIN_UPDATE:
            return { ...state, [LOGIN_KEY]: action.payload };
        case LOGIN_RESET:
        case LOG_OUT:
            return {
                ...state,
                ...{
                    [LOGIN_KEY]: {
                        [LOGIN_REQUEST_LOADING]: false,
                        [LOGIN_REQUEST_STATUS]: {
                            [STATUS]: undefined,
                            [MESSAGE]: undefined
                        },
                        [LOGIN_GOOGLE_REQUEST_LOADING]:false,
                        [LOGIN_FB_REQUEST_LOADING]:false,
                        [LOGIN_SOCIAL_REQUEST_STATUS]:{
                            [STATUS]: undefined,
                            [MESSAGE]: undefined
                        }
                    }
                }
            }
        default:
            return state;
    }
};