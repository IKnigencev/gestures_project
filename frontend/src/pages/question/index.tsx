import styles from './question.module.css'
import defaultImage from '../../assets/symbol.png'
import {
	Box,
	FormControlLabel,
	FormControl,
	FormLabel,
	Radio,
	RadioGroup,
	Button,
	Typography
} from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { VideoComponent } from '../../views/video'

enum Question {
	Video,
	Photo
}
const type = Question.Video
const choices = ['Мама', 'Папа', 'Брат', 'Сестра']

const question = 'Покажите жестами в камеру слово "Мама".'

export const QuestionPage = () => {
	return (
		<Box className={styles.question}>
			<ChevronLeft sx={{ fontSize: 32, cursor: 'pointer' }} />
			{type === Question.Photo && (
				<div className={styles.question__container}>
					<img src={defaultImage} className={styles.question__image} />
					<FormControl>
						<FormLabel id='demo-radio-buttons-group-label'>
							Какой жест изображен на картинке?
						</FormLabel>
						<RadioGroup name='questions'>
							{choices.map(choice => {
								return (
									<FormControlLabel
										value={choice}
										control={<Radio />}
										label={choice}
									/>
								)
							})}
						</RadioGroup>
					</FormControl>
					<Button>Ответить</Button>
				</div>
			)}
			{type === Question.Video && (
				<div className={styles.question__container}>
					<Typography mb={2} sx={{ fontStyle: 'italic' }}>
						Описание задания: нажмите кнопку запись и продемонстрируйте в камеру
						слово, указанное в задании. Вы можете перезаписать видео, повторно
						нажав на кнопку. Если Вы уверены в своем ответе, отправьте Ваш
						результат
					</Typography>
					<Typography children={question} />
					<VideoComponent />
				</div>
			)}
			<ChevronRight sx={{ fontSize: 32, cursor: 'pointer' }} />
		</Box>
	)
}
