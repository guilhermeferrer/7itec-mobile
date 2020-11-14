import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #f7f9ff;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        paddingTop: 15
    }
}))`
`;

export const FloatingAddButton = styled(RectButton)`
    width: 55px;
    height: 55px;
    border-radius: 28px;
    background-color: #2d3873;
    justify-content: center;
    align-items: center;
    elevation: 3;
    position: absolute;
    bottom: 15px;
    right: 15px;
`;

export const Warning = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const WarningText = styled.Text`
`;