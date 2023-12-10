import React, { PureComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './scene/preLogin';
import { keyboardAwareFunc } from './common/base_components';
import { LOGIN_SCREEN } from './redux/Types';
import NavigationService from './NavigationService';

const Stack = createNativeStackNavigator();

class RNRoutes extends PureComponent {

    render() {
        return (
            <NavigationContainer ref={(ref:any)=> NavigationService.setNavigationRef(ref)}>
                <Stack.Navigator initialRouteName={LOGIN_SCREEN}>
                <Stack.Screen name={LOGIN_SCREEN} component={keyboardAwareFunc(Login)} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default RNRoutes;
