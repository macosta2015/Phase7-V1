//extensionleftANDright
const puppeteer = require('puppeteer');

async function extensionleftANDright(page, selector) {
    console.log("extensionleftANDright");
    console.log("Waiting for the element to be available in the DOM...");
    await page.waitForSelector(selector, { timeout: 10000 });

    console.log("Trying to select the tab list item...");
    const tabListItem = await page.$(selector);

    if (tabListItem) {
        console.log('Tab list item selected successfully!');

        // Example: Extract text content from within the tab-list-item
        const tabText = await page.evaluate(el => el.querySelector('.os-tab-name').textContent.trim(), tabListItem);
        console.log('Tab text content:', tabText);

        // Example: Click on the tab if needed
        await tabListItem.click();
        console.log('Tab item clicked successfully!');
    } else {
        console.log('Tab list item not found.');
    }
}

module.exports = extensionleftANDright;

