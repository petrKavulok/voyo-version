import { Container } from '@mui/material';

import { Button, Card } from '@workspace/ui';

import { Version } from '../Version';
import * as Styled from './Versions.styles';

export type Platform = {
    version: string;
    buildNo: string;
};

export type Version = {
    title: 'CZ' | 'SK' | 'RO';
    iOs: Platform;
    android: Platform;
    id: number;
};

const mock = [
    {
        title: 'CZ',
        id: 529093783,
        iOs: {
            version: '2.43',
            buildNo: '3.11',
        },
        android: {
            version: '4.01',
            buildNo: '12',
        },
    },
    {
        title: 'SK',
        id: 564759871,
        iOs: {
            version: '2.4',
            buildNo: '3.01',
        },
        android: {
            version: '2.9',
            buildNo: '7.6',
        },
    },
    {
        title: 'RO',
        id: 544688095,
        iOs: {
            version: '2.5',
            buildNo: '3.6',
        },
        android: {
            version: '5',
            buildNo: '13.5.3',
        },
    },
] as const satisfies ReadonlyArray<Version>;

export const VersionsContainer = () => {
    return (
        <Styled.Container maxWidth='lg'>
            {mock.map(el => {
                return <Version key={el.id} title={el.title} iOs={el.iOs} android={el.android} id={el.id} />;
            })}
        </Styled.Container>
    );
};
