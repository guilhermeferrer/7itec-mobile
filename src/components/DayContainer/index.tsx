import React from 'react';
import { format, addHours } from 'date-fns';

import { Container, DateTitle, Order, OrderTime, Circle, Time, Line, OrderCard, IconContainer, DoneIcon, InDeliveryIcon, OrderCardInfo, ClientName, Address } from './styles';

import { useNavigation } from '@react-navigation/native';

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

interface DayContainer {
    order: IOrdersGroupByDate;
}

const DayContainer: React.FC<DayContainer> = ({ order }) => {
    const navigation = useNavigation();

    const openOptionsMenu = (order: IOrder) => () => {
        navigation.navigate('BottomSheet', { order });
    }

    const isFinished = (date: Date | undefined) => date ? true : false;

    const formatDate = (isoDate: Date, dateFormat = 'HH:mm') => format(new Date(isoDate), dateFormat);

    return (
        <Container>
            <DateTitle>{formatDate(addHours(new Date(order.date), 3), 'dd, MMM - yyyy')}</DateTitle>
            {
                order.orders.map((order, index, array) => ((
                    <Order key={index}>
                        <OrderTime>
                            <Circle finished={isFinished(order.deliveredAt)} />
                            <Time>{formatDate(order.createdAt)}</Time>
                            {
                                index !== array.length - 1 &&
                                <Line finished={isFinished(order.deliveredAt)} />
                            }
                        </OrderTime>
                        <OrderCard onPress={openOptionsMenu(order)}>
                            <IconContainer finished={isFinished(order.deliveredAt)} >
                                {isFinished(order.deliveredAt) ? <DoneIcon /> : <InDeliveryIcon />}
                            </IconContainer>
                            <OrderCardInfo>
                                <ClientName>{order.recipient}</ClientName>
                                <Address>{order.street} - {order.number}, {order.city} / {order.state}</Address>
                            </OrderCardInfo>
                        </OrderCard>
                    </Order>
                )))
            }
        </Container>
    );
}

export default DayContainer;