import { CircularProgress, circularProgressClasses } from '@mui/material';

import css from './loader.module.css';

export function Loader() {
  return (
    <div className={css.wrapper}>
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={(theme) => ({
          color: '#1a90ff',
          animationDuration: '550ms',
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
          ...theme.applyStyles('dark', {
            color: '#308fe8',
          }),
        })}
        size={40}
        thickness={4}
      />
    </div>
  );
}
