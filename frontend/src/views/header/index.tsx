import styles from './header.module.css'
import React from 'react'
import { Button, Drawer, Divider, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material/'
import { useUserStore } from '../../store/user'
import { useNavigate } from 'react-router-dom'

export const HeaderComponent = () => {
	const [isMenuOpened, setIsMenuOpened] = React.useState(false)
	const { logout } = useUserStore()
	const navigate = useNavigate()

	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__navigation}>
					<React.Fragment>
						<Button
							onClick={() => {
								setIsMenuOpened(true)
							}}
						>
							<Menu />
						</Button>
						<Drawer
							anchor='left'
							open={isMenuOpened}
							onClose={() => {
								setIsMenuOpened(false)
							}}
						>
							<div className={styles.menu}>
								<Button
									onClick={() => {
										navigate('/')
									}}
								>
									Обучение
								</Button>
							</div>
						</Drawer>
					</React.Fragment>
				</div>
				<Typography variant='h5' sx={{ color: '#2F78D2' }}>
					Gestures
				</Typography>
				<div className={styles.header__navigation_auth}>
					<Button
						onClick={() => {
							logout()
						}}
					>
						Выйти
					</Button>
				</div>
			</header>
			<Divider />
		</>
	)
}
