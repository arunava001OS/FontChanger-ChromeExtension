document.getElementById('changeFont').addEventListener("click", async () => {
  console.log("button clicked")
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageFont, // Magic here
  });
});

function setPageFont() {
  chrome.storage.sync.get("font", ({ font }) => {
    //import header files
    link1 = document.createElement("link");
    link1.rel = "preconnect";
    link1.href = "https://fonts.gstatic.com";
    link2 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href =
      'https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap"';

    document.getElementsByTagName("head")[0].appendChild(link1);
    document.getElementsByTagName("head")[0].appendChild(link2);

    document.body.style.fontFamily = font;
  });
}
