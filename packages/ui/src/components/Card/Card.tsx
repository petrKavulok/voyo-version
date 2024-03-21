import type { ReactNode } from 'react';
import type { CardProps as MUICardProps } from '@mui/material';

import * as Styled from './Card.styles';

export interface CardProps extends MUICardProps {
    header?: ReactNode;
}

export const Card = ({ header, children, ...rest }: CardProps) => (
    <Styled.Card {...rest}>
        {/* {header} */}
        <Styled.ContentContainer withHeader={!!header}>{children}</Styled.ContentContainer>
    </Styled.Card>
);
