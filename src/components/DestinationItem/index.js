// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachItem} = props

  const {id, name, imgUrl} = eachItem

  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="img-box" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
