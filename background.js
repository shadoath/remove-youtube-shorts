chrome.webNavigation.onHistoryStateUpdated.addListener(
  function (details) {
    if (details.url.startsWith('https://www.youtube.com/shorts/')) {
      chrome.tabs.update(details.tabId, { url: 'https://www.youtube.com/' })
    }
  },
  {
    url: [
      {
        hostSuffix: 'youtube.com',
      },
    ],
  }
)
