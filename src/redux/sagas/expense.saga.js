import { put, takeEvery } from 'redux-saga/effects';
import axios from "axios";

function* fetchAllExpenses() {
    try {
        const expenses = yield axios.get('/api/expense')
        yield put({ type: 'GET_EXPENSES', payload: expenses.data })
    } catch {
        console.log( 'fetchExpenses generator error');
    }
}

function* expensesSaga() {
    yield takeEvery('FETCH_EXPENSES', fetchAllExpenses)
}