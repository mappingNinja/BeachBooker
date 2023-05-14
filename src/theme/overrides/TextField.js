export default function TextField(theme) {
    return {
        defaultProps: {
            size: 'large',
            variant: "outlined"
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& fieldset': {
                        borderRadius: 19,
                        border: "2px solid #eaedf8",
                    },
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                        color: "#06133a",
                        border: '2px solid #ff8478!important',
                    },
                    '&:hover fieldset': {
                        border: '2px solid #ff8478!important',
                    },
                },
                label: {
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "1.42em",
                    fontFamily: 'TT Norms Pro Regular ,Helvetica,sans-serif',
                    color: "#06133a",
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                        color: "green",
                        border: '2px solid #ff8478!important',
                    },
                },
                input: {
                    padding: '0px 19px',
                    fontSize: 16,
                    minHeight: "64px",
                    color: "#06133a",
                }
            }
        },
    };
}