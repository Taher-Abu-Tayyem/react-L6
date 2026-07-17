import { teal,grey} from '@mui/material/colors';

const getDesignToken = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for Light mode
            malak: {
              main: "#647488",
            },
            favColor:{
              main:grey[300]
            },
          }
        : {
            // palette values for dark mode
            malak: {
              main: teal[500],
            },
              favColor:{
              main: grey[600]
            },
          }),
    },
});
export default getDesignToken;