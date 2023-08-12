import styles from './app.module.css'
import {Route, Routes} from "react-router-dom";
import {Login} from "../pages/login";
import {Registration} from "../pages/registration";
import {Container} from "@mui/material";
import {ProtectedRouteElement} from "../containers/protected-route";

export const App = () => {
	return <Container className={styles.container} maxWidth={'lg'}>
		<Routes>
			<Route path={'/'} element={<ProtectedRouteElement element={<div>home</div>}/>}/>
			<Route path={'login'} element={<ProtectedRouteElement guest element={<Login/>}/>}/>
			<Route path={'registration'} element={<ProtectedRouteElement guest element={<Registration/>}/>}/>
			<Route path={'/*'} element={<div>NOT FOUND</div>}/>
		</Routes>
	</Container>

}
