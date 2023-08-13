import {Box, Card, CircularProgress, LinearProgress, linearProgressClasses, styled, Typography} from "@mui/material";
import styles from './levels.module.css'
import {Level} from "../../views/level";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import {useLevelsStore} from "../../store/levels.ts";
import {statusCheck} from "../../helpers";
import {useEffect} from "react";


const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#e0e0e0',
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: 'greenyellow',
        borderRadius: 5
    },
}));

export const Levels = () => {
    const {getLevels, data, status} = useLevelsStore()


    useEffect(()=> {
        getLevels()
    }, [])
    return (<div>{statusCheck.ready(status) && data ?
     <>
         <Box display={'flex'} alignItems={'center'} mb={4} pt={2}>
             <Typography fontSize={20} fontWeight={700} children={'Roadmap'}/>
             <MapOutlinedIcon/>
         </Box>
         <div className={styles.blocks}>
             <div className={styles.levels}>
                 {
                     data.lessons.map(lesson =>
                         <Level className={styles.level} title={lesson.title} description={lesson.description} opened={lesson.active}/>)
                 }
                 <Level className={styles.level} title={'Level 1'} description={'A little bit of level 1 description description here'} opened/>
                 <Level className={styles.level} title={'Level 2'} description={'A little bit of level 2 description description here'} opened={false}/>
                 <Level className={styles.level} title={'Level 2'} description={'A little bit of level 2 description description here'} opened={false}/>
             </div>
             <div className={styles.progress}>
                 <Card variant={'outlined'} className={styles.progress_card}>
                     <div className={styles.progress_title}>
                         <Typography fontSize={20} fontWeight={300} children={'Your progress'}/>
                         <Typography children={'10%'} fontSize={24} fontWeight={400}/>
                     </div>
                     <div className={styles.progress_subtitle}>
                         <Typography fontWeight={200} fontSize={14} children={'Осталось 5 шагов до завершения 2 уровня'} mb={1}/>
                         <BorderLinearProgress value={data.active_lessons_count/data.all_lessons_count} variant={'determinate'}/>
                     </div>
                 </Card>
             </div>
         </div>
     </>: <CircularProgress/>
    }
    </div>)
}