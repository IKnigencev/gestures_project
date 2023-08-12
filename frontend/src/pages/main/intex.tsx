import styles from './main.module.css'
import symbolImage from '../../assets/symbol.png'
import { Container, Typography, Divider, Button, Card } from '@mui/material'

export const MainPage = () => {
	return (
		<Container>
			<div className={styles.main}>
				<section className={styles.introduction}>
					<div>
						<Typography
							className={styles.introduction__title}
							variant='h1'
							component='h1'
							mb={3}
							sx={{ fontSize: 80, fontWeight: 'bold', lineHeight: 1.1 }}
						>
							Изучайте язык русских жествов вместе с нами
						</Typography>
						<Button variant='contained'>Приступить</Button>
					</div>
					<img className={styles.introduction__image} src={symbolImage}></img>
				</section>
				<Divider />
				<section className={styles.info}>
					<Typography
						className={styles.info__title}
						variant='h3'
						component='h2'
						sx={{
							marginBottom: 3,
							fontWeight: 'bold'
						}}
					>
						Как мы учим?
					</Typography>
					<div className={styles.info__cards}>
						<Card className={styles.card}>
							<h4 className={styles.card__title}>Разнообразие</h4>
							<p>
								Вы можете учиться на основе различных техник, включая тесты,
								видео, картинки и многое другое.
							</p>
						</Card>
						<Card className={styles.card}>
							<h4 className={styles.card__title}>Удобность</h4>
							<p></p>
						</Card>
						<Card className={styles.card}>
							<h4 className={styles.card__title}>Интерактивность</h4>
							<p></p>
						</Card>
					</div>
				</section>
				<Divider />
				<section className={styles.about}>
					<Typography
						className={styles.info__title}
						variant='h3'
						component='h2'
						sx={{
							marginBottom: 3,
							fontWeight: 'bold'
						}}
					>
						Кому это может быть полезно?
					</Typography>
					<Typography component='p'>
						Сервис подойдёт для людей нуждающихся в языке жестов повседневно:
						для друзей, родителей, знакомых глухонемых или слабослышащих людей.
						Данный сервис нужен для базового изучения языка.
					</Typography>
				</section>
			</div>
		</Container>
	)
}
