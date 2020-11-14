import React, { useState } from 'react';
import { Container, Label, Input, Button, ButtonText, Logo, Form, Title, LogoBox, Line } from './styles';
import { Flow } from 'react-native-animated-spinkit';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/modules/auth/action';
import StatusBar from '../../components/StatusBar';

interface AuthState {
    auth: {
        loading: boolean;
    }
}

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const loading = useSelector(({ auth }: AuthState) => auth.loading);

    const dispatch = useDispatch();

    function handleLogin() {
        dispatch(login(email, password));
    }

    return (
        <Container>
            <StatusBar backgroundColor='#37479e' barStyle='light-content' />
            <LogoBox>
                <Line />
                <Logo source={require('../../images/box.png')} />
            </LogoBox>
            <Form>
                <Title>Login</Title>
                <Label>Email</Label>
                <Input onChangeText={setEmail} autoCapitalize='none' />
                <Label>Senha</Label>
                <Input secureTextEntry onChangeText={setPassword} />
                <Button onPress={handleLogin}>
                    {
                        loading ? <Flow size={26} color='white' /> : <ButtonText>Entrar</ButtonText>
                    }
                </Button>
            </Form>
        </Container>
    );
}

export default Login;