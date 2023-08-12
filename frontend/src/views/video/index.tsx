import styles from './video.module.css'
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

enum RecordStatuses {
	NONE,
	START,
	RECORDING,
	RECORDED,
	CLOSED
}

export const VideoComponent = () => {
	const [recordStatus, setRecordStatus] = React.useState(RecordStatuses.NONE)
	const recordWebcam = useRecordWebcam(OPTIONS)
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => {
		recordWebcam.open()
		setOpen(true)
		setRecordStatus(RecordStatuses.START)
	}

	const handleStart = () => {
		recordWebcam.start()
		setRecordStatus(RecordStatuses.RECORDING)
	}

	const handleStop = () => {
		recordWebcam.stop()
		setOpen(false)
		setRecordStatus(RecordStatuses.RECORDED)
	}

	const handleSave = async () => {
		const blow = await recordWebcam.getRecording()
		// recordWebcam.download()
		recordWebcam.close()
		setRecordStatus(RecordStatuses.CLOSED)
	}

	return (
		<Container maxWidth={'lg'}>
			<div className={styles.container}>
				<Modal
					open={open}
					onClose={() => {
						setOpen(false)
						recordWebcam.stop()
						recordWebcam.close()
					}}
				>
					<Box className={styles.modal__container}>
						<video
							className={styles.modal__video}
							ref={recordWebcam.webcamRef}
							autoPlay
							muted
						/>
						{recordStatus === RecordStatuses.START && (
							<Button onClick={handleStart}>Начать</Button>
						)}
						{recordStatus === RecordStatuses.RECORDING && (
							<Button onClick={handleStop}>Остановить</Button>
						)}
					</Box>
				</Modal>
				<Button onClick={handleOpen}>Записать</Button>
				{recordStatus === RecordStatuses.RECORDED && (
					<Button onClick={handleSave}>Отправить</Button>
				)}
			</div>
		</Container>
	)
}
