import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import type { VersionProps } from '~modules/versions/constants';

import * as Styled from './Version.styles';

export const Version = ({ title, ios, android }: VersionProps & { ios: any, android: string }) => {

    console.log({ios, android})

    return (
        <Styled.BgCard>
            <Styled.Card>
                <Styled.TitleBox>{title}</Styled.TitleBox>

                <Typography variant='h3' component='p' fontWeight={700} fontSize='1.75rem' mb={0.75} color={'white'}>
                    iOs
                </Typography>
                <Styled.Box>
                    <Styled.Stack>
                        <Styled.InfoTitle>Version</Styled.InfoTitle>
                        <Typography variant='body1' fontSize='1.25rem' color={'white'}>
                            {ios?.results?.[0].version}
                        </Typography>
                        {!ios?.results?.[0].version && <Typography color='lightpink'>error</Typography>}
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

                <Typography variant='h3' component='p' fontWeight={700} fontSize='1.75rem' mb={0.75} color={'white'}>
                    Android
                </Typography>
                <Styled.Box>
                    <Styled.Stack>
                        <Styled.InfoTitle>Version</Styled.InfoTitle>

                        <Typography variant='body1' fontSize='1.25rem' color={'white'}>
                            {android}
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
