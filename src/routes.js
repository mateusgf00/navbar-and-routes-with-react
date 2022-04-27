import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';


const Routing = () =>(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen/>}/>
            <Route exact path="/register" element={<RegisterScreen/>}/>
            <Route exact path="/login" element={<LoginScreen/>}/>
        </Routes>
    </BrowserRouter>
);

export default Routing;