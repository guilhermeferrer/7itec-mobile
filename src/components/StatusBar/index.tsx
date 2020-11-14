import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from './styles';

interface IStatusBar {
    backgroundColor?: string;
    barStyle?: "default" | "light-content" | "dark-content" | undefined;
    position?: 'absolute' | 'relative';
}

const StatusBarComponent: React.FC<IStatusBar> = ({ backgroundColor = 'transparent', barStyle = 'light-content', position = 'relative' }) => {
    return (
        <Container
            backgroundColor={backgroundColor}
            position={position}
        >
            <StatusBar
                translucent
                backgroundColor='transparent'
                barStyle={barStyle}
            />
        </Container>
    );
}

export default StatusBarComponent;