import { put } from "@redux-saga/core/effects";
import axios from "axios";

function* fetchExpenses() {
    try {
        const expenses = yield axios.get('/api/expense')
        yield put({ type: 'GET_EXPENSES', payload: expenses.data })
    } catch {
        console.log( 'fetchExpenses generator error');
    }
}