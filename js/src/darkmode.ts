/**
 * This is the `darkmode.js` module.
 */

const DATA_NAME = "bs_prefers_color_scheme"
const LIGHT = "light"
const DARK = "dark"

class DarkMode {
  /**
   * Used to store the current state, `true` when in dark mode, `false` when in light mode
   * @type {bool}
   */
  isInDarkMode = false;

  /**
   * Used to store GDPR Consent
   * TODO: Explain this
   */
  hasGDPRConsent = false;

  /**
   * Stores value of documentRoot, i.e. `<html>` tag
   */
  documentRoot: HTMLHtmlElement;

  constructor() {
    // this.isInDarkMode = false
    // this.hasGDPRConsent = false
    this.documentRoot = document.getElementsByTagName("html")[0]
  }

  /**
   * Does ...
   * @param {string} name
   * @param {string} value
   * @param {number} days
   */
  saveValue(name: string, value: string, days = 365): void {
    if (this.hasGDPRConsent) {
      // use cookies
      let exp
      if (days) {
        const date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        exp = "; expires=" + date.toUTCString()
      } else {
        exp = ""
      }
      document.cookie = name + "=" + value + exp + "; SameSite=Strict; path=/"
    } else {
      // use local storage
      localStorage.setItem(name, value)
    }
    return
  }

  /**
   * Does ...
   * @param {string} name
   */
  readValue(name: string): string {
    if (this.hasGDPRConsent) {
      const n = name + "="
      const parts = document.cookie.split(";")

      for(let i=0; i < parts.length; i++) {
        const part = parts[i].trim()
        if (part.startsWith(n)) {
          // found it
          return part.substring(n.length)
        }
      }

      return ""
    } else {
      const ret = localStorage.getItem(name)
      return ret ? ret : ""
    }
  }

  /**
   * Does ...
   * @param {string} name
   */
  eraseValue(name: string): void {
    if (this.hasGDPRConsent) {
      this.saveValue(name, "", -1)
    } else {
      localStorage.removeItem(name)
    }
  }

  /**
   * Does ...
   */
  getSavedColorScheme(): string {
    const val = this.readValue(DATA_NAME)
    if (val) {
      return val
    } else {
      return ""
    }
  }

  /**
   * Does ...
   */
  getPreferedColorScheme(): string {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: "+DARK+")").matches) {
      return DARK
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: "+LIGHT+")").matches) {
      return LIGHT
    } else {
      return ""
    }
  }

  /**
   * Does ...
   * @param {bool} darkMode
   * @param {bool} doSave
   */
  setDarkMode(darkMode: boolean, doSave = true): void {
    if (!darkMode) {
      // light
      this.documentRoot.classList.remove(DARK)
      this.documentRoot.classList.add(LIGHT)
      this.isInDarkMode = false
      if (doSave) this.saveValue(DATA_NAME, LIGHT)
    } else {
      // dark
      this.documentRoot.classList.remove(LIGHT)
      this.documentRoot.classList.add(DARK)
      this.isInDarkMode = true
      if (doSave) this.saveValue(DATA_NAME, DARK)
    }
  }

  /**
   * Does ...
   */
  toggleDarkMode(): void {
    this.setDarkMode( !this.documentRoot.classList.contains(DARK), true )
  }

  /**
   * Does ...
   */
  resetDarkMode(): void {
    this.eraseValue(DATA_NAME)
    const darkMode = this.getPreferedColorScheme()
    if (darkMode) this.setDarkMode( darkMode == DARK, false )
  }
}

/**
 * Instance
 */
const darkmode = new DarkMode()

/**
 * Does ...
 */
function darkmodeUpdateEvent() {
  let darkMode = darkmode.getSavedColorScheme()
  if (!darkMode) {
    darkMode = darkmode.getPreferedColorScheme()
    if (darkMode) darkmode.setDarkMode( darkMode == DARK, false )
  }
}

/**
 * Does ...
 */
function darkmodeOnDOMContentLoaded() {
  let pref = darkmode.readValue(DATA_NAME)
  if (!pref) {
    // user has not set pref. so get from `<HTML>` tag incase developer has set pref.
    if (darkmode.documentRoot.classList.contains(DARK)) {
      pref = DARK
    } else if (darkmode.documentRoot.classList.contains(LIGHT)) {
      pref = LIGHT
    } else {
      // when all else fails, get pref. from OS/browser
      pref = darkmode.getPreferedColorScheme()
    }
  }
  darkmode.isInDarkMode = pref == DARK

  // initalize the `HTML` tag
  darkmode.setDarkMode(darkmode.isInDarkMode, false)

  // update every time it changes
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: "+DARK+")").addEventListener( "change", darkmodeUpdateEvent )
  }
}

document.addEventListener("DOMContentLoaded", darkmodeOnDOMContentLoaded)
