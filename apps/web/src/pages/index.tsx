import type { NextPage } from 'next';

import { AppLayout } from '~modules/layout/components/AppLayout';
import { VersionsContainer } from '~modules/versions/components';
import { versions } from '~modules/versions/constants';

const Home: NextPage = props => {
    return (
        <AppLayout>
            <VersionsContainer {...props} />
        </AppLayout>
    );
};

export default Home;

export async function getServerSideProps() {
    const requests = [
        fetch(`https://itunes.apple.com/lookup?id=${versions[0].id}`).then(response => response.json()),
        fetch(`https://itunes.apple.com/lookup?id=${versions[1].id}`).then(response => response.json()),
        fetch(`https://itunes.apple.com/lookup?id=${versions[2].id}`).then(response => response.json()),
    ];

    const [data1, data2, data3] = await Promise.all(requests);

    // Pass fetched data to the page component props
    return {
        props: {
            iosVersion: {
                cz: data1,
                sk: data2,
                ro: data3,
            },
        },
    };
}
