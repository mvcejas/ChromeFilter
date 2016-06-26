var chromefilter = {}, 
    domains= [
        'dailymotion.com/stats',
        'dailymotion.com/settings'
    ];

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chromefilter.check(tabId,tab.url);
});

chrome.tabs.onCreated.addListener(function(tab) {
    console.log(tab);
});


chromefilter.check = function(tabId,tabUrl) {
    domains.forEach(function(url) {
        if(tabUrl.match(url)) {
            chrome.tabs.update(tabId,{"url":"https://www.dailymotion.com/upload"});
        }
    });
};
