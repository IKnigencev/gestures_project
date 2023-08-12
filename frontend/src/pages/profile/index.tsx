import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Typography } from '@mui/material'
import styles from './profile.module.css'

export const ProfilePage: FC = () => {
	return (
		<div className={styles.profile}>
			<Typography sx={{ fontStyle: 700 }} variant='h4' component='h2'>
				Profile
			</Typography>
			<Avatar alt='Avatar' src='' />
			<Link>edit</Link>
		</div>
	)
}
