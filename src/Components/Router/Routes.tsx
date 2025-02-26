import { Route, Routes } from "react-router-dom";
import Body from "../Body/Body";


 const MainRouters = () => {

    return (
        <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/conta/:id' element={""} />
            <Route path='/infoConta' element={""} />
        </Routes>
    )
}

export default MainRouters