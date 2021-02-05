"use strict";
class DarkMode {
    constructor() {
        this._hasGDPRConsent = false;
        this.cookieExpiry = 365;
        this._dataSelector = "";
        document.addEventListener("DOMContentLoaded", function () {
            DarkMode.onDOMContentLoaded();
        });
    }
    get inDarkMode() {
        return DarkMode.getColorScheme() == DarkMode.VALUE_DARK;
    }
    set inDarkMode(val) {
        this.setDarkMode(val, false);
    }
    get hasGDPRConsent() {
        return this._hasGDPRConsent;
    }
    set hasGDPRConsent(val) {
        this._hasGDPRConsent = val;
        if (val) {
            const prior = DarkMode.readCookie(DarkMode.DATA_KEY);
            if (prior) {
                DarkMode.saveCookie(DarkMode.DATA_KEY, "", -1);
                localStorage.setItem(DarkMode.DATA_KEY, prior);
            }
        }
        else {
            const prior = localStorage.getItem(DarkMode.DATA_KEY);
            if (prior) {
                localStorage.removeItem(DarkMode.DATA_KEY);
                DarkMode.saveCookie(DarkMode.DATA_KEY, prior);
            }
        }
    }
    get dataSelector() {
        return this._dataSelector;
    }
    set dataSelector(val) {
        this._dataSelector = val;
    }
    get documentRoot() {
        return document.getElementsByTagName("html")[0];
    }
    static saveCookie(name, value = "", days = 365) {
        let exp = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            exp = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + exp + "; SameSite=Strict; path=/";
    }
    saveValue(name, value, days = this.cookieExpiry) {
        if (this.hasGDPRConsent) {
            DarkMode.saveCookie(name, value, days);
        }
        else {
            localStorage.setItem(name, value);
        }
        return;
    }
    static readCookie(name) {
        const n = name + "=";
        const parts = document.cookie.split(";");
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i].trim();
            if (part.startsWith(n)) {
                return part.substring(n.length);
            }
        }
        return "";
    }
    readValue(name) {
        if (this.hasGDPRConsent) {
            return DarkMode.readCookie(name);
        }
        else {
            const ret = localStorage.getItem(name);
            return ret ? ret : "";
        }
    }
    eraseValue(name) {
        if (this.hasGDPRConsent) {
            this.saveValue(name, "", -1);
        }
        else {
            localStorage.removeItem(name);
        }
    }
    getSavedColorScheme() {
        const val = this.readValue(DarkMode.DATA_KEY);
        if (val) {
            return val;
        }
        else {
            return "";
        }
    }
    getPreferedColorScheme() {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return DarkMode.VALUE_DARK;
        }
        else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
            return DarkMode.VALUE_LIGHT;
        }
        else {
            return "";
        }
    }
    setDarkMode(darkMode, doSave = true) {
        if (!this._dataSelector) {
            if (!darkMode) {
                this.documentRoot.classList.remove(DarkMode.CLASS_NAME_DARK);
                this.documentRoot.classList.add(DarkMode.CLASS_NAME_LIGHT);
            }
            else {
                this.documentRoot.classList.remove(DarkMode.CLASS_NAME_LIGHT);
                this.documentRoot.classList.add(DarkMode.CLASS_NAME_DARK);
            }
        }
        else {
            this.documentRoot.setAttribute(this._dataSelector, darkMode ? DarkMode.VALUE_DARK : DarkMode.VALUE_LIGHT);
        }
        if (doSave)
            this.saveValue(DarkMode.DATA_KEY, darkMode ? DarkMode.VALUE_DARK : DarkMode.VALUE_LIGHT);
    }
    toggleDarkMode(doSave = true) {
        let darkMode;
        if (!this._dataSelector) {
            console.log('Y[' + this._dataSelector + ']');
            darkMode = this.documentRoot.classList.contains(DarkMode.CLASS_NAME_DARK);
        }
        else {
            console.log('X[' + this._dataSelector + ']');
            darkMode = this.documentRoot.getAttribute(this._dataSelector) == DarkMode.VALUE_DARK;
        }
        this.setDarkMode(!darkMode, doSave);
    }
    resetDarkMode() {
        this.eraseValue(DarkMode.DATA_KEY);
        const dm = this.getPreferedColorScheme();
        if (dm) {
            this.setDarkMode(dm == DarkMode.VALUE_DARK, false);
        }
        else {
            if (!this._dataSelector) {
                this.documentRoot.classList.remove(DarkMode.CLASS_NAME_LIGHT);
                this.documentRoot.classList.remove(DarkMode.CLASS_NAME_DARK);
            }
            else {
                this.documentRoot.removeAttribute(this._dataSelector);
            }
        }
    }
    static getColorScheme() {
        if (!darkmode.dataSelector) {
            if (darkmode.documentRoot.classList.contains(DarkMode.CLASS_NAME_DARK)) {
                return DarkMode.VALUE_DARK;
            }
            else if (darkmode.documentRoot.classList.contains(DarkMode.CLASS_NAME_LIGHT)) {
                return DarkMode.VALUE_LIGHT;
            }
            else {
                return "";
            }
        }
        else {
            const data = darkmode.documentRoot.getAttribute(darkmode.dataSelector);
            if ((data == DarkMode.VALUE_DARK) || (data == DarkMode.VALUE_LIGHT)) {
                return data;
            }
            else {
                return "";
            }
        }
    }
    static updatePreferedColorSchemeEvent() {
        let dm = darkmode.getSavedColorScheme();
        if (!dm) {
            dm = darkmode.getPreferedColorScheme();
            if (dm)
                darkmode.setDarkMode(dm == DarkMode.VALUE_DARK, false);
        }
    }
    static onDOMContentLoaded() {
        let pref = darkmode.readValue(DarkMode.DATA_KEY);
        if (!pref) {
            pref = DarkMode.getColorScheme();
            if (!pref) {
                pref = darkmode.getPreferedColorScheme();
            }
        }
        const dm = (pref == DarkMode.VALUE_DARK);
        darkmode.setDarkMode(dm, false);
        if (window.matchMedia) {
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
                DarkMode.updatePreferedColorSchemeEvent();
            });
        }
    }
}
DarkMode.DATA_KEY = "bs.prefers-color-scheme";
DarkMode.VALUE_LIGHT = "light";
DarkMode.VALUE_DARK = "dark";
DarkMode.CLASS_NAME_LIGHT = "light";
DarkMode.CLASS_NAME_DARK = "dark";
const darkmode = new DarkMode();
//# sourceMappingURL=darkmode.js.map