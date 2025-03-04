import { Route, Routes } from "react-router-dom";
import SingPage from "../Components/SingPage/SingPage";
import CountPage from "../Components/Count/Acount";


 const MainRouters = () => {

    return (
        <Routes>
            <Route path='/' element={<SingPage/>} />
            <Route path='/conta/:id' element={<CountPage/>} />
            <Route path='/infoConta' element={""} />
        </Routes>
    )
}

export default MainRouters