import React, { useState } from 'react';

import { Container, Scroll, InputGroup, MultiLineInput, Gap, Label, Input, Button, ButtonText } from './styles';

import StatusBar from '../../components/StatusBar';
import TitleBar from '../../components/TitleBar';

import { useDispatch } from 'react-redux';
import { createOrder } from '../../store/modules/order/action';

export default function Home() {

    const dispatch = useDispatch();

    const [recipient, setRecipient] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [neighborhood, setNeighborhood] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [uf, setUf] = useState<string>('');

    function handleCreateNewOrder() {
        dispatch(createOrder({ recipient, street, number, neighborhood, postalCode, city, state: uf }));
    }

    return (
        <Container>
            <StatusBar backgroundColor='#2d3873' barStyle='light-content' />
            <TitleBar backButton title='Nova entrega' />
            <Scroll>
                <InputGroup>
                    <Label>Cliente</Label>
                    <Input onChangeText={setRecipient} autoCapitalize='words' />
                </InputGroup>
                <InputGroup>
                    <Label>Rua</Label>
                    <Input onChangeText={setStreet} />
                </InputGroup>
                <InputGroup>
                    <Label>Número</Label>
                    <Input onChangeText={setNumber} keyboardType='numeric' />
                </InputGroup>
                <InputGroup>
                    <Label>Bairro</Label>
                    <Input onChangeText={setNeighborhood} />
                </InputGroup>
                <InputGroup>
                    <Label>Cidade</Label>
                    <Input onChangeText={setCity} />
                </InputGroup>
                <MultiLineInput>
                    <InputGroup width='60%'>
                        <Label>Cep</Label>
                        <Input onChangeText={setPostalCode} keyboardType='numeric' />
                    </InputGroup>
                    <Gap />
                    <InputGroup>
                        <Label>Estado</Label>
                        <Input onChangeText={setUf} />
                    </InputGroup>
                </MultiLineInput>
                <Button onPress={handleCreateNewOrder}>
                    <ButtonText>Cadastrar</ButtonText>
                </Button>
            </Scroll >
        </Container >
    )
}