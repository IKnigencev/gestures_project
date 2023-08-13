import {Avatar, Card, Typography} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import img from '../../assets/road.png';
import styles from "../../pages/levels/levels.module.css";
export const Level = ({className, title, description, opened}: {className: string, title: string, description: string, opened: boolean}) => {
    return (<div className={styles.block_level}>
                <Card variant={'outlined'} className={className}>
                <div>
                    <Typography fontSize={20} fontWeight={500} children={title} mb={1}/>
                    <Typography children={description}/>
                </div>
                <div>
                    <Avatar sx={{bgcolor: !opened ? 'darkgray' : 'greenyellow'}}>
                        {!opened ? <LockOutlinedIcon/> : <LockOpenIcon/>}
                    </Avatar>
                </div>
                <div className={styles.image}>
                    <img src={img}/>
                </div>
            </Card>
        </div>
        )
}