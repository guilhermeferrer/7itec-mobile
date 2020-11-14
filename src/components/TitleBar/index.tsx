import React from 'react';

import { Container, BackButton, BackIcon, Title, Left, ActionButton, ActionText } from './styles';

import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/modules/auth/action';

interface ITitleBar {
    backButton?: boolean;
    title: string;
}

const TitleBar: React.FC<ITitleBar> = ({ backButton, title }) => {
    const { goBack } = useNavigation();
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logout());
    }

    return (
        <Container>
            <Left>
                {
                    backButton &&
                    <BackButton
                        onPress={goBack}
                        leftSpace={!backButton}
                    >
                        <BackIcon />
                    </BackButton>

                }
                <Title>{title}</Title>
            </Left>
            {
                !backButton &&
                <ActionButton onPress={handleLogout}>
                    <ActionText>Sair</ActionText>
                </ActionButton>
            }
        </Container>
    );
}

export default TitleBar;