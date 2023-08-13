import styles from './app.module.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/login'
import { Registration } from '../pages/registration'
import { CircularProgress, Container } from '@mui/material'
import { ProtectedRouteElement } from '../containers/protected-route'
import { useEffect } from 'react'
import { useUserStore } from '../store/user.ts'
import { statusCheck } from '../helpers'
import { BaseComponent } from '../pages/base/index.tsx'
import { ProfilePage } from '../pages/profile'
import { MainPage } from '../pages/main/intex.tsx'
import { TestPage } from '../views/video/index.tsx'
import { QuestionPage } from '../pages/question/index.tsx'

export const App = () => {
	const { checkAuth, status, logout } = useUserStore()
	useEffect(() => {
		checkAuth()
	}, [])
	return (
		<Container className={styles.container} maxWidth={'lg'}>
			{statusCheck.ready(status) ? (
				<Routes>
					<Route
						path={'/'}
						element={
							<ProtectedRouteElement
								element={
									<div>
										home <button onClick={() => logout()}>logout</button>
									</div>
								}
							/>
						}
					/>
					<Route
						path={'login'}
						element={<ProtectedRouteElement guest element={<Login />} />}
					/>
					<Route
						path={'registration'}
						element={<ProtectedRouteElement guest element={<Registration />} />}
					/>
					<Route
						path={'main'}
						element={<ProtectedRouteElement guest element={<MainPage />} />}
					/>
					<Route path={''} element={<BaseComponent />}>
						<Route path={'profile'} element={<ProfilePage />} />
						<Route path={'question'} element={<QuestionPage />} />
					</Route>
					<Route path={'/*'} element={<div>NOT FOUND</div>} />
				</Routes>
			) : (
				<CircularProgress />
			)}
		</Container>
	)
}
