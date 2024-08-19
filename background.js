chrome.action.onClicked.addListener((tab) => {
  const url = tab.url;
  const twelveFtUrl= `https://12ft.io/${url}`;
  chrome.tabs.create({ url: twelveFtUrl });
});