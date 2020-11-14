import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

interface IBackButton {
    leftSpace: boolean;
}

export const Container = styled.View`
    flex-direction: row;
    height: 50px;
    padding: 0 5px;
    align-items: center;
    elevation: 1;
    background-color: #37479e;
    justify-content: space-between;
`;
export const Left = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const BackButton = styled(BorderlessButton)`
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    margin-left: ${({ leftSpace }: IBackButton) => leftSpace ? 10 : 0}px;
`;

export const BackIcon = styled(Icon).attrs(() => ({ name: 'ios-chevron-back' }))`
    color: white;
    font-size: 22px;
`;

export const Title = styled.Text`
    font-size: 18px;
    margin-left: 10px;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: white;
`;

export const ActionButton = styled(RectButton)`
    padding: 10px 15px;
`;

export const ActionText = styled.Text`
    color: white;
`;


export const Spacer = styled.View`
    width: 30px;
`;