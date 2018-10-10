import selectExpenseTotal from './src/selectors/expenses-total';
import moment from 'moment';

 export const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }];


const totals = expenses.map(amount => {
    return amount.amount
})

console.log(totals);


const array1 = totals;
const reducer = (acumulator, currentValue) => acumulator + currentValue;

console.log(array1.reduce(reducer));

  //const total= getExpensesTotal(expenses); // look into map and reduce
  //console.log(total); //114195


  import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import { expensesTotal} from '../selectors/expensesTotal';



const ExpensesSummary = (props,{}) => (

  

<div>
<h2>Expense Count:{props.expenses.length}</h2>
<h2>Total:{props.expenses.map((expense) => expense.amount).reduce((sum, value) => sum + value, 0)}
</h2>

<h2>Test:{numeral(expensesTotal/ 100).format('$0,0.00')} </h2>
</div>

);



//numeral(amount/ 100).format('$0,0.00')

const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
  };
  
  export default connect(mapStateToProps)(ExpensesSummary);
  