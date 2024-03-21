import { Box as MUIBox, styled } from '@mui/material';

import { Card as MUICard } from '@workspace/ui';

export const Card = styled(MUICard)(({ theme }) => ({
    minWidth: '240px',
    textAlign: 'center',
    borderColor: 'linear-gradient(to right, #30e3ea, #6722ff)',
    // background: theme.color.backgrounds.card,
    position: 'relative',
    borderRadius: '19px',
    // TODO: delete -> this is experimental
    background: 'linear-gradient(45deg, black, transparent)',
}));

export const BgCard = styled(MUICard)(({ theme }) => ({
    border: 'none',
    position: 'relative',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    transition: 'background 2s ease',
    '&::before': {
        transition: 'background 2s ease',
        content: '""',
        position: 'absolute',
        top: '-15px' /* Position gradient above the card */,
        left: '-15px' /* Position gradient to the left of the card */,
        right: '-15px' /* Position gradient to the right of the card */,
        bottom: '-15px' /* Position gradient below the card */,
        borderRadius: '30px' /* Ensure same border radius as the card */,
        background: 'linear-gradient(to right, #30e3ea, #6722ff)',
    },
    '&:hover::before': {
        background: 'linear-gradient(125deg, #30e3ea, #6722ff)',
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

// export const ExperimentalBox = styled('div')(({ theme }) => ({
//     backgroundColor: 'black',
//     borderRadius: '15px',
//     position: 'relative',
//     overflow: 'hidden',
//     transition: 'border 2s ease',
//     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',

//     /* Initial gradient border */
//     border: '3px solid transparent',
//     backgroundClip: 'padding-box',
//     borderImageSlice: '1',
//     borderWidth: '15px',
//     borderImageSource: 'linear-gradient(to right, #ff9966, #ff5e62)',

//     /* Transition to a different gradient on hover */
//     '&:hover ': {
//         borderImageSource: 'linear-gradient(to right, #00b4db, #0083b0)',
//     },
// }));
