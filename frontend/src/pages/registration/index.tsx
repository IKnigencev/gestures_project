import styles from './registration.module.css'
import {Avatar, Button, Container, Link as LinkComponent, TextField, Typography} from "@mui/material";
import {LockOutlined, SensorOccupied} from "@mui/icons-material";
import {Link} from "react-router-dom";

export const Registration = () => {
    return <Container className={styles.container} maxWidth={'xs'}>
        <div className={styles.root}>
            <Avatar sx={{ bgcolor: 'skyblue' }} className={styles.avatar}>
                <SensorOccupied fontSize={'large'} />
            </Avatar>
            <Typography mt={2} mb={3} fontSize={24} children={'Sign Up'} />
            <form className={styles.form}>
                <TextField
                    name={'email'}
                    label={'Email'}
                    fullWidth
                />
                <TextField
                    name={'password'}
                    label={'Password'}
                    type={'password'}
                    fullWidth
                />
                <TextField
                    name={'password'}
                    label={'Repeat password'}
                    type={'password'}
                    fullWidth
                />
                <Button type={'submit'} variant={'contained'} fullWidth>
                    Sign up
                </Button>
            </form>
            <div className={styles.links}>
                <Link to={'/login'}>
                    <LinkComponent children={'Already logged in ? Sign in'} />
                </Link>
            </div>
        </div>
    </Container>
}