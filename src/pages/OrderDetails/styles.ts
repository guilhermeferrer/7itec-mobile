import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

interface ColorStyle {
    finished?: boolean;
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

export const Header = styled.View`
    background-color: white;
    padding: 15px;
    elevation: 2;
    border-radius: 3px;
    flex-direction: row;
`;

export const HeaderDivision = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
`;

export const Label = styled.Text`
    opacity: .5;
`;

export const Value = styled.Text`
    font-weight: bold;
    font-size: 15px;
`;

export const IconContainer = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 25px;
    background-color: ${({ finished }: ColorStyle) => finished ? '#49C288' : '#354CD3'};
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -30px;
`;

export const DoneIcon = styled(Icon).attrs(() => ({ name: 'ios-checkmark' }))`
    color: white;
    font-size: 18px;
`;

export const InDeliveryIcon = styled(Icon).attrs(() => ({ name: 'ios-arrow-redo' }))`
    color: white;
    font-size: 13px;
`;

export const PersonIcon = styled(Icon).attrs(() => ({ name: 'ios-person' }))`
    color: white;
    font-size: 13px;
`;

export const SectionTitle = styled.Text`
    font-size: 18px;
    margin: 15px 0;
`;

export const SectionCard = styled.View`
    background-color: white;
    padding: 15px;
    elevation: 2;
    border-radius: 3px;
    margin-bottom: 15px;
`;

export const CityInfo = styled.Text`
    opacity: .5;
    margin-bottom: 3px;
`;

export const Address = styled.Text`
    font-size: 16px;
`;

export const DateSection = styled(SectionCard)`
    flex-direction: row;
`;

export const DateLabel = styled.Text`
    font-weight: bold;
`;

export const DateValue = styled.Text`
`;