import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import type { VersionProps } from '~modules/versions/constants';

import * as Styled from './Version.styles';

export const Version = ({ title, ios }: VersionProps & { ios: any }) => {
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
    }, [title, setAndroidVersion]);

    return (
        <Styled.BgCard>
            <Styled.Card>
                <Styled.TitleBox>{title}</Styled.TitleBox>

                <Typography variant='h3' component='p' fontWeight={700} fontSize='1.75rem' mb={0.75}>
                    iOs
                </Typography>
                <Styled.Box>
                    <Styled.Stack>
                        <Styled.InfoTitle>Version</Styled.InfoTitle>
                        <Typography variant='body1' fontSize='1.25rem'>
                            {ios.results?.[0].version}
                        </Typography>
                        {!ios.results?.[0].version && <Typography color='lightpink'>error</Typography>}
                        {/* )} */}
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

                <Typography variant='h3' component='p' fontWeight={700} fontSize='1.75rem' mb={0.75}>
                    Android
                </Typography>
                <Styled.Box>
                    <Styled.Stack>
                        <Styled.InfoTitle>Version</Styled.InfoTitle>

                        <Typography variant='body1' fontSize='1.25rem'>
                            {androidVersion}
                        </Typography>
                    </Styled.Stack>
                    {/* TODO: uncomment when advised by PM (Soňa)
                    <Styled.Stack>
                            <Styled.InfoTitle>
                                Build No.
                            </Styled.InfoTitle>

                            <Typography variant='body1' fontSize={'1.25rem'}>
                                {androidVersion.buildNo}
                            </Typography>
                        </Styled.Stack> */}
                </Styled.Box>
            </Styled.Card>
        </Styled.BgCard>
    );
};
