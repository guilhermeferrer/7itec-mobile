import React, { useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import StatusBar from '../../components/StatusBar';
import { useBackHandler } from '@react-native-community/hooks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Container, Card, Option, ActionIcon, ActionText } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { finishOrder } from '../../store/modules/order/action';

import { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withDecay, withTiming } from 'react-native-reanimated';

interface IUserState {
    auth: {
        user: {
            _id: string;
            chooser: boolean;
            admin?: boolean;
        }
    }
}

type RootStackParamList = {
    BottomSheet: {
        order: IOrder;
    },
    OrderDetails: {},
    DeliveryManList: {
        order_id: string;
    },
};

type BottomSheetScreenRouteProp = RouteProp<RootStackParamList, 'BottomSheet'>;

type BottomSheetScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'BottomSheet'
>;

type Props = {
    route: BottomSheetScreenRouteProp;
    navigation: BottomSheetScreenNavigationProp;
};

interface IOrder {
    _id: string;
    recipient: string;
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
    createdAt: Date;
    updatedAt: Date;
    deliveredAt: Date | undefined;
}

const BottomSheet: React.FC<Props> = ({ navigation, route }) => {
    const { order } = route.params;
    const height = 180;
    const y = useSharedValue(height);
    const user = useSelector(({ auth }: IUserState) => auth.user);
    const dispatch = useDispatch();

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = y.value;
        },
        onActive: (event, ctx) => {
            if (event.translationY < 0)
                return y.value = 0;
            y.value = ctx.startY + event.translationY;
        },
        onEnd: event => {
            if (event.translationY > height / 4)
                return y.value = withDecay({
                    velocity: 1300,
                    clamp: [0, height]
                }, goBack);

            y.value = withDecay({
                velocity: -990,
                clamp: [0, height]
            });
        },
    });

    const styles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: y.value
                }
            ]
        }
    });

    function goBack() {
        navigation.goBack();
    }

    function handleGoBack() {
        goBack();
        y.value = withTiming(height, {});
    }

    useEffect(() => {
        y.value = withTiming(0);
    }, []);

    useBackHandler(() => {
        handleGoBack();
        return true;
    });

    function goToOrderDetais() {
        navigation.replace('OrderDetails', { order });
    }

    function goToDeliveryManList() {
        navigation.replace('DeliveryManList', { order_id: order._id });
    }

    function handleFinishOrder() {
        dispatch(finishOrder(order._id));
    }

    return (
        <Container>
            <KeyboardAvoidingView
                behavior={'position'}
                style={{ height }}
            >
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Card style={styles}>
                        <Option onPress={goToOrderDetais}>
                            <ActionIcon size={18} name={"ios-eye"} />
                            <ActionText>Ver detalhes</ActionText>
                        </Option>
                        <Option onPress={handleFinishOrder}>
                            <ActionIcon size={18} name={"ios-checkmark"} />
                            <ActionText>Finalizar</ActionText>
                        </Option>
                        {
                            (user.admin || user.chooser) &&
                            <Option onPress={goToDeliveryManList}>
                                <ActionIcon size={18} name={"ios-duplicate"} />
                                <ActionText>Vincular entregador</ActionText>
                            </Option>
                        }
                        <Option onPress={handleGoBack}>
                            <ActionIcon size={18} name={"ios-close"} />
                            <ActionText>Cancelar</ActionText>
                        </Option>
                    </Card>
                </PanGestureHandler>
            </KeyboardAvoidingView>
            <StatusBar backgroundColor='transparent' position='absolute' />
        </Container>
    )
};

export default BottomSheet;