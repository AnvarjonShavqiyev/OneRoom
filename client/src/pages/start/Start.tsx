import { Link } from 'react-router-dom'
import './Start.scss'

const Start = () => {
  return (
    <div className='start-wrapper'>
        <Link className='start-btn' to='/auth/signup'>Start chat</Link>
    </div>
  )
}

export default Start