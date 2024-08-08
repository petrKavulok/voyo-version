import type { NextPage } from 'next';

import {load} from 'cheerio';

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

async function getLatestGoogleAppVersion(appId: string): Promise<string | null> {
    try {
        const url = `https://play.google.com/store/apps/details?id=net.cme.voyo.${appId}&hl=sk&pli=1`;

        const response = await fetch(url);
        if (!response.ok) {
            // throw new Error(`HTTP error! status: ${response.status}`);
            return null
        }
        const html = await response.text();

        
        
        // Load the HTML into cheerio
        const $ = load(html);


        // Select all script tags
        const scripts = $('script').toArray();

        console.log('f fasdf asdf asdfads fadsf sdf d fas dfa ', scripts.length)

        // Find the script containing the specific text
        const script = scripts.find(s => $(s).html()?.includes('/store/apps/developer'));

        if (!script) {
            // throw new Error('Script containing the specified text not found');
            return null
        }

        // Get the script content
        const scriptContent = $(script).html();

        if (!scriptContent) {
            // throw new Error('No content found in the selected script');
            return null
        }

        // Use regex to find the version string
        const versionStringRegex = /"[0-9]+\.[0-9]+\.[0-9.]+"/g;
        const matches = scriptContent.match(versionStringRegex);

        if (!matches || matches.length === 0) {
            throw new Error('Version string not found in the script content');
        }

        // Extract the first match and remove quotes
        const match = matches[0];
        const version = match.replace(/"/g, '');

        return version;
        } catch (error) {
            console.error('Error fetching HTML:', error);
            return null
        }
    }
        


export async function getServerSideProps() {
    try {

        const requests = [
            fetch(`https://itunes.apple.com/lookup?id=${versions[0].id}`).then(response => response.json()),
            fetch(`https://itunes.apple.com/lookup?id=${versions[1].id}`).then(response => response.json()),
            fetch(`https://itunes.apple.com/lookup?id=${versions[2].id}`).then(response => response.json()),
            getLatestGoogleAppVersion('cz').then(version => {
                if (version) {
                   return version;
                } else {
                    return 'fail'
                }}),
            getLatestGoogleAppVersion('sk').then(version => {
                if (version) {
                   return version;
                } else {
                    return 'fail'
                }}),
            getLatestGoogleAppVersion('ro').then(version => {
                if (version) {
                   return version;
                } else {
                    return 'fail'
                }}),

        ];
        
        const [data1, data2, data3, 
            data4, data5, data6
        ] = await Promise.all(requests);
        
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
    } catch (e) {
        console.error('Error in getServerSideProps:', e);
        return {
            props: {
                iosVersion: {
                    cz: null,
                    sk: null,
                    ro: null,
                },
                android: {
                    cz: null,
                    sk: null,
                    ro: null,
                },
            },
        };
    }
}
