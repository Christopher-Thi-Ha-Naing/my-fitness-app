import React from 'react';
import { Typography, Stack } from '@mui/material';
import '../css/style.css';
import allIcon from '../assets/icons/all.png';
import upperArmIcon from '../assets/icons/upper arm.png';
import lowerArmIcon from '../assets/icons/lower arm.png';
import upperLegIcon from '../assets/icons/upper leg.png';
import lowerLegIcon from '../assets/icons/lower leg.png';
import chestIcon from '../assets/icons/chest.png';
import cardioIcon from '../assets/icons/cardio.png';
import waistIcon from '../assets/icons/waist.png';
import shoulderIcon from '../assets/icons/shoulder.png';
import neckIcon from '../assets/icons/neck.png';
import backIcon from '../assets/icons/back.png';

const iconMap = {
  'all': allIcon,
  'chest': chestIcon,
  'cardio': cardioIcon,
  'upper arms': upperArmIcon,
  'lower arms': lowerArmIcon,
  'upper legs': upperLegIcon,
  'lower legs': lowerLegIcon,
  'waist': waistIcon,
  'shoulders': shoulderIcon,
  'neck': neckIcon,
  'back': backIcon,
};


const BodyPart = ({item, bodyPart, setBodyPart}) => {
  const selectedIcon = iconMap[item] || allIcon;
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card icon-wrapper"
      sx={{
        borderTop: bodyPart === item ?'4px solid #ff265' : '',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap:'47px',
        '&:hover': {
          '& img': {
            filter: 'brightness(0.8)',
            transition: 'filter 0.3s ease',
          },
          '& p': {
            color: 'white',
          },
        },
      }}
      onClick = { () => {
        setBodyPart(item);
        window.scrollTo({top:1300, left:100, behavior:"smooth"})
      }}>
          <img src={selectedIcon} alt={item} style={{width:'40px', height:'40px'}}/>
        
        
        <Typography fontSize="24px" textTransform="capitalize" color="#1976D2">{item}</Typography>
    </Stack>
    
  )
  
}

export default BodyPart