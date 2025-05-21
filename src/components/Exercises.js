import React, { useEffect, useState } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ setExercises, bodyPart, exercises}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPage = currentPage*9;
  const indexoFPrevPage = indexOfLastPage-9;
  const currentExercises = exercises.slice(indexoFPrevPage,indexOfLastPage);

  const paginate =(e, value) =>{
    setCurrentPage (value);
    const element = document.getElementById('exercises');
    if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  }

  useEffect(() => {
    const fetchExercisesData = async() =>{
      let exercisesData = [];
      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=2000', exerciseOptions);
      }else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=2000`, exerciseOptions);
      }
      setExercises(exercisesData);
  }
  fetchExercisesData();
            },[bodyPart]);


  return (
    <Box id="exercises"
      sx={{mt:{lg:'110px'}}}
      mt="50px"
      p="20px">
        <Typography variant='h4' mb="46px">Showing Exercises</Typography>
        <Stack direction="row" sx={{gap: {lg:'110px',xs:'50px'}}} 
        flexWrap="wrap" justifyContent="center">
          {currentExercises.map((exercise,index) => (
              <ExerciseCard key={index} exercise={exercise} />
          ))}
        </Stack>
        <Stack mt='100px' alignItems='center'>
          {exercises.length > 9 && (
            <Pagination color='standard' shape='rounded' defaultPage={1} 
            count={Math.ceil(exercises.length/9)} page={currentPage} onChange={paginate} size='large'>
              
            </Pagination>

          )}

        </Stack>
    </Box>
  )
}

export default Exercises