import DropDownAlert, { DropdownAlertType } from 'react-native-dropdownalert';

interface AlertDataType {
    type: DropdownAlertType;
    title: string;
    message: string;
}

let dropDownAlert = {} as DropDownAlert;

function setDropDownAlert(ref: DropDownAlert) {
    dropDownAlert = ref;
}

function alert({ type, title, message }: AlertDataType) {
    dropDownAlert.alertWithType(type, title, message);
}

export {
    dropDownAlert,
    alert,
    setDropDownAlert
}