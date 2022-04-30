import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import SubsidiaryScreen from "./screens/subsidiary";


const Routing = () =>(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen/>}/>
            <Route exact path="/register" element={<RegisterScreen/>}/>
            <Route exact path="/login" element={<LoginScreen/>}/>
            <Route exact path="/filiais" element={<SubsidiaryScreen/>}/>
        </Routes>
    </BrowserRouter>
);

export default Routing;