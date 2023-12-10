import React, { PureComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CART_SCREEN, DETAIL_SCREEN, DISH_SCREEN, HOME_SCREEN } from './redux/Types';
import NavigationService from './NavigationService';
import { Cart, Detail, Dish, Home } from './scene/postLogin';

const Stack = createNativeStackNavigator();

class RNPostLoginRoutes extends PureComponent {
    render() {
        return (
            <NavigationContainer ref={(ref:any)=> NavigationService.setNavigationRef(ref)}>
                <Stack.Navigator initialRouteName={HOME_SCREEN}>
                <Stack.Screen name={HOME_SCREEN} component={Home} options={{ headerShown: false }} />
                <Stack.Screen name={DETAIL_SCREEN} component={Detail} options={{ headerShown: false }} />
                <Stack.Screen name={DISH_SCREEN} component={Dish} options={{ headerShown: false }} />
                <Stack.Screen name={CART_SCREEN} component={Cart} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default RNPostLoginRoutes;
