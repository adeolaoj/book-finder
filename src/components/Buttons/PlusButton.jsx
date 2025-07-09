import { Plus } from 'lucide-react'
import './ButtonStyles.css'

const PlusButton = ({ onClick }) => (
  <button onClick={onClick} className="plus-button">
    <Plus className="plus-icon" />
  </button>
)

export default PlusButton