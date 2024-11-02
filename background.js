const distractiveWebsites = [
    'facebook.com',
    'twitter.com',
    'instagram.com',
    'youtube.com',
    'tiktok.com',
    'reddit.com',
    'pinterest.com',
    'netflix.com',
    'twitch.tv',
    'snapchat.com',
    'whatsapp.com',
    'quora.com',
    'vk.com',
    '9gag.com',
    'dailymotion.com',
    'buzzfeed.com',
    'foursquares.com',
    'gaming.com',
    'gamepedia.com',
    'gameforge.com',
    'gamespot.com',
    'roblox.com',
    'fortnite.com',
    'clashofclans.com',
    'battle.net',
    'steamcommunity.com',
    'vimeo.com',
    'bbc.com',
    'hulu.com',
    'yelp.com',
    'fiverr.com',   
    'upwork.com',
    'freelancer.com',
    'crunchyroll.com',
    'rottentomatoes.com',
    'theguardian.com',
    'bloomberg.com',
    'cnbc.com',
    'forbes.com',
    'eonline.com',
    'entertainmentweekly.com',
    'people.com',
    'newyorker.com',
    'ign.com',
    'mashable.com',
    'arstechnica.com',
    'techcrunch.com',
    'gadget360.com',
    'wired.com',
    'dpreview.com',
    'petapixel.com',
    'foodnetwork.com',
    'allrecipes.com',
    'epicurious.com',
    'tasteofhome.com',
    'food.com',
    'myrecipes.com',
    'delish.com',
    'recipe.com',
    'thespruceeats.com',
    'kitchenstories.io',
    'bbcgoodfood.com',
    'npr.org',
    'livejournal.com',
    'blogspot.com',
    'tumblr.com',
    'medium.com',
    'deviantart.com',
    'problogger.com',
    'patreon.com',
    'substack.com',
    'quizlet.com',
    'kahoot.com',
    'insider.com',
    'imdb.com',
    'monkeytype.com',
    'youtube.com',
    'chess.com',
    'pleasedontblockchess.com',
    'superhardalgebraproblems.com',
    'netflix.com'
];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentUrl = tabs[0].url;
            if (distractiveWebsites.some(site => currentUrl.includes(site))) {
                openKSISTab();
            }
        });
    }
});

  function openKSISTab() {
    chrome.tabs.create({ url: "https://www.youtube.com/watch?v=At8v_Yc044Y" }, () => {
      setTimeout(openKSISTab, 5000); 
    });
  }