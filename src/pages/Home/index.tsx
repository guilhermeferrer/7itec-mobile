import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Flow } from 'react-native-animated-spinkit';

import { Container, Scroll, FloatingAddButton, Warning, WarningText } from './styles';

import DayContainer from '../../components/DayContainer';
import StatusBar from '../../components/StatusBar';
import TitleBar from '../../components/TitleBar';

import { getAllOrders, getDeliveryManOrders } from '../../store/modules/order/action';
import { useDispatch, useSelector } from 'react-redux';

interface IUserState {
    auth: {
        user: {
            _id: string;
            chooser: boolean;
            admin?: boolean;
        }
    }
}

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

interface IOrdersGroupByDate {
    orders: IOrder[];
    date: string;
}

interface IOrderState {
    order: {
        orders: IOrdersGroupByDate[];
        loading: boolean;
    }
}

export default function Home({ navigation }) {
    const user = useSelector(({ auth }: IUserState) => auth.user);
    const orders = useSelector(({ order }: IOrderState) => order.orders);
    const loading = useSelector(({ order }: IOrderState) => order.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user.chooser || user.admin)
            dispatch(getAllOrders());
        else
            dispatch(getDeliveryManOrders(user._id));
    }, []);

    return (
        <Container>
            <StatusBar backgroundColor='#2d3873' barStyle='light-content' />
            <TitleBar title='Minhas entregas' />
            {
                loading ?
                    <Warning>
                        <Flow color='#37479e' size={20} />
                    </Warning>
                    :
                    orders.length > 0
                        ?
                        <Scroll>
                            {
                                orders.map((order, index) => (
                                    <DayContainer key={index} order={order} />
                                ))
                            }
                        </Scroll>
                        :
                        <Warning>
                            <WarningText>Nenhuma entrega disponível</WarningText>
                        </Warning>
            }
            {
                (user.admin || user.chooser) &&
                <FloatingAddButton onPress={() => navigation.navigate('NewOrder')}>
                    <Icon name='ios-add' color='white' size={25} />
                </FloatingAddButton>
            }
        </Container>
    )
}