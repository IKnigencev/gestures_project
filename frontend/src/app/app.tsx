import styles from './app.module.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/login'
import { Registration } from '../pages/registration'
import { Container } from '@mui/material'

export const App = () => {
	return <Container className={styles.container} maxWidth={'lg'}>
		<Routes>
			<Route path={'/'} element={<ProtectedRouteElement element={<div>home <button onClick={() => logout()}>logout</button></div>}/>}/>
			<Route path={'login'} element={<ProtectedRouteElement guest element={<Login/>}/>}/>
			<Route path={'registration'} element={<ProtectedRouteElement guest element={<Registration/>}/>}/>
			<Route path={''} element={<BaseComponent />}>
				<Route path={'profile'} element={<ProfilePage />} />
				<Route path={'main'} element={<MainPage />} />
				<Route path={'test'} element={<TestPage />} />
			</Route>
			<Route path={'profile'} element={<ProfilePage />} />
			<Route path={'/*'} element={<div>NOT FOUND</div>}/>
		</Routes> : <CircularProgress />}
	</Container>)

}
