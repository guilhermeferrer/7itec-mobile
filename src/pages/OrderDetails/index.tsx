import React from 'react';
import { RouteProp } from '@react-navigation/native';

import { Container, Scroll, Header, HeaderDivision, Label, Value, IconContainer, DoneIcon, InDeliveryIcon, PersonIcon, SectionTitle, SectionCard, Address, CityInfo, DateSection, DateLabel, DateValue } from './styles';

import StatusBar from '../../components/StatusBar';
import TitleBar from '../../components/TitleBar';
import { format } from 'date-fns';

type RootStackParamList = {
    BottomSheet: {
        order: IOrder;
    },
    OrderDetails: {
        order: IOrder;
    },
    DeliveryManList: {}
};

type OrderDetailsScreenRouteProp = RouteProp<RootStackParamList, 'OrderDetails'>;

type Props = {
    route: OrderDetailsScreenRouteProp;
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
    deliveryMan: string | undefined;
}

const OrderDetails: React.FC<Props> = ({ route }) => {

    const { order } = route.params;

    return (
        <Container>
            <StatusBar backgroundColor='#2d3873' barStyle='light-content' />
            <TitleBar backButton title='Detalhes da entrega' />
            <Scroll>
                <Header>
                    <HeaderDivision>
                        <Label>Status</Label>
                        <Value>{order.deliveredAt ? 'Entregue' : 'Em progresso'}</Value>
                        <IconContainer>
                            <InDeliveryIcon />
                        </IconContainer>
                    </HeaderDivision>
                    <HeaderDivision>
                        <Label>Cliente</Label>
                        <Value>{order.recipient}</Value>
                        <IconContainer>
                            <PersonIcon />
                        </IconContainer>
                    </HeaderDivision>
                </Header>
                <SectionTitle>Endereço</SectionTitle>
                <SectionCard>
                    <CityInfo>{order.city} / {order.state}({order.postalCode})</CityInfo>
                    <Address>{order.street} - {order.number}</Address>
                </SectionCard>
                <DateSection>
                    <DateLabel>Data de lançamento: </DateLabel>
                    <DateValue>{format(new Date(order.createdAt), 'dd/MM/yyyy HH:mm')}</DateValue>
                </DateSection>
                {
                    order.deliveredAt &&
                    <DateSection>
                        <DateLabel>Data entrega: </DateLabel>
                        <DateValue>{format(new Date(order.deliveredAt), 'dd/MM/yyyy HH:mm')}</DateValue>
                    </DateSection>
                }
                {
                    order.deliveryMan &&
                    <DateSection>
                        <DateLabel>Entregador: </DateLabel>
                        <DateValue>{order.deliveryMan}</DateValue>
                    </DateSection>
                }
            </Scroll>
        </Container>
    )
}

export default OrderDetails;