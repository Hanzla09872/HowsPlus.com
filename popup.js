document.getElementById('openSupportSite').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://howsplus.com' });
});
