const expenseReducer = ( state = {}, action ) => {
    switch( action.type ) {
        case 'GET_EXPENSES':
            return action.payload;
        default:
            return state;
    }
};

export default expenseReducer;