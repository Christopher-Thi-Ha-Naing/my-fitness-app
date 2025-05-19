import { Box } from '@mui/material';
import React, { useState } from 'react';
import AppBanner from '../components/AppBanner';
import SearchExercise from '../components/SearchExercise';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <AppBanner />
      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home