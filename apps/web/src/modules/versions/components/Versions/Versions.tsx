import { versions } from '~modules/versions/constants';

import { Version } from '../Version';
import * as Styled from './Versions.styles';

export const VersionsContainer = (props: any) => {
    return (
        <Styled.Container maxWidth='lg'>
            {versions.map(el => {
                const iosData = props.iosVersion?.[el.title.toLowerCase().toString()];

                return <Version key={el.id} title={el.title} ios={iosData} />;
            })}
        </Styled.Container>
    );
};
