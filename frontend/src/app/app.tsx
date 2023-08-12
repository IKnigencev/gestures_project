import styles from './app.module.css'
import {Route, Routes} from "react-router-dom";
import {Login} from "../pages/login";
import {Registration} from "../pages/registration";
import {Container} from "@mui/material";

export const App = () => {
	return <Container className={styles.container} maxWidth={'lg'}>
		<Routes>
			<Route path={'login'} element={<Login/>}/>
			<Route path={'registration'} element={<Registration/>}/>
		</Routes>
	</Container>

}
