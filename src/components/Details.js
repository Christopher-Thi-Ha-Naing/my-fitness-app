import React from 'react';
import { Typography,Stack,Button } from '@mui/material';


const Details = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment, instructions = []  } = exerciseDetail;
    const extraDetail = [
        {
            icon: 'Main Movement BodyPart',
            name: bodyPart
        },
        {
            icon: 'Target Area',
            name: target
        },
        {
            icon: 'Required Equipments',
            name: equipment
        }
    ]


  return (
    <Stack gap='60px'
    sx={{flexDirection:{lg:'row', xs: 'column'},
    p:'20px',
    alignItems:'center'}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' ></img>
        <Stack sx={{gap:{lg:'35px', xs:'40px'}}}>
            <Typography variant='h3' textTransform='capitalize' color='#1976D2'>{name}</Typography>
            <Typography variant='h4'>Instructions</Typography>
            <Typography variant='h6'>
                <Stack gap="10px">
                    {instructions.map((step, index) => (
                        <Typography key={index} variant="body1">
                        {index + 1}. {step}
                        </Typography>
                    ))}
                </Stack>
            </Typography>
            {extraDetail.map((item) => (
                <Stack key={item.name} direction='row' alignItems='center' sx={{ gap:{lg:'24px', xs:'10px'} }}>
                    <Button>
                        <Typography>{item.icon} : </Typography>
                    </Button>
                    <Typography textTransform='capitalize' variant='h6'>{item.name}</Typography>
                </Stack> 

            ))}
        </Stack>
    </Stack>
  )
}

export default Details