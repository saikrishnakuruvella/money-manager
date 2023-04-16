import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'

// const transactionTypeOptions = [
//   {
//     optionId: 'INCOME',
//     displayText: 'Income',
//   },
//   {
//     optionId: 'EXPENSES',
//     displayText: 'Expenses',
//   },
// ]

// const moneyDetailsList = [
//   {
//     id: 1,
//     className: 'bg-balance-color',
//     imgUrl:
//       'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
//     title: 'Your Balance',
//     alt: 'balance',
//   },
//   {
//     id: 2,
//     className: 'bg-income-color',
//     imgUrl:
//       'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png ',
//     title: 'Your Income',
//     alt: 'income',
//   },
//   {
//     id: 3,
//     className: 'bg-expenses-color',
//     imgUrl:
//       'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
//     alt: 'expenses',
//     title: 'Your Expenses',
//   },
// ]

// Write your code here
class MoneyManager extends Component {
  render() {
    return (
      <div className="moneyManagerContainer">
        <div className="name-container">
          <h1>HI,Richard</h1>
          <p>welcome back to your money manager</p>
        </div>
        <ul className="money-details-container">
          <MoneyDetails />
        </ul>
      </div>
    )
  }
}
export default MoneyManager
