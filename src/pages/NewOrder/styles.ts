import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface InputStyle {
    width?: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: #f7f9ff;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        padding: 15
    }
}))`
`;

export const InputGroup = styled.View`
    margin-bottom: 10px;
    flex: 1;
    width: ${({ width }: InputStyle) => width ?? '100%'};
`;

export const MultiLineInput = styled.View`
    flex-direction: row;
`;

export const Gap = styled.View`
    width: 15px;
`;


export const Label = styled.Text``;

export const Input = styled.TextInput`
    background-color: white;
    height: 45px;
    border: 1px;
    border-color: rgba(0, 0, 0, .2);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 10px;
`;

export const Button = styled(RectButton)`
    height: 45px;
    background-color: #2d3873;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin-top: 15px;
`;

export const ButtonText = styled.Text`
    color: white;
`;