import { takeLatest, all, put, select } from 'redux-saga/effects';
import { getAllOrders, getDeliveryManOrders } from './action';
import { alert } from '../../../services/alert';
import { goBack } from '../../../services/navigation';

const getUserId = state => state.auth.user._id;

interface ResponseError {
    error: {
        response: {
            data: {
                error: string;
            }
        }
    }
}

function* success() {
    yield put(getAllOrders());
    yield goBack();
}

function* successFinishOrder() {
    const userId = yield select(getUserId);
    yield put(getDeliveryManOrders(userId));
    yield goBack();
}

function* successUpdateDeliveryMan() {
    alert({ type: 'success', title: 'Atualização entregador', message: 'Entregador alterado com sucesso!' });
    yield put(getAllOrders());
    yield goBack();
}

function* errors({ error }: ResponseError) {
    console.log(error.response);
    const message = error.response.data.error;
    alert({ type: 'error', title: 'Erro cadastro', message });
}

export default all([
    takeLatest('@ORDER/GET_DELIVERY_MAN_ORDERS_ERROR', errors),
    takeLatest('@ORDER/CREATE_ORDER_ERROR', errors),
    takeLatest('@ORDER/CREATE_ORDER_SUCCESS', success),
    takeLatest('@ORDER/UPDATE_DELIVERY_MAN_SUCCESS', successUpdateDeliveryMan),
    takeLatest('@ORDER/UPDATE_DELIVERY_MAN_ERROR', errors),
    takeLatest('@ORDER/FINISH_ORDER_SUCCESS', successFinishOrder),
    takeLatest('@ORDER/FINISH_ORDER_ERROR', errors)
]);