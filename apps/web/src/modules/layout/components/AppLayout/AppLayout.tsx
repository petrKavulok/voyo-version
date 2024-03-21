import type { ReactNode } from 'react';

import Header from '~modules/header/Header';

import * as Styled from './AppLayout.styles';

interface AppLayoutProps {
    children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <Styled.Layout>
            <Header />
            <Styled.Container>
                <div>{children}</div>
            </Styled.Container>
        </Styled.Layout>
    );
};
