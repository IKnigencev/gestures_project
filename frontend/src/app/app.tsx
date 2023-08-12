import './app.css'
import {Route, Routes} from "react-router-dom";

export const App = () => {
	return <Routes>
		<Route path={'login'} element={<div>login</div>}/>
		<Route path={'registration'} element={<div>registration</div>}/>
	</Routes>
}
