import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Flow } from 'react-native-animated-spinkit';

import StatusBar from '../../components/StatusBar';
import TitleBar from '../../components/TitleBar';

import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../.././store/modules/user/action';
import { updateDeliveryMan } from '../.././store/modules/order/action';

import { Container, Scroll, Ripple, DeliveryManCard, Name, Button, ButtonLabel, Warning, WarningText } from './styles';

import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    BottomSheet: {
        order_id: string;
    },
    OrderDetails: {},
    DeliveryManList: {}
};

type BottomSheetScreenRouteProp = RouteProp<RootStackParamList, 'BottomSheet'>;

type Props = {
    route: BottomSheetScreenRouteProp;
};

interface IUserState {
    user: {
        users: User[];
        loading: boolean;
    }
}

interface User {
    _id: string;
    name: string;
}

const DeliveryManList: React.FC<Props> = ({ route }) => {

    const { order_id } = route.params;
    const [activeDeliveryMan, setActive] = useState<string>('');
    const dispatch = useDispatch();

    const users = useSelector(({ user }: IUserState) => user.users);
    const loading = useSelector(({ user }: IUserState) => user.loading);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    function handleUpdateDeliveryMan() {
        Alert.alert(
            'Alterar entregador',
            'Deseja realmente alterar o entregador ?',
            [
                {
                    text: 'cancelar',
                    onPress: () => { }
                },
                {
                    text: 'sim',
                    onPress: () => dispatch(updateDeliveryMan(activeDeliveryMan, order_id))
                }
            ]
        );
    }

    return (
        <>
            <StatusBar backgroundColor='#2d3873' />
            <TitleBar title='Escolher entregador' backButton />
            <Container>
                <Scroll>
                    {
                        loading ?
                            <Warning>
                                <Flow color='#37479e' size={20} />
                            </Warning>
                            :
                            users.length > 0
                                ?
                                <Scroll>
                                    {
                                        users.map((user, index) =>
                                            <Ripple
                                                key={index}
                                                onPress={() => setActive(user._id)}
                                            >
                                                <DeliveryManCard active={activeDeliveryMan === user._id}>
                                                    <Name>{user.name}</Name>
                                                </DeliveryManCard>
                                            </Ripple>
                                        )
                                    }
                                </Scroll>
                                :
                                <Warning>
                                    <WarningText>Nenhuma entrega disponível</WarningText>
                                </Warning>
                    }
                </Scroll>
                <Button onPress={handleUpdateDeliveryMan}>
                    <ButtonLabel>Vincular</ButtonLabel>
                </Button>
            </Container>
        </>
    )
};

export default DeliveryManList;