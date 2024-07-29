import type { NextPage } from 'next';
import puppeteer from 'puppeteer';

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
    async function getLatestGoogleAppVersion(appId: string): Promise<string> {
        const url = `https://play.google.com/store/apps/details?id=net.cme.voyo.${appId}&hl=sk&pli=1`;
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
      
        try {
          await page.goto(url, {
            waitUntil: 'networkidle2',
          });
    
          // click button which opens modal with application's version    
          await page.click('button[class="VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ QDwDD mN1ivc VxpoF"]');
    
        //   Debugging: Take a screenshot to verify the page loaded correctly
        //   await page.screenshot({ path: 'page.png' });
    
          // Wait for the modal to load and display the version information
          await page.waitForSelector('div.reAt0', { visible: true });
    
          const version = await page.evaluate(() => {
            const versionElement = document.querySelector('div.reAt0');
            return versionElement ? versionElement.textContent : 'Version not found';
          });
      
          await browser.close();
      
          if (!version) {
            throw new Error('Version element not found');
          }
      
          return version;
        } catch (error) {
          await browser.close();
          console.error('Error fetching the latest version:', error);
          throw error;
        }
      
      }

    const requests = [
        fetch(`https://itunes.apple.com/lookup?id=${versions[0].id}`).then(response => response.json()),
        fetch(`https://itunes.apple.com/lookup?id=${versions[1].id}`).then(response => response.json()),
        fetch(`https://itunes.apple.com/lookup?id=${versions[2].id}`).then(response => response.json()),
        getLatestGoogleAppVersion('cz'),
        getLatestGoogleAppVersion('sk'),
        getLatestGoogleAppVersion('ro'),
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
}
