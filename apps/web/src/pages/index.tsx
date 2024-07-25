import type { NextPage } from 'next';
// import { getLatestGoogleAppVersion } from '~modules/api/getLatestGoogleAppVersion';


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


const fetchVersion = async (id: string) => {
    try {
      const response = await fetch(`/api/getLatestVersion?appId=${id}`);
      const data: any = await response.json();
      if (response.ok) {
        return data?.version
    } else {
        return data?.error
      }
    } catch (error) {
      throw new Error('Failed to fetch the latest version');
    }
  };



export async function getServerSideProps() {
    const requests = [
        fetch(`https://itunes.apple.com/lookup?id=${versions[0].id}`).then(response => response.json()),
        fetch(`https://itunes.apple.com/lookup?id=${versions[1].id}`).then(response => response.json()),
        fetch(`https://itunes.apple.com/lookup?id=${versions[2].id}`).then(response => response.json()),
        fetchVersion('net.cme.voyo.cz'),
        fetchVersion('net.cme.voyo.sk'),
        fetchVersion('net.cme.voyo.ro'),
    ];

    const [data1, data2, data3, data4, data5, data6] = await Promise.all(requests);

    // Pass fetched data to the page component props
    return {
        props: {
            iosVersion: {
                cz: data1,
                sk: data2,
                ro: data3,
            },
            android: {
                cz: data4,
                sk: data5,
                ro: data6,
            }
        },
    };
}