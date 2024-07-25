import { Box as MUIBox, Stack as MUIStack, styled, Typography, Card as MUICard } from '@mui/material';

export const Card = styled(MUICard)(({ theme }) => ({
    minWidth: '240px',
    textAlign: 'center',
    backgroundColor: theme.color.backgrounds.card,
    position: 'relative',
    borderRadius: '19px',
}));

export const BgCard = styled(MUICard)(({ theme }) => ({
    border: 'none',
    position: 'relative',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    
    transition: 'transform 0.2s ease-out',
    '&:hover': {
        transform: 'scale(1.025)',
    },
    
    '&::before': {
        transition: 'background 2s ease',
        content: '""',
        position: 'absolute',
        top: '-15px',
        left: '-15px',
        right: '-15px',
        bottom: '-15px',
        borderRadius: '30px',
        background: 'linear-gradient(to right, #30e3ea, #6722ff)',
    },
}));

export const Box = styled(MUIBox)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(2),
}));

export const TitleBox = styled(MUIBox)(({ theme }) => ({
    fontSize: '5rem',
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(1),
    padding: theme.spacing(2),
}));

export const Stack = styled(MUIStack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    alignItems: 'center',
}));

export const InfoTitle = styled(Typography)(({ theme }) => ({
    textTransform: 'uppercase',
    fontWeight: 100,
    fontSize: '1.25rem',
    color: theme.color.typography.lightPurple,
}));
