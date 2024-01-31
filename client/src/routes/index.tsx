import { Route, Routes } from "react-router-dom"
import Start from "../pages/start/Start"
import Auth from "../pages/auth/Auth"

const index:React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/auth/:action' element={<Auth/>}/>
    </Routes>
  )
}

export default index