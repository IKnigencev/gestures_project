import styles from './app.module.css'
import {Route, Routes} from "react-router-dom";
import {Login} from "../pages/login";
import {Registration} from "../pages/registration";
import {CircularProgress, Container} from "@mui/material";
import {ProtectedRouteElement} from "../containers/protected-route";
import {useEffect} from "react";
import {useUserStore} from "../store/user.ts";
import {statusCheck} from "../helpers";

export const App = () => {
	const {checkAuth, status, logout} = useUserStore()
	useEffect(() => {
		checkAuth()
	}, [])
	return (
		<Container className={styles.container} maxWidth={'lg'}>
			{!statusCheck.loding(status) && !statusCheck.initial(status) ?
		<Routes>
			<Route path={'/'} element={<ProtectedRouteElement element={<div>home <button onClick={() => logout()}>logout</button></div>}/>}/>
			<Route path={'login'} element={<ProtectedRouteElement guest element={<Login/>}/>}/>
			<Route path={'registration'} element={<ProtectedRouteElement guest element={<Registration/>}/>}/>
			<Route path={'/*'} element={<div>NOT FOUND</div>}/>
		</Routes> : <CircularProgress />}
	</Container>)

}
