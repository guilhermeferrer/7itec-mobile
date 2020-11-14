import { takeLatest, all, put } from 'redux-saga/effects';
import { alert } from '../../../services/alert';

interface ResponseError {
    error: {
        response: {
            data: {
                error: string;
            }
        }
    }
}

function* resetOrders() {
    yield put({ type: '@ORDER/CLEAR_ORDERS' });
}

function* errors({ error }: ResponseError) {
    const message = error.response.data.error;
    alert({ type: 'error', title: 'Erro no login', message });
}

export default all([
    takeLatest('@AUTH/LOGIN_ERROR', errors),
    takeLatest('@AUTH/LOGOUT', resetOrders),
]);