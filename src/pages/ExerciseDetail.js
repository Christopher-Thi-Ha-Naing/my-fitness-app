import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData, youtubeSearchOption } from '../utils/fetchData';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const { id }= useParams();

  const [exerciseDetail, SetExerciseDetail]= useState({});
  const [exerciseVideos, setexerciseVideos] = useState([]);
  const [targetMuscleExercises, settargetMuscleExercises] = useState([]);
  const [equipmentExercises, setequipmentExercises] = useState([]);



  useEffect(() => {
    const fetchExercisesData = async() => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      SetExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeSearchOption)
      setexerciseVideos(exerciseVideoData.contents);

      const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
      settargetMuscleExercises(targetMuscleExerciseData);

      const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
      setequipmentExercises(equipmentExerciseData);
    }
    fetchExercisesData();
  },[id])


  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos = {exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises = {targetMuscleExercises} equipmentExercises = {equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail