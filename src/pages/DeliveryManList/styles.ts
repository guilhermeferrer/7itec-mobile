import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface DeliveryManCardStyle {
    active: boolean;
}

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    background-color: #f7f9ff;
    padding: 15px;
`;

export const Scroll = styled.ScrollView`
`;

export const Ripple = styled(RectButton)`
    margin-bottom: 15px;
`;

export const DeliveryManCard = styled.View`
    background-color: white;
    height: 45px;
    padding: 15px;
    border-width: 1px;
    border-radius: 3px;
    border-color: ${({ active }: DeliveryManCardStyle) => active ? '#2d3873' : 'rgba(0, 0, 0, .1)'};
    justify-content: center;
`;

export const Name = styled.Text`
`;

export const Button = styled(RectButton)`
    height: 45px;
    background-color: #2d3873;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin-top: 5px;
`;

export const ButtonLabel = styled.Text`
    color: white;
`;

export const Warning = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const WarningText = styled.Text`
`;