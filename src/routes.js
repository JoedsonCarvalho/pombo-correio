import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function AppsRoutes () {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={Login} path="/home" ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppsRoutes

