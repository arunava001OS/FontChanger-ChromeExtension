let font = "'Akaya Telivigala', cursive";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ font });
  console.log('Font is set to ', `font: ${font}`);
});