import { FC } from 'react'
import { Avatar, Typography, Container, Divider } from '@mui/material'
import styles from './profile.module.css'

export const ProfilePage: FC = () => {
	return (
		<Container>
			<div className={styles.profile}>
				<Typography
					textAlign={'center'}
					mb={2}
					sx={{ fontWeight: 600 }}
					variant='h5'
					component='h2'
				>
					Профиль
				</Typography>
				<div className={styles.profile__avatar_container}>
					<Avatar sx={{ width: 150, height: 150 }} alt='Avatar' src='' />
				</div>
				<Divider />
				<Typography sx={{ fontSize: 16 }}>Имя: Егор</Typography>
				<Divider />
				<Typography sx={{ fontSize: 16 }}>Фамилия: Рязанов</Typography>
				<Divider />
				<Typography sx={{ fontSize: 16 }}>Почта: example@gmail.com</Typography>
				<Divider />
			</div>
		</Container>
	)
}
