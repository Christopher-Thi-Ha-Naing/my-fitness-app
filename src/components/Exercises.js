import React, { useEffect, useState } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ setExercises, bodyPart, exercises}) => {
  console.log("Exercises Data",exercises);
  return (
    <Box id="exercises"
      sx={{mt:{lg:'110px'}}}
      mt="50px"
      p="20px">
        <Typography variant='h4' mb="46px">Showing Result</Typography>
        <Stack direction="row" sx={{gap: {lg:'110px',xs:'50px'}}} 
        flexWrap="wrap" justifyContent="center">
          {exercises.map((exercise,index) => (
              <ExerciseCard key={index} exercise={exercise} />
          ))}
        </Stack>
    </Box>
  )
}

export default Exercises