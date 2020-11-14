import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

interface IStatusBarStyle {
    backgroundColor: string;
    position: 'absolute' | 'relative';
}

export const Container = styled.View`
    width: 100%;
    height: ${getStatusBarHeight()}px;
    background-color: ${({ backgroundColor }: IStatusBarStyle) => backgroundColor};
    position: ${({ position }: IStatusBarStyle) => position};
`;