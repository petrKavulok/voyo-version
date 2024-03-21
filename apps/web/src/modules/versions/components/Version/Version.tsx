import { Box, CardHeader, Container, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { Button, Card, theme } from '@workspace/ui';

import useITunesLookup from '~modules/versions/hooks/useItunesLookup';
import { fetchData } from '~modules/versions/utils/fetchData';

import type { Platform } from '../Versions';
import * as Styled from './Version.styles';

export interface VersionProps {
    title: string;
    iOs: Platform;
    android: Platform;
    id: number;
}

export const Version = ({ title, iOs, android, id }: VersionProps) => {
    // const { data, status } = useQuery(['itunesData', id], () => fetchData(id));
    const { data, isLoading, isError } = useITunesLookup(id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    return (
        // <Styled.ExperimentalBox>
        <Styled.BgCard>
            <Styled.Card>
                <div>
                    <Styled.TitleBox>{title}</Styled.TitleBox>

                    <Typography variant='h3' component='p' fontWeight={700} fontSize={'1.75rem'} mb={0.5}>
                        iOs
                    </Typography>
                    <Styled.Box>
                        <Stack display={'flex'} flexDirection={'row'} gap={0.5} ml={1} alignItems={'center'}>
                            <Typography
                                textTransform={'uppercase'}
                                fontWeight={100}
                                fontSize={'1.25rem'}
                                color={theme.color.typography.lightPurple}
                            >
                                Version
                            </Typography>
                            <Typography variant='body1' fontSize={'1.25rem'}>
                                {data?.results?.[0].version}
                            </Typography>
                        </Stack>
                        {/* TODO: uncomment when advised by PM (Soňa)
                        <Stack display={'flex'} flexDirection={'row'} gap={0.5} ml={1} alignItems={'center'}>
                            <Typography
                                textTransform={'uppercase'}
                                fontWeight={100}
                                fontSize={'1.25rem'}
                                color={theme.color.typography.lightPurple}
                            >
                                Build No.
                            </Typography>

                            <Typography variant='body1' fontSize={'1.25rem'}>
                                {iOs.buildNo}
                            </Typography>
                        </Stack> */}
                    </Styled.Box>

                    <Typography variant='h3' component='h3' fontWeight={700} fontSize={'1.75rem'} mb={0.5}>
                        android
                    </Typography>
                    <Styled.Box>
                        <Stack display={'flex'} flexDirection={'row'} gap={0.5} ml={1} alignItems={'center'}>
                            <Typography
                                textTransform={'uppercase'}
                                fontWeight={100}
                                fontSize={'1.25rem'}
                                color={theme.color.typography.lightPurple}
                            >
                                Version
                            </Typography>

                            <Typography variant='body1' fontSize={'1.25rem'}>
                                {android.version}
                            </Typography>
                        </Stack>
                        {/* TODO: uncomment when advised by PM (Soňa)
                        <Stack display={'flex'} flexDirection={'row'} gap={0.5} ml={1} alignItems={'center'}>
                            <Typography
                                textTransform={'uppercase'}
                                fontWeight={100}
                                fontSize={'1.25rem'}
                                color={theme.color.typography.lightPurple}
                            >
                                Build No.
                            </Typography>

                            <Typography variant='body1' fontSize={'1.25rem'}>
                                {android.buildNo}
                            </Typography>
                        </Stack> */}
                    </Styled.Box>
                </div>
            </Styled.Card>
            {/* <Styled.BgCard /> */}
        </Styled.BgCard>
        // </Styled.ExperimentalBox>
    );
};
