
var darkmode = {
  isInDarkMode: false,
  hasGDPRConsent: false,
  __documentRoot: document.getElementsByTagName('html')[0],

  saveValue: function(name, value, days = 365) {
    if (this.hasGDPRConsent) {
      // use cookies
      var exp
      if (days) {
        var date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        exp = "; expires=" + date.toGMTString()
      } else {
        exp = ""
      }
      document.cookie = name + "=" + value + exp + "; path=/"
    } else {
      // use local storage
      localStorage.setItem(name, value)
    }
  },

  readValue: function(name) {
    if (this.hasGDPRConsent) {
      var n = name + "="
      var parts = document.cookie.split(";")

      for(var i=0; i < parts.length; i++) {
        var part = parts[i].trim()
        if (part.startsWith(n)) {
          // found it
          return part.substring(n.length)
        }
      }

      return null
    } else {
      return localStorage.getItem("lastname")
    }
  },

  eraseValue: function(name) {
    if (this.hasGDPRConsent) {
      this.saveValue(name, "", -1)
    } else {
      localStorage.removeItem(name)
    }
  },

  getSavedColorScheme: function() {
    var val = this.readValue("prefers-color-scheme")
    if (val) {
      return val
    } else {
      return null
    }
  },

  getPreferedColorScheme: function() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light"
    } else {
      return null
    }
  },

  updatePreferedColorScheme: function(e) {
    // TODO: WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP WIP
    console.log( JSON.stringify(e) )
  },

  setColorScheme: function(darkMode) {
    if (!darkMode) {
      // light
      this.__documentRoot.classList.remove("dark")
      this.__documentRoot.classList.add("light")
      this.isInDarkMode = false
      this.saveValue("prefers-color-scheme", "light")
    } else {
      // dark
      this.__documentRoot.classList.remove("light")
      this.__documentRoot.classList.add("dark")
      this.isInDarkMode = true
      this.saveValue("prefers-color-scheme", "dark")
    }
  },

  toggleDarkMode: function() {
    this.setColorScheme( !this.__documentRoot.classList.contains("dark") )
  }
}

function darkmodeOnDOMContentLoaded() {
  darkmode.hasGDPRConsent = true  // TODO: NB! Remove this!!

  var pref = darkmode.readValue("prefers-color-scheme")
  if (!pref) {
    // user has not set pref. so get from `<HTML>` tag incase developer has set pref.
    if (this.__documentRoot.classList.contains("dark")) {
      pref = "dark"
    } else if (this.__documentRoot.classList.contains("light")) {
      pref = "light"
    } else {
      // when all else fails, get pref. from OS/browser
      pref = darkmode.getPreferedColorScheme()
    }
  }
  darkmode.isInDarkMode = pref == "dark"

  // initalize the `HTML` tag
  darkmode.setColorScheme(darkmode.isInDarkMode)

  // update every time it changes
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener( 'change', darkmode.updatePreferedColorScheme )
  }
}

document.addEventListener("DOMContentLoaded", darkmodeOnDOMContentLoaded)
