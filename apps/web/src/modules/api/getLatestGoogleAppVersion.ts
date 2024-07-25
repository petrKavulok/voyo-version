	import puppeteer from 'puppeteer';
	import chromium from 'chrome-aws-lambda'

	// export async function getLatestGoogleAppVersion(appId: string): Promise<string> {
	// 	const url = `https://play.google.com/store/apps/details?id=net.cme.voyo.${appId}&hl=sk&pli=1`;
	// 	const browser = await puppeteer.launch();
	// 	const page = await browser.newPage();

	export default async function getLatestGoogleAppVersion(req: any, res: any) {
	const appId = req.query.appId || 'net.cme.voyo.cz'; // Replace with your app ID
	const url = `https://play.google.com/store/apps/details?id=${appId}&hl=sk&pli=1`;


	let browser;
	try {
		browser = await puppeteer.launch({
			args: chromium.args,
			defaultViewport: chromium.defaultViewport,
			executablePath: await chromium.executablePath,
			headless: chromium.headless,
		});
		const page = await browser.newPage();
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

		res.status(200).json({ version });
	} catch (error) {
		console.error('Error fetching the latest version:', error);
		res.status(500).json({ error: 'Failed to fetch the latest version' });
	} finally {
		if (browser) {
		await browser.close();
		}
	}

	}

