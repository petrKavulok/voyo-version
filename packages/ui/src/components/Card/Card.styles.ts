import { Card as MUICard, styled } from '@mui/material';

export const Card = styled(MUICard)(({ theme }) => ({
    padding: `${theme.spacing(1.5, 0.75, 1.25)}`,
    borderRadius: '30px',
    boxShadow: `${theme.shadows[0]} !important`,
    color: theme.color.typography.white,

    backgroundColor: theme.color.backgrounds.secondary,
}));

export const ContentContainer = styled('div', { shouldForwardProp: propName => propName !== 'withHeader' })<{
    withHeader: boolean;
}>(({ theme, withHeader }) => ({
    // padding: `${theme.spacing(withHeader ? 0.25 : 0.75, 2, 0)}`,
}));
