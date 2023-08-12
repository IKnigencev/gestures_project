import styles from './test.module.css'
import React from 'react'
import { useRecordWebcam, RecordOptions } from 'react-record-webcam'
import { Container, Button, Modal, Box } from '@mui/material'

const OPTIONS: RecordOptions = {
	filename: 'test',
	fileType: 'mp4',
	width: 800,
	height: 600,
	frameRate: 60
}

export const TestPage = () => {
	const recordWebcam = useRecordWebcam(OPTIONS)
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => {
		recordWebcam.open()
		setOpen(true)
	}

	const handleStart = () => {
		recordWebcam.start()
	}

	const handleClose = () => {
		recordWebcam.stop()
		setOpen(false)
		if (recordWebcam.status === 'RECORDING') {
			recordWebcam.close()
		}
	}

	const handleDownload = () => {
		recordWebcam.download()
		recordWebcam.close()
	}

	return (
		<Container maxWidth={'lg'}>
			<div className={styles.container}>
				{recordWebcam.status !== 'PREVIEW' &&
					recordWebcam.status !== 'CLOSED' && (
						<Modal
							open={open}
							onClose={() => {
								setOpen(false)
							}}
						>
							<Box className={styles.modal__container}>
								<video
									className={styles.modal__video}
									ref={recordWebcam.webcamRef}
									autoPlay
									muted
								/>
								{/* { recordWebcam.status === '' <Button onClick={handleStart}>Начать</Button>} */}
								<Button onClick={handleStart}>Остановить</Button>
							</Box>
						</Modal>
					)}
				<Button onClick={handleOpen}>Записать видео</Button>
				<Button onClick={handleClose}>Закрыть</Button>
				<Button onClick={handleDownload}></Button>
			</div>
		</Container>
	)
}
