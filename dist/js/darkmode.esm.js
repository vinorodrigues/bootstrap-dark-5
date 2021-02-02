/*!
 * Bootstrap-Dark-5 v0.1.0 (https://vinorodrigues.github.io/bootstrap-dark-5/)
 * Copyright 2021 Vino Rodrigues
 * Licensed under MIT (https://github.com/vinorodrigues/bootstrap-dark-5/blob/main/LICENSE.md)
 */

const DATA_NAME = "bs_prefers_color_scheme";
const LIGHT = "light";
const DARK = "dark";
var darkmode = {
  // public
  isInDarkMode: false,
  hasGDPRConsent: false,
  // private
  __documentRoot: document.getElementsByTagName("html")[0],
  saveValue: function (name, value, days = 365) {
    if (this.hasGDPRConsent) {
      // use cookies
      var exp;

      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        exp = "; expires=" + date.toGMTString();
      } else {
        exp = "";
      }

      document.cookie = name + "=" + value + exp + "; SameSite=Strict; path=/";
    } else {
      // use local storage
      localStorage.setItem(name, value);
    }
  },
  readValue: function (name) {
    if (this.hasGDPRConsent) {
      var n = name + "=";
      var parts = document.cookie.split(";");

      for (var i = 0; i < parts.length; i++) {
        var part = parts[i].trim();

        if (part.startsWith(n)) {
          // found it
          return part.substring(n.length);
        }
      }

      return null;
    } else {
      return localStorage.getItem(name);
    }
  },
  eraseValue: function (name) {
    if (this.hasGDPRConsent) {
      this.saveValue(name, "", -1);
    } else {
      localStorage.removeItem(name);
    }
  },
  getSavedColorScheme: function () {
    var val = this.readValue(DATA_NAME);

    if (val) {
      return val;
    } else {
      return null;
    }
  },
  getPreferedColorScheme: function () {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: " + DARK + ")").matches) {
      return DARK;
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: " + LIGHT + ")").matches) {
      return LIGHT;
    } else {
      return null;
    }
  },
  setDarkMode: function (darkMode, doSave = true) {
    if (!darkMode) {
      // light
      this.__documentRoot.classList.remove(DARK);

      this.__documentRoot.classList.add(LIGHT);

      this.isInDarkMode = false;
      if (doSave) this.saveValue(DATA_NAME, LIGHT);
    } else {
      // dark
      this.__documentRoot.classList.remove(LIGHT);

      this.__documentRoot.classList.add(DARK);

      this.isInDarkMode = true;
      if (doSave) this.saveValue(DATA_NAME, DARK);
    }
  },
  toggleDarkMode: function () {
    this.setDarkMode(!this.__documentRoot.classList.contains(DARK), true);
  },
  resetDarkMode: function () {
    this.eraseValue(DATA_NAME);
    var darkMode = this.getPreferedColorScheme();
    if (darkMode) this.setDarkMode(darkMode == DARK, false);
  }
};

function darkmodeUpdateEvent() {
  var darkMode = darkmode.getSavedColorScheme();

  if (!darkMode) {
    darkMode = darkmode.getPreferedColorScheme();
    if (darkMode) darkmode.setDarkMode(darkMode == DARK, false);
  }
}

function darkmodeOnDOMContentLoaded() {
  var pref = darkmode.readValue(DATA_NAME);

  if (!pref) {
    // user has not set pref. so get from `<HTML>` tag incase developer has set pref.
    if (darkmode.__documentRoot.classList.contains(DARK)) {
      pref = DARK;
    } else if (darkmode.__documentRoot.classList.contains(LIGHT)) {
      pref = LIGHT;
    } else {
      // when all else fails, get pref. from OS/browser
      pref = darkmode.getPreferedColorScheme();
    }
  }

  darkmode.isInDarkMode = pref == DARK; // initalize the `HTML` tag

  darkmode.setDarkMode(darkmode.isInDarkMode, false); // update every time it changes

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: " + DARK + ")").addEventListener("change", darkmodeUpdateEvent);
  }
}

document.addEventListener("DOMContentLoaded", darkmodeOnDOMContentLoaded);
//# sourceMappingURL=darkmode.esm.js.map
