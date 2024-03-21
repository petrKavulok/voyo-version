import { Container as MUIContainer, styled } from '@mui/material';

export const Container = styled(MUIContainer)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0',

    [theme.breakpoints.up('md')]: {
        padding: `${theme.spacing(0, 1)} !important`,
    },
}));
