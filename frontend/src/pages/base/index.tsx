import { Outlet } from 'react-router-dom'
import { HeaderComponent } from '../../views/header'

export const BaseComponent = () => {
	return (
		<>
			<HeaderComponent />
			<main>
				<Outlet />
			</main>
		</>
	)
}
