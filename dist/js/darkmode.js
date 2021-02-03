"use strict";
class DarkMode {
    constructor() {
        this.isInDarkMode = false;
        this.hasGDPRConsent = false;
        this.cookieExpiry = 365;
        this.documentRoot = document.getElementsByTagName("html")[0];
        document.addEventListener("DOMContentLoaded", function () {
            DarkMode.onDOMContentLoaded();
        });
    }
    saveValue(name, value, days = this.cookieExpiry) {
        if (this.hasGDPRConsent) {
            let exp;
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                exp = "; expires=" + date.toUTCString();
            }
            else {
                exp = "";
            }
            document.cookie = name + "=" + value + exp + "; SameSite=Strict; path=/";
        }
        else {
            localStorage.setItem(name, value);
        }
        return;
    }
    readValue(name) {
        if (this.hasGDPRConsent) {
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
        const val = this.readValue(DarkMode.DATA_NAME);
        if (val) {
            return val;
        }
        else {
            return "";
        }
    }
    getPreferedColorScheme() {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: " + DarkMode.DARK + ")").matches) {
            return DarkMode.DARK;
        }
        else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: " + DarkMode.LIGHT + ")").matches) {
            return DarkMode.LIGHT;
        }
        else {
            return "";
        }
    }
    setDarkMode(darkMode, doSave = true) {
        if (!darkMode) {
            this.documentRoot.classList.remove(DarkMode.DARK);
            this.documentRoot.classList.add(DarkMode.LIGHT);
            this.isInDarkMode = false;
            if (doSave)
                this.saveValue(DarkMode.DATA_NAME, DarkMode.LIGHT);
        }
        else {
            this.documentRoot.classList.remove(DarkMode.LIGHT);
            this.documentRoot.classList.add(DarkMode.DARK);
            this.isInDarkMode = true;
            if (doSave)
                this.saveValue(DarkMode.DATA_NAME, DarkMode.DARK);
        }
    }
    toggleDarkMode(doSave = true) {
        this.setDarkMode(!this.documentRoot.classList.contains(DarkMode.DARK), doSave);
    }
    resetDarkMode() {
        this.eraseValue(DarkMode.DATA_NAME);
        const darkMode = this.getPreferedColorScheme();
        if (darkMode) {
            this.setDarkMode(darkMode == DarkMode.DARK, false);
        }
        else {
            this.documentRoot.classList.remove(DarkMode.LIGHT);
            this.documentRoot.classList.remove(DarkMode.DARK);
        }
    }
    static updatePreferedColorSchemeEvent() {
        let darkMode = darkmode.getSavedColorScheme();
        if (!darkMode) {
            darkMode = darkmode.getPreferedColorScheme();
            if (darkMode)
                darkmode.setDarkMode(darkMode == DarkMode.DARK, false);
        }
    }
    static onDOMContentLoaded() {
        let pref = darkmode.readValue(DarkMode.DATA_NAME);
        if (!pref) {
            if (darkmode.documentRoot.classList.contains(DarkMode.DARK)) {
                pref = DarkMode.DARK;
            }
            else if (darkmode.documentRoot.classList.contains(DarkMode.LIGHT)) {
                pref = DarkMode.LIGHT;
            }
            else {
                pref = darkmode.getPreferedColorScheme();
            }
        }
        darkmode.isInDarkMode = pref == DarkMode.DARK;
        darkmode.setDarkMode(darkmode.isInDarkMode, false);
        if (window.matchMedia) {
            window.matchMedia("(prefers-color-scheme: " + DarkMode.DARK + ")").addEventListener("change", function () {
                DarkMode.updatePreferedColorSchemeEvent();
            });
        }
    }
}
DarkMode.DATA_NAME = "bs_prefers_color_scheme";
DarkMode.LIGHT = "light";
DarkMode.DARK = "dark";
const darkmode = new DarkMode();
//# sourceMappingURL=darkmode.js.map