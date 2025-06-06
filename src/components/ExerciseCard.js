import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Stack direction="row">
          <Button sx={{ml:'21px', color:'#fff', background:'#1976D2', fontSize:'14px',
            borderRadius:'20px', textTransform:'capitalize'
          }}>{exercise.bodyPart}</Button>
          <Button sx={{ml:'21px', color:'#fff', background:'#1976D2', fontSize:'14px',
            borderRadius:'20px', textTransform:'capitalize'
          }}>{exercise.target}</Button>
        </Stack>
        <Typography ml='20px' textTransform='capitalize' pb='10px' mt='11px' fontWeight='bold' color='#1976d2' fontSize='22px'>
          {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard