chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.querySelectorAll("a").forEach(el => el.remove());
    }
  });
});