import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import type { VersionProps } from '~modules/versions/constants';
import useITunesLookup from '~modules/versions/hooks/useItunesLookup';

import * as Styled from './Version.styles';

export const Version = ({ title, id }: VersionProps) => {
    const { data, isLoading, isError } = useITunesLookup(id);
    const [androidVersion, setAndroidVersion] = useState('');

    useEffect(() => {
        switch (title) {
            case 'CZ':
                process.env.NEXT_PUBLIC_ANDROID_VERSION_CZ &&
                    setAndroidVersion(process.env.NEXT_PUBLIC_ANDROID_VERSION_CZ);
                break;
            case 'SK':
                process.env.NEXT_PUBLIC_ANDROID_VERSION_SK &&
                    setAndroidVersion(process.env.NEXT_PUBLIC_ANDROID_VERSION_SK);
                break;
            case 'RO':
                process.env.NEXT_PUBLIC_ANDROID_VERSION_RO &&
                    setAndroidVersion(process.env.NEXT_PUBLIC_ANDROID_VERSION_RO);
                break;

            default:
                setAndroidVersion('');
                break;
        }
    }, [title, process.env, setAndroidVersion]);

    return (
        <Styled.BgCard>
            <Styled.Card>
                <Styled.TitleBox>{title}</Styled.TitleBox>

                <Typography variant='h3' component='p' fontWeight={700} fontSize={'1.75rem'} mb={0.75}>
                    iOs
                </Typography>
                <Styled.Box>
                    <Styled.Stack>
                        <Styled.InfoTitle>Version</Styled.InfoTitle>
                        {isLoading ? (
                            'loading...'
                        ) : isError ? (
                            'error :/'
                        ) : (
                            <Typography variant='body1' fontSize={'1.25rem'}>
                                {data?.results?.[0].version}
                            </Typography>
                        )}
                    </Styled.Stack>
                    {/* TODO: uncomment when advised by PM (Soňa)
                        <Styled.Stack}>
                            <Styled.InfoTitle >
                                Build No.
                            </Styled.InfoTitle>

                            <Typography variant='body1' fontSize={'1.25rem'}>
                                {iOs.buildNo}
                            </Typography>
                        </Styled.Stack> */}
                </Styled.Box>

                <Typography variant='h3' component='p' fontWeight={700} fontSize={'1.75rem'} mb={0.75}>
                    Android
                </Typography>
                <Styled.Box>
                    <Styled.Stack>
                        <Styled.InfoTitle>Version</Styled.InfoTitle>

                        <Typography variant='body1' fontSize={'1.25rem'}>
                            {androidVersion}
                        </Typography>
                    </Styled.Stack>
                    {/* TODO: uncomment when advised by PM (Soňa)
                        <Stack display={'flex'} flexDirection={'row'} gap={0.5} ml={1} alignItems={'center'}>
                            <Styled.InfoTitle>
                                Build No.
                            </Styled.InfoTitle>

                            <Typography variant='body1' fontSize={'1.25rem'}>
                                {androidVersion.buildNo}
                            </Typography>
                        </Stack> */}
                </Styled.Box>
            </Styled.Card>
        </Styled.BgCard>
    );
};
