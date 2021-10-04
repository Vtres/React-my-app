import React from 'react';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import '../assets/css/progress.css'

export default function Loading() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => { });
  React.useEffect(() => {
    progressRef.current = () => {

      if (progress > 100) {
        var tag = document.querySelector('.box-progress')
        tag.classList.add('none')
        // $('#box-progress').addClass('none')
        setProgress(0);
        setBuffer(0);
      } else {
        const diff = Math.random() * 40;
        const diff2 = Math.random() * 40;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box className='box-progress' id='progress'>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} color="secondary" />
    </Box>
  );
}
