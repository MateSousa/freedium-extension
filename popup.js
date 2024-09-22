document
  .getElementById("redirectButton")
  .addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var currentTab = tabs[0];
      var oldUrl = encodeURIComponent(currentTab.url);
      var newUrl = "https://www.freedium.cfd/" + oldUrl;
      chrome.tabs.create({ url: newUrl });
    });
  });
