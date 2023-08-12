import './app.module.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/login'
import { ProfilePage } from '../pages/profile'
import { BaseComponent } from '../pages/base'
import { MainPage } from '../pages/main/intex'
import { TestPage } from '../pages/test'

export const App = () => {
	return (
		<Routes>
			<Route path={'login'} element={<Login />} />
			<Route path={''} element={<BaseComponent />}>
				<Route path={'profile'} element={<ProfilePage />} />
				<Route path={'main'} element={<MainPage />} />
				<Route path={'test'} element={<TestPage />} />
			</Route>
			<Route path={'profile'} element={<ProfilePage />} />
			<Route path={'registration'} element={<div>registration</div>} />
		</Routes>
	)
}
