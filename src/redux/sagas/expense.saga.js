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

function* deleteExpense(action) {
    console.log('in deleteExpense generator action:', action)
    try {
        const deletedExpense = yield axios.delete('/api/expense' + action.payload.id, {data: action.payload} )
    } catch {
        console.log( 'deleteExpense generator error');
    }
}

function* expensesSaga() {
    yield takeEvery('FETCH_EXPENSES', fetchAllExpenses)
    yield takeEvery('DELETE_EXPENSE', deleteExpense)
}

export default expensesSaga;