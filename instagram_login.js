const puppeteer = require('puppeteer');
const oldUrl = 'https://www.instagram.com/accounts/login/';
const username = ""; //Put your username here.
const password = ""; //Put your password here.
const timer = 6000; //Wait 6 seconds to check url after submit.

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

console.log("Username: " + username);
console.log("Password: " + password);

(async () => {
  	const browser = await puppeteer.launch();
  	const page = await browser.newPage();
  	await page.goto('https://www.instagram.com/accounts/login/');

  	try {
  		await page.click('button[class="aOOlW  bIiDR  "]');
  	}
  	catch(err)
  	{
  		console.log("No cookies to accept...");
  	}
  	await page.waitForSelector("[name='username']");
	await page.type("[name='username']", username);
	await page.type("[name='password']", password);
		  	
	await page.click('button[type="submit"]');
	 	 
 	//Wait 6 seconds to check the url
	await sleep(timer);
	if (oldUrl == page.url())
		console.log("Cannot login");	
	
	else
		console.log("Login....");
			
  	browser.close()	
})();
