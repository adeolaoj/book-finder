import { X } from 'lucide-react'

const XButton = ({ onClick }) => (
  <div onClick={onClick} className="icon-wrapper">
    <X size={20} />
  </div>
)

export default XButton