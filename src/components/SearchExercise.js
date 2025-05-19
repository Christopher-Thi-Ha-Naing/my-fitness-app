import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import '../css/SearchButton.css';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercise = ({ setExercises, bodyPart, setBodyPart}) => {
  
  const [search,setSearch] = useState('');
 
  const [bodyParts, setBodyParts] = useState([]);


  useEffect(() =>{
    const fetchExercisesData = async() => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all',...bodyPartData])
    }
    fetchExercisesData();
    
  },[])

  const handleSearch = async () => {
  if (search) {
    const exerciseData = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises',
      exerciseOptions
    );

    const filteredExercises = exerciseData.filter((exercise) => {
      const searchValue = search.toLowerCase();
      return (
        (exercise.name || '').toLowerCase().includes(searchValue) ||
        (exercise.target || '').toLowerCase().includes(searchValue) ||
        (exercise.equipment || '').toLowerCase().includes(searchValue) ||
        (exercise.bodyPart || '').toLowerCase().includes(searchValue)
      );
    });

    console.log("Filtered results:", filteredExercises); // ← Check this

    setSearch('');
    setExercises(filteredExercises);
  }
};

  
  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
          mb: '50px',
          textAlign: 'center',
          lineHeight: 1.2,
          color: '#333',
        }}
      >
        Search Your Favourite <br />
        Exercises
      </Typography>

      <Box
        sx={{
          position: 'relative',         // <-- important!
          width: { xs: '300px', sm: '500px', lg: '800px' },
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
          fullWidth
          sx={{ pr: '120px' }}            // <-- add padding right to avoid overlap
          InputProps={{
            sx: {
              fontWeight: 700,
              borderRadius: '40px',
              height: '56px',
              fontSize: { xs: '14px', lg: '18px' },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ccc',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1976D2',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1976D2',
              },
            },
          }}
        />

        <Button
          className="search-button"
          sx={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            height: '40px',
            minWidth: 'auto',
            px: 3,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box
       sx={{position: 'relative', width: '100%', p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  );
};

export default SearchExercise;
