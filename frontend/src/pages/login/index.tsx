import styles from './login.module.css'
import {Avatar, Button, Container, Link as LinkComponent, TextField, Typography} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";

export const Login = () => {
    return <Container className={styles.container} maxWidth={'xs'}>
            <div className={styles.root}>
                <Avatar sx={{ bgcolor: 'skyblue' }} className={styles.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography mt={2} mb={3} fontSize={24} children={'Sign In'} />
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
                    <Button type={'submit'} variant={'contained'} fullWidth>
                        Sign in
                    </Button>
                </form>
                <div className={styles.links}>
                    <Link to={'/registration'}>
                        <LinkComponent children={'Not registered ? Sign Up'} />
                    </Link>
                </div>
            </div>
        </Container>

}