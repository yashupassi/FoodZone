import React, { memo, useState } from 'react';
import { Helper } from '../../../apis';
import {  WView } from '../../../common/ui';
import { FullButton, Input } from '../../../common/base_components';
import { Utils } from '../../../common/util';
import Colors from '../../../common/styles/Colors';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getLoginStateToProps, loginUserWithEmailPassword } from '../../../redux/login/Action';
import { Keyboard } from 'react-native';


/**
 * Functional component representing the login form.
 */
function LoginForm() {
  const dispatch = useDispatch();
  const { container } = getStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [error, setError] = useState<any>([]);

  const { request_loading } = useSelector(getLoginStateToProps, shallowEqual);

  /**
   * Check if a field has an error.
   *
   * @param {string} key - Field key to check for an error.
   * @returns {Object} - Object indicating the error status and message.
   */
  const isError = (key: any) => {
    if (error && error.length) {
      return error.findIndex((ele: any) => ele.fieldName === key) > -1
        ? {
          status: true,
          message:
            error[error.findIndex((ele: any) => ele.fieldName === key)]
              .message,
        }
        : { status: false, message: '' };
    } else return { status: false, message: '' };
  };

  /**
   * Submit handler for the login form.
   */
  const onSubmitHandler = async () => {
    Keyboard.dismiss()
    if (request_loading) return;
    const request_body = { email, password };
    Helper.isValidForm(Object.keys(request_body), request_body)
      .then(async ({ status, response }: any) => {
        if (status) {
          setError([]);
          dispatch(loginUserWithEmailPassword(email, password))
        } else {
          setError(response && response.length ? response : []);
        }
      })
      .catch((err: any) => Utils.log(err));
  };

  return (
    <WView style={container}>
      {/* Email Input */}
      <Input
        title={`Email`}
        placeholder={'e.g. ironman@avengers.com'}
        isError={isError('email')}
        onChange={(value: string) => {
          setEmail(value);
        }}
        value={email}
        keyboardType={'email-address'}
        autoCapitalize={"none"}
      />

      {/* Password Input */}
      <Input
        style={{ marginTop: Utils.scaleSize(10) }}
        title={"Password"}
        placeholder={'********'}
        isError={isError('password')}
        onChange={(value: string) => {
          setPassword(value);
        }}
        value={password}
        toggleSecureTextEntry={() => {
          setSecureTextEntry(!secureTextEntry);
        }}
        secureTextEntry={secureTextEntry}
        isPassword={true}
        autoCapitalize={"none"}
      />
      {/* Continue Button */}
      <FullButton style={{marginTop:Utils.scaleSize(20)}} loading={request_loading} label={"SignIn"} onPress={onSubmitHandler} />


    </WView>
  );
}

/**
 * Helper function to define styles for the LoginForm component.
 *
 * @returns {Object} - Style object.
 */
const getStyles = () => {
  return {
    container: {
      width: '95%',
      backgroundColor: Colors.white,
      alignSelf: 'center',
      padding: Utils.scaleSize(10),
      borderRadius: Utils.scaleSize(5)
    },
  };
};
export default memo(LoginForm);
