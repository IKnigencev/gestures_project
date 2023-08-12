import styles from './registration.module.css'
import {Avatar, Button, Container, Link as LinkComponent, TextField, Typography} from "@mui/material";
import { SensorOccupied} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/form.ts";
import {TRegistrationForm} from "../../types/auth.ts";



export const Registration = () => {
    const {values, handleChange} = useForm<TRegistrationForm>({
        email: '',
        password: '',
        'password_confirmation': ''
    })
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
                    value={values.email}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    name={'password'}
                    label={'Password'}
                    type={'password'}
                    value={values.password}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    name={'password_confirmation'}
                    label={'Repeat password'}
                    type={'password'}
                    value={values.password_confirmation}
                    onChange={handleChange}
                    fullWidth
                />
                <Button type={'submit'} variant={'contained'} fullWidth>
                    Sign up
                </Button>
            </form>
            <div className={styles.links}>
                <Link to={'/login'}>
                    <LinkComponent component="button" children={'Already logged in ? Sign in'} />
                </Link>
            </div>
        </div>
    </Container>
}