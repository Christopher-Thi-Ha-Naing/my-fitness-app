import React, { useEffect , useRef, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const onWheel = (e) => {
      if (scrollContainer) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY * 4.5; 
      }
    };

    scrollContainer.addEventListener('wheel', onWheel, { passive: false });

    return () => scrollContainer.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <Box 
      ref={scrollRef}
      sx={{
        overflowX: 'auto',
        display: 'flex',
        gap: '20px',
        px: 2,
        py: 1,
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
          height: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#1976D2',
          borderRadius: '8px',
        },
      }}
    >
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
        <Box 
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 30px"
        >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    ))}
    </ScrollMenu>
    </Box>
  )
}

export default HorizontalScrollbar