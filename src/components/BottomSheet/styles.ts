import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled(Animated.View)`
    flex: 1;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, .1);
`;

export const Card = styled(Animated.View)`
    height: 180px;
    width: 100%;
    background-color: white;
    position: absolute;
`;

export const Option = styled(RectButton)`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 20px;
`;

export const ActionIcon = styled(Icon)`
    margin-right: 20px;
`;

export const ActionText = styled.Text`
    font-size: 16px;
`;