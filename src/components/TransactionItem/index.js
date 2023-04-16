// Write your code here
import './index.css'

const TransactionItem = props => {
  const {listDetails, deleteTransaction} = props
  const {title, amount, type, id} = listDetails

  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li>
      <div className="list-items">
        <p className="data">{title}</p>
        <p className="data">{amount}</p>
        <p className="data">{type}</p>
        <button type="button" onClick={onDelete} className="dlt-btn">
          <img
            className="dlt-img"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
