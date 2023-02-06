const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1440,
        height: 1080,
    })
    await page.goto('https://brunch.co.kr/search');
    await page.click('input.txt_search');
    await page.keyboard.type('IT');
    await page.keyboard.press('Enter')
    await page.waitForNavigation(); // 로딩이 안되어있는데, scroll 해서 작동을 안한 것. navigation 업로드 될 때까지 기다린다.

    setInterval(async () => {
        // evaluate: page 안에서 명령을 내린다.
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
        })
    }, 1000);


    // setTimeout(async () => {
    //     clearInterval();
    //     console.log("done");
    //     // await browser.close();
    // }, 10000);

})();
