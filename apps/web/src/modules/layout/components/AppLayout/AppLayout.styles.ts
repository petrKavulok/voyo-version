import { styled } from '@mui/material';

export const Layout = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.color.backgrounds.primary,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: theme.color.typography.white,
    fontFamily: theme.typography.fontFamily,
    paddingBottom: theme.spacing(3),
}));

export const Container = styled('div')(({ theme }) => ({
    padding: `${theme.spacing(3, 0.5, 1.75)} !important`,
    backgroundColor: theme.color.backgrounds.primary,
    // backgroundColor: theme.color.backgrounds.voyoPurple,
    flex: '1 0 auto',
    [theme.breakpoints.up('md')]: {
        padding: `${theme.spacing(3, 3, 1.75)} !important`,
    },
}));
