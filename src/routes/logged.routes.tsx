import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import OrderDetails from '../pages/OrderDetails';
import NewOrder from '../pages/NewOrder';
import DeliveryManList from '../pages/DeliveryManList';
import BottomSheet from '../components/BottomSheet';

export default function Routes() {

    const { Screen, Navigator } = createStackNavigator();

    const modalOptions = {
        cardStyle: { backgroundColor: 'transparent' },
        cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
                opacity: progress.interpolate({
                    inputRange: [0, 0.5, 0.9, 1],
                    outputRange: [0, 0.25, 0.7, 1],
                }),
            },
            overlayStyle: {
                opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                    extrapolate: 'clamp',
                }),
            },
        }),
        transitionSpec: {
            open: {
                animation: 'timing'
            },
            close: {
                animation: 'timing',
                config: {
                    duration: 200
                }
            },
        },
    };

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='Home' component={Home} />
            <Screen name='OrderDetails' component={OrderDetails} />
            <Screen name='DeliveryManList' component={DeliveryManList} />
            <Screen name='BottomSheet' component={BottomSheet} options={options => modalOptions} />
            <Screen name='NewOrder' component={NewOrder} />
        </Navigator>
    );
}