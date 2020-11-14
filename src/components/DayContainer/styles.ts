import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface ColorStyle {
    finished: boolean;
}

export const Container = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 15px;
`;

export const DateTitle = styled.Text`
    color: #353734;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const Order = styled.View`
    flex-direction: row;
    margin-bottom: 25px;
`;

export const OrderTime = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
`;

export const Circle = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({ finished }: ColorStyle) => finished ? '#49C288' : '#354CD3'};
    margin-right: 5px;
`;

export const Time = styled.Text`
`;

export const Line = styled.View`
    width: 1px;
    height: 83px;
    background-color: ${({ finished }: ColorStyle) => finished ? '#49C288' : '#354CD3'};
    left: 4px;
    position: absolute;
    top: 62%;
`;

export const OrderCard = styled(RectButton)`
    background-color: white;
    flex: 1;
    height: 80px;
    border-radius: 5px;
    elevation: 2;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
`;

export const IconContainer = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 25px;
    background-color: ${({ finished }: ColorStyle) => finished ? '#49C288' : '#354CD3'};
    justify-content: center;
    align-items: center;
`;

export const DoneIcon = styled(Icon).attrs(() => ({ name: 'ios-checkmark' }))`
    color: white;
    font-size: 25px;
`;

export const InDeliveryIcon = styled(Icon).attrs(() => ({ name: 'ios-arrow-redo' }))`
    color: white;
    font-size: 18px;
`;
export const OrderCardInfo = styled.View`
    flex: 1;
    flex-direction: column;
    padding: 0 10px;
`;

export const ClientName = styled.Text`
`;

export const Address = styled.Text`
    font-size: 12px;
`;