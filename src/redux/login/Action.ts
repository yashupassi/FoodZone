import { Utils } from "../../common/util";
import { DispatchCB } from "../Store";
import { DEVICE_CONSTANTS_IS_LOGGED_IN, EMPTY, ERROR, LOGIN_FB_REQUEST_LOADING, LOGIN_GOOGLE_REQUEST_LOADING, LOGIN_KEY, LOGIN_REQUEST_LOADING, LOGIN_REQUEST_STATUS, LOGIN_RESET, LOGIN_ROOT, LOGIN_SOCIAL_REQUEST_STATUS, LOGIN_UPDATE, MESSAGE, STATUS } from "../Types";
import auth from '@react-native-firebase/auth';
import { updateDeviceUIConstraints } from "../device/Action";
import { FoodZoneStorage } from "../../apis";



/** Map state to props */
export const getLoginStateToProps = (state: any) => {
    const { login } = state;
    const login_key = login && login[LOGIN_KEY] ? login[LOGIN_KEY] : {};

    const request_loading = login_key && login_key[LOGIN_REQUEST_LOADING] ? login_key[LOGIN_REQUEST_LOADING] : false;
    const request_facebook_loading = login_key && login_key[LOGIN_FB_REQUEST_LOADING] ? login_key[LOGIN_FB_REQUEST_LOADING] : false;
    const request_google_loading = login_key && login_key[LOGIN_GOOGLE_REQUEST_LOADING] ? login_key[LOGIN_GOOGLE_REQUEST_LOADING] : false;

    const request_status = login_key && login_key[LOGIN_REQUEST_STATUS] ? login_key[LOGIN_REQUEST_STATUS] : {}
    const type = request_status && request_status[STATUS] ? request_status[STATUS] : ""
    const message = request_status && request_status[MESSAGE] ? request_status[MESSAGE] : ""



    return ({
        request_loading,
        request_facebook_loading,
        request_google_loading,
        type,
        message
    })
}


/** Manage Login UI Constraints */
export const updateLoginUIConstraints = (obj: any): any => {
    return (dispatch: DispatchCB, getState: any) => {
        try {
            const formData = getState()[LOGIN_ROOT][LOGIN_KEY];
            const data = Object.assign(formData, obj);

            dispatch(updateLoginState(data));
        } catch (error) {
            Utils.log("Update Login UI Constraints ===> error ", error);
        }
    }
}

/** Update Login data state */
const updateLoginState = (obj: any): any => {
    return (dispatch: DispatchCB, getState: any) => {
        try {
            const formData = getState()[LOGIN_ROOT][LOGIN_KEY];

            dispatch({
                type: LOGIN_UPDATE,
                payload: Object.assign(formData, obj)
            })
        } catch (error) {
            Utils.log("Update Login Data State ===> error ", error);
        }
    }
}

/** Reset Login data state */
export const resetLoginState = () => {
    return (dispatch: DispatchCB) => {
        try {
            dispatch({
                type: LOGIN_RESET,
                payload: {}
            })
        } catch (error) {
            Utils.log("Reset Login State ===> error ", error);
        }
    }
}

export const loginUserWithEmailPassword = (email: string, password: string) => {
    return async (dispatch: DispatchCB, getState: any) => {
        try {
            dispatch(updateLoginUIConstraints({
                [LOGIN_REQUEST_LOADING]: true,
                [LOGIN_REQUEST_STATUS]: {
                    [STATUS]: EMPTY,
                    [MESSAGE]: ''
                }
            }));
            try {
                auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(async () => {
                        Utils.log("user successfully loggedin")
                        // User signed in successfully
                        dispatch(updateLoginUIConstraints({
                            [LOGIN_REQUEST_LOADING]: false,
                            [LOGIN_REQUEST_STATUS]: {
                                [STATUS]: EMPTY,
                                [MESSAGE]: ''
                            }
                        }));
                        await FoodZoneStorage.storeFoodZoneLoginData(true);
                        dispatch(
                            updateDeviceUIConstraints({
                                [DEVICE_CONSTANTS_IS_LOGGED_IN]: true,
                            }),
                        );
                    })
                    .catch((error) => {
                        Utils.log("user error", error, error.code)
                        if(error?.code === 'auth/invalid-credential'){
                            dispatch(updateLoginUIConstraints({
                                [LOGIN_REQUEST_LOADING]: false,
                                [LOGIN_REQUEST_STATUS]: {
                                    [STATUS]: ERROR,
                                    [MESSAGE]: "This user is not registered, please try again with the registered user"
                                }
                            }));
                        }
                        else{
                            dispatch(updateLoginUIConstraints({
                                [LOGIN_REQUEST_LOADING]: false,
                                [LOGIN_REQUEST_STATUS]: {
                                    [STATUS]: ERROR,
                                    [MESSAGE]: error.toString()
                                }
                            }));
                        }
                        
                    });
            }

            catch (error: any) {
                const message = error && error.message ? error.message : "Something went wrong.";
                dispatch(updateLoginUIConstraints({
                    [LOGIN_REQUEST_LOADING]: false,
                    [LOGIN_REQUEST_STATUS]: {
                        [STATUS]: ERROR,
                        [MESSAGE]: message
                    }
                }));
            }
        } catch (error: any) {
            Utils.log("error == >", error)
            dispatch(updateLoginUIConstraints({
                [LOGIN_REQUEST_LOADING]: false
            }));
        }
    }
}

