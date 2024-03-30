import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextArea from './TextArea'
import Doughnut from './Charts/DoughnutChart'

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', borderRadius:'100%' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius:'100%',
          border:'2px',
          boxShadow:'2px 2px 2px 2px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Typography variant="h6" component="div" color="text.secondary" textAlign="center">
          {`${Math.round(props.value)}`}<br/><span className='text-[10px] font-bold'>SkillX Score</span>
        </Typography>
      </Box>
    </Box>
  );
}

const CandidateNotes = () => {
  const [progress, setProgress] = useState(90);
    return (
    <div className='w-[30%] h-[85vh] flex flex-col items-between justify-between'>
        
        <div className='rounded-xl h-[42vh] bg-white shadow-2xl p-5'>
          <div>
            <CircularProgressWithLabel value={progress} size={95}/>
            <Doughnut />
          </div>
          <div>

          </div>

        </div>

        <div className='rounded-xl h-[42vh] bg-white shadow-2xl p-5'>
          <TextArea />
        </div>

    </div>
  )
}

export default CandidateNotes