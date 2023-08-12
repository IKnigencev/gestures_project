import styles from './header.module.css'
import { Login, Home, Logout, Equalizer } from '@mui/icons-material'
import { Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const HeaderComponent = () => {
	return (
		<header className={styles.header}>
			<Container maxWidth={'lg'}>
				<div className={styles.header__container}>
					<div className={styles.header__navigation}>
						<Link className={styles.link} to='/main'>
							<Typography>Главная</Typography>
							<Home sx={{ fontSize: 32, fill: 'white' }} color='action' />
						</Link>
						<Link className={styles.link} to='/statistic'>
							<Typography>Статистика</Typography>
							<Equalizer sx={{ fontSize: 32, fill: 'white' }} color='action' />
						</Link>
					</div>
					<div className={styles.header__navigation_auth}>
						<Link className={styles.link} to='/login'>
							<Typography>Войти</Typography>
							<Login sx={{ fontSize: 32, fill: 'white' }} color='action' />
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
