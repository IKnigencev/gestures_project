import styles from './main.module.css'
import symbolImage from '../../assets/symbol.png'
import { useNavigate } from 'react-router-dom'
import { Typography, Divider, Button, Card } from '@mui/material'
import {
	AccessTimeRounded,
	AddchartRounded,
	InventoryRounded
} from '@mui/icons-material'

export const MainPage = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.main}>
			<section className={styles.introduction}>
				<div>
					<Typography
						className={styles.introduction__title}
						variant='h1'
						component='h1'
						mb={3}
						sx={{ fontSize: 72, fontWeight: 'bold', lineHeight: 1.1 }}
					>
						Изучайте язык русских жествов вместе с нами
					</Typography>
					<Button
						className={styles.introduction__button}
						sx={{
							paddingLeft: 12,
							paddingRight: 12,
							paddingTop: 2,
							paddingBottom: 2
						}}
						variant='contained'
						onClick={() => {
							navigate('/login')
						}}
					>
						Приступить
					</Button>
				</div>
				<img className={styles.introduction__image} src={symbolImage}></img>
			</section>
			<Divider />
			<section className={styles.info}>
				<Typography
					className={styles.info__title}
					variant='h4'
					component='h2'
					sx={{
						marginBottom: 3,
						fontWeight: 'bold'
					}}
				>
					Как мы учим?
				</Typography>
				<div className={styles.info__cards}>
					<Card variant='outlined' className={styles.card}>
						<h4 className={styles.card__title}>Наглядный прогресс</h4>
						<p className={styles.card__desc}>
							Отслеживаем, как каждое задание развивает ваши навыки
						</p>
						<div className={styles.card__image}>
							<AddchartRounded sx={{ fontSize: 68 }} />
						</div>
					</Card>
					<Card variant='outlined' className={styles.card}>
						<h4 className={styles.card__title}>Удобный темп обучения</h4>
						<p className={styles.card__desc}>
							Вы сами выбираете как часто и как долго будете заниматься
						</p>
						<div className={styles.card__image}>
							<AccessTimeRounded sx={{ fontSize: 68 }} />
						</div>
					</Card>
					<Card variant='outlined' className={styles.card}>
						<h4 className={styles.card__title}>Все в одном месте</h4>
						<p className={styles.card__desc}>
							Быстрый доступ ко всем материалам
						</p>
						<div className={styles.card__image}>
							<InventoryRounded sx={{ fontSize: 68 }} />
						</div>
					</Card>
				</div>
			</section>
			<Divider />
			<section className={styles.about}>
				<Typography
					className={styles.info__title}
					variant='h4'
					component='h2'
					sx={{
						marginBottom: 3,
						fontWeight: 'bold'
					}}
				>
					Кому это может быть полезно?
				</Typography>
				<Typography component='p'>
					Сервис подойдёт для людей нуждающихся в языке жестов повседневно: для
					друзей, родителей, знакомых глухонемых или слабослышащих людей. Данный
					сервис нужен для базового изучения языка.
				</Typography>
			</section>
		</div>
	)
}
