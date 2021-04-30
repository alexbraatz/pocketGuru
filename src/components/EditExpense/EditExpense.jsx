function EditExpense(expenseProp) {

    let expenseToEdit = expenseProp.location.editExpense
    return(
        <>
            <h2>Edit Expense!</h2>
            <p>{JSON.stringify(expenseToEdit)}</p>
        </>
    )
}

export default EditExpense;