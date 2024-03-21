import type { NextPage } from 'next';

import { AppLayout } from '~modules/layout/components/AppLayout';
import { VersionsContainer } from '~modules/versions/components';

const Home: NextPage = () => {
    return (
        <AppLayout>
            <VersionsContainer />
        </AppLayout>
    );
};

export default Home;
