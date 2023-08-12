import styles from './login.module.css'
import {Avatar, Button, Container, Link as LinkComponent, TextField, Typography} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/form.ts";
import {TLoginForm} from "../../types/auth.ts";
import {SyntheticEvent} from "react";
import {useUserStore} from "../../store/user.ts";



export const Login = () => {
    const {login, error, cleanErrors} = useUserStore()
    const {values, handleChange} = useForm<TLoginForm>({
        email: '',
        password: ''
    }, cleanErrors)
    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        login(values)
    }
    return <Container className={styles.container} maxWidth={'xs'}>
            <div className={styles.root}>
                <Avatar sx={{ bgcolor: 'skyblue' }} className={styles.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography mt={2} mb={3} fontSize={24} children={'Sign In'} />
                <form className={styles.form} onSubmit={onSubmit}>
                    <TextField
                        name={'email'}
                        label={'Email'}
                        value={values.email}
                        onChange={handleChange}
                        fullWidth
                        error={Boolean(error && error.email)}
                        helperText={error && error.email ? error.email : ''}
                    />
                    <TextField
                        name={'password'}
                        label={'Password'}
                        type={'password'}
                        value={values.password}
                        onChange={handleChange}
                        fullWidth
                        error={Boolean(error && error.password)}
                        helperText={error && error.password ? error.password : ''}
                    />
                    <Button type={'submit'} variant={'contained'} fullWidth>
                        Sign in
                    </Button>
                </form>
                <div className={styles.links}>
                    <Link to={'/registration'}>
                        <LinkComponent component="button"  children={'Not registered ? Sign Up'} />
                    </Link>
                </div>
            </div>
        </Container>

}