import React, { memo, useEffect } from 'react';
import {  WView } from '../../common/ui';
import Colors from '../../common/styles/Colors';
import { LoginForm } from '../../components';
import { shallowEqual, useSelector } from 'react-redux';
import { getLoginStateToProps } from '../../redux/login/Action';
import { showAlert } from '../../apis/Helper';
import { ERROR } from '../../redux/Types';

/**
 * Functional component representing the Login screen.
 * @returns {JSX.Element} React element representing the Login component.
 */
function Login() {
  const { type, message } = useSelector(getLoginStateToProps, shallowEqual);

  /**
     * Effect hook to handle state changes, particularly errors.
     */
  useEffect(() => {
    if (type) {
      // Switch statement to handle different types of actions
      switch (type) {
        case ERROR:
          if (message) {
            showAlert("", message)
          }
          break;
        // Additional cases can be added for different action types if needed
      }
    }
  }, [type, message])

  return (
    <WView dial={5} backgroundColor={Colors.background_gray} flex>
      <LoginForm />
    </WView>
  );
}

export default memo(Login);
