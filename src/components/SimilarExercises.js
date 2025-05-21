import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './loader';

const SimilarExercises = ( {targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0px'}}}>
        <Typography variant='h4' mb={5} textTransform='capitalize'>Exercises that focus the same muscle group</Typography>
        <Stack direction='row' sx={{p:'2', position:'relative'}} mb={5}>
            {targetMuscleExercises.length ? 
            <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader/>}
        </Stack>

        <Typography variant='h4' mb={5} mt={5} textTransform='capitalize'>Exercises that use the same equipment</Typography>
        <Stack direction='row' sx={{p:'2', position:'relative'}}>
            {equipmentExercises.length ? 
            <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}
        </Stack>

    </Box>
  )
}

export default SimilarExercises