// Write your code here
import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

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

class MoneyDetails extends Component {
  state = {
    HistoryList: [],
    title: '',
    amount: 0,
    type: '',
    Income: 0,
    Expenses: 0,
  }

  titleChange = event => {
    this.setState({title: event.target.value})
  }

  amountChange = event => {
    this.setState({amount: event.target.value})
  }

  typeChange = event => {
    this.setState({type: event.target.value})
    const {type} = this.state
    console.log(type)

    // const {type} = this.state
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    if (type === 'Income') {
      this.setState(prevState => ({
        Income: prevState.Income + amount,
      }))
    } else {
      this.setState(prevState => ({
        Expenses: prevState.Expenses + amount,
      }))
    }

    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      HistoryList: [...prevState.HistoryList, newTransaction],
      title: '',
      amount: '',
    }))
  }

  deleteTransaction = id => {
    const {HistoryList} = this.state
    const filteredList = HistoryList.filter(each => each.id !== id)
    this.setState({HistoryList: filteredList})
  }

  render() {
    const {HistoryList} = this.state
    const {title, amount, Income, Expenses} = this.state

    return (
      <>
        <div className="total">
          <div className="top bg-balance-color">
            <li className="money-details-container">
              <img
                className="balance-img"
                alt="balance"
                src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              />
              <div className="balance-content">
                <p>Your Balance</p>
                <p>Rs 40000</p>
              </div>
            </li>
          </div>

          <div className="top bg-income-color">
            <li className="money-details-container">
              <img
                className="balance-img"
                alt="income"
                src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              />
              <div className="balance-content">
                <p>Your Income</p>
                <p>Rs {Income}</p>
              </div>
            </li>
          </div>

          <div className="top bg-expenses-color">
            <li className="money-details-container">
              <img
                className="balance-img"
                alt="expenses"
                src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              />
              <div className="balance-content">
                <p>Your Expenses</p>
                <p>Rs {Expenses}</p>
              </div>
            </li>
          </div>

          <div className="transaction-line">
            <div className="bottom">
              <h2>Add Tranction</h2>
              <form onSubmit={this.addTransaction}>
                <div>
                  <label htmlFor="title">Title</label>
                  <input id="title" onChange={this.titleChange} value={title} />
                </div>
                <div>
                  <label htmlFor="amount">Amount</label>
                  <input
                    id="amount"
                    onChange={this.amountChange}
                    value={amount}
                    type="number"
                  />
                </div>
                <div>
                  <label htmlFor="select">Type</label>
                  <select id="select" onChange={this.typeChange}>
                    <option value="Income">
                      {transactionTypeOptions[0].displayText}
                    </option>
                    <option value="Expenses">
                      {transactionTypeOptions[1].displayText}
                    </option>
                  </select>
                </div>
                <button type="submit">Add</button>
              </form>
            </div>
            <div className="table">
              <div className="history-list-container">
                <p className="title-head">Title</p>
                <p className="title-head">Amount</p>
                <p className="title-head">Type</p>
              </div>
              <ul className="list-items">
                {HistoryList.map(each => (
                  <TransactionItem
                    deleteTransaction={this.deleteTransaction}
                    listDetails={each}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyDetails
