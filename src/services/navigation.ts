import { CommonActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    BottomSheet: {},
    OrderDetails: {},
    DeliveryManList: {}
};

type NavigationProp = StackNavigationProp<
    RootStackParamList,
    'BottomSheet'
>;

interface INavigationService {
    navigation: NavigationProp;
}

const navigator = {} as INavigationService;

export function setNavigator(nav: NavigationProp) {
    if (nav)
        navigator.navigation = nav;
}
export function navigate(routeName: string, params: object | undefined) {
    if (navigator.navigation && routeName) {
        const action = CommonActions.navigate(routeName, params);
        navigator.navigation.dispatch(action);
    }
}
export function goBack() {
    if (navigator.navigation) {
        let action = CommonActions.goBack();
        navigator.navigation.dispatch(action);
    }
}