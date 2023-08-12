import styles from './header.module.css'
import { Login, Home, Logout } from '@mui/icons-material'
import { Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const HeaderComponent = () => {
	return (
		<header className={styles.header}>
			<Container maxWidth={'lg'}>
				<div className={styles.header__container}>
					<div className={styles.header__navigation}>
						<Link to='/home'>
							<Home sx={{ fontSize: 32 }} color='action'></Home>
						</Link>
					</div>
					<div className={styles.header__navigation_auth}>
						<Link className={styles.navigation_logout} to='/login'>
							<Typography>Войти</Typography>
							<Login sx={{ fontSize: 32 }} color='action'></Login>
						</Link>
						{/* <Link className={styles.navigation_logout} to='/login'>
							<Typography>Выйти</Typography>
							<Logout sx={{ fontSize: 32 }} color='action'></Logout>
						</Link> */}
					</div>
				</div>
			</Container>
		</header>
	)
}
