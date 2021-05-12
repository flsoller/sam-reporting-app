import { Box, CircularProgress } from '@material-ui/core';

const Spinner = ({ size }: { size: string }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="20rem"
    >
      <CircularProgress size={size} />
    </Box>
  );
};

export default Spinner;
