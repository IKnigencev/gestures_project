import './app.css'
import {Route, Routes} from "react-router-dom";
import {Login} from "../pages/login";

export const App = () => {
	return <Routes>
		<Route path={'login'} element={<Login/>}/>
		<Route path={'registration'} element={<div>registration</div>}/>
	</Routes>
}
