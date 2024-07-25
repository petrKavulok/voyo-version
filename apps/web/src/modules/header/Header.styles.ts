import { Box as MUIBox, styled } from '@mui/material';

export const LogoBox = styled(MUIBox)(({ theme }) => ({
    // height: '60px',
    margin: theme.spacing(0.875),
}));

export const HeaderContainer = styled(MUIBox)(({ theme }) => ({
    position: 'sticky',
    top: 0,
    // @ts-expect-error
    backgroundColor: theme.color.backgrounds.primary,
    // @ts-expect-error
    boxShadow: `0px 25px 30px ${theme.color.backgrounds.primary}`,
    zIndex: 10,
}));
