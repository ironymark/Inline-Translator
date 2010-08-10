inlinetranslator.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ inlinetranslator.showFirefoxContextMenu(e); }, false);
};

inlinetranslator.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-inlinetranslator").hidden = gContextMenu.onImage;
};

window.addEventListener("load", inlinetranslator.onFirefoxLoad, false);
