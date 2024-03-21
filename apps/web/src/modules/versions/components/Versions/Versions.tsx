import { Container } from '@mui/material';

import { Button, Card } from '@workspace/ui';

import { versions } from '~modules/versions/constants';

import { Version } from '../Version';
import * as Styled from './Versions.styles';

export const VersionsContainer = () => {
    return (
        <Styled.Container maxWidth='lg'>
            {versions.map(el => {
                return <Version key={el.id} title={el.title} id={el.id} />;
            })}
        </Styled.Container>
    );
};
