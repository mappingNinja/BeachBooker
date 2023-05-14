import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {

        },
        sizeLarge: {
          height: 48,
        },
        containedPrimary: {
          backgroundColor: "#000",
          color: "#fff",
          border: "1px solid #fff",
          '&:hover': {
            backgroundColor: "#000000b3",
            boxShadow: 'none',
          },
        },        
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
