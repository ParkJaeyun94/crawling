const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

// 하나의 페이지 안에 있는 하이퍼링크를 수집하고 재검색하는 함수
// const crawling = async (href) => {
//     const browser = await puppeteer.launch({
//         headless: true // 브라우저가 열려서 유저에게 보이도록 해줌.
//     });
//
//     const page = await browser.newPage();
//     await page.setViewport({
//         width: 1440,
//         height: 1080,
//     })
//     await page.goto(href);
//     await page.waitForTimeout(3000);
//
//     const html = await page.content();
//     const $ = cheerio.load(html);
//     let hrefArray = [];
//     $("a").each((idx, el) => {
//         const href = $(el).attr('href');
//         hrefArray.push(href)
//     });
//     await browser.close();
//     hrefArray.forEach((item)=>{
//         crawling(item);
//     })
// };
//
// crawling('https://www.tistory.com/category/life').then(()=>{});


(async () => {
    const browser = await puppeteer.launch({
        headless: true // 브라우저가 열려서 유저에게 보이도록 해줌.
    });

    const page = await browser.newPage();
    await page.setViewport({
        width: 1440,
        height: 1080,

    })
    await page.goto('https://www.tistory.com/category/life');
    await page.waitForTimeout(3000);

    const html = await page.content();
    const $ = cheerio.load(html);
    let hrefArray = [];
    $("ul.list_tistory > li > a").each((idx, el) => {
        const href = $(el).attr('href');
        const title = $(el).find('.inner_desc_tit').text();
        hrefArray.push({ title, href })
    });
    console.log(hrefArray)
})();
// 즉시 실행 함수 IIFE (()=>{})();
