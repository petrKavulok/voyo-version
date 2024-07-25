import { versions } from '~modules/versions/constants';

import { Version } from '../Version';
import * as Styled from './Versions.styles';

export const VersionsContainer = (props: any) => {
    // console.log(props)
    return (
        <Styled.Container maxWidth='lg'>
            {versions.map(el => {
                const iosData = props.iosVersion?.[el.title.toLowerCase().toString()];
                const androidData = props.android?.[el.title.toLowerCase().toString()];

                return <Version key={el.id} title={el.title} ios={iosData} android={androidData}/>;
            })}
        </Styled.Container>
    );
};
