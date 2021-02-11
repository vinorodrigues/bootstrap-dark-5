# The Ancillary Guide to Dark Mode and Bootstrap 5
**A continuation of the v4 Dark Mode POC, but this time for v5**

> This is a follow up to [The Definitive Guide to Dark Mode and Bootstrap 4](http://vinorodrigues.github.io/bootstrap-dark) body of work,
> and pertains to [Bootstrap 5](https://getbootstrap.com) *([Github repo.](https://github.com/twbs/bootstrap))*.

> If you're after the same work for [Bootstrap 4](https://getbootstrap.com/docs/4.5/) please visit the [vinorodrigues/bootstrap-dark](https://github.com/vinorodrigues/bootstrap-dark) repo.


> <u style="text-decoration:none;color:red">***NOTE:***</u> This is a 'Work In Progress' and is specifically based on Bootstrap 5 - Beta 1 - https://github.com/twbs/bootstrap/tree/v5.0.0-beta2

> <u style="text-decoration:none;color:red">***NOTE:***</u> The recomendation is to ***not*** use this in a production environment.

> <u style="text-decoration:none;color:purple">***A note on Bootstrap core:***</u> I have tried to merge this project in to Boostrap core *(see [pull request #32936](https://github.com/twbs/bootstrap/pull/32936))*, but while that's beeing considered I will continue to work on this project.  If you wish this to be added to Bootstrap core then let the authors know by adding a comment to the [pull request](https://github.com/twbs/bootstrap/pull/32936).

## About

This code will make little sense if you don't read
[The Definitive Guide to Dark Mode and Bootstrap 4](http://vinorodrigues.github.io/bootstrap-dark) first.


## What do you get?

The code only compiles the [Method 1](https://github.com/vinorodrigues/bootstrap-dark/blob/master/README.md#method-1),
[Method 3](https://github.com/vinorodrigues/bootstrap-dark/blob/master/README.md#method-3) and
[Method 4](https://github.com/vinorodrigues/bootstrap-dark/blob/master/README.md#method-4) variants *(for Bootstrap 5)* of the topics
discussed in the original body of work.

i.e.:

| `bootstrap-night` | `bootstrap-nightshade` | `bootstrap-dark` |
|:---:|:---:|:---:|
| [Quick Start Guide](docs/bootstrap-night.md) | [Quick Start Guide](docs/bootstrap-nightshade.md) | [Quick Start Guide](docs/bootstrap-dark.md) |
| | [`darkmode.js` Reference](docs/darkmode.js.md) | |
| [See Example](https://vinorodrigues.github.io/bootstrap-dark-5/examples/cheatsheet-night.html) | [See Example](https://vinorodrigues.github.io/bootstrap-dark-5/examples/cheatsheet-nightshade.html) | [See Example](https://vinorodrigues.github.io/bootstrap-dark-5/examples/cheatsheet-dark.html) |

## The Proof Is in the Pudding

Test pages have been set up at [vinorodrigues.github.io/bootstrap-dark-5](https://vinorodrigues.github.io/bootstrap-dark-5/)


## Can you use this?

Yes.

> Licence is MIT.  *i.e. use as you whish as long as you credit the original authors and leave the copyright in situ.*

If you're a theme builder or want to use its principles in your own project you'll need to have
[Git](https://help.github.com/articles/set-up-git) and [Node](https://nodejs.org/) installed.

1. Fork or download the repository: `git clone https://github.com/vinorodrigues/bootstrap-dark-5.git`
2. Install Node dependencies: `npm install`  *(See note below.)*
3. Modify `_variables.scss` and `_variables-alt.scss` in the `scss` sub-folder.
4. Run `npm run build` to build your theme.
5. The compiled code will be in the `dist` folder.

> <u style="text-decoration:none;color:red">***NOTE:***</u> The build system is based on [NPM Scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts). Most of the build tools _(NPM modules)_ will need to be installed as *"global"* to ensure the scripts are executable from the command line.

```bash
npm i -g  autoprefixer  documentation browser-sync  clean-css-cli  cross-env  eslint  eslint-config-xo  eslint-plugin-import  eslint-plugin-unicorn  find-unused-sass-variables  imagemin-cli  nodemon  npm-run-all  postcss-cli  rtlcss  sass  stylelint  stylelint-config-twbs-bootstrap  svgo  terser typescript
```


### NPM

[![](https://img.shields.io/npm/v/bootstrap-dark-5)](http://npmjs.com/package/bootstrap-dark-5)

Developers can include the `scss` and `dist` folders into your own project with:

`npm install bootstrap-dark-5`


### CDN

[![](https://data.jsdelivr.com/v1/package/npm/bootstrap-dark-5/badge?style=rounded)](https://www.jsdelivr.com/package/npm/bootstrap-dark-5)

You can also hotlink the theme via CDN with [jsdelivr.com](https://www.jsdelivr.com).

You can access the theme CSS file from the GitHub release:

* **`bootstrap-dark`** - the @media `perfers-color-scheme` variant
  * Production / minified variant:
    * [`https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap-dark.min.css`](https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap-dark.min.css)
  * Development / Debug variant:
    * [`https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap-dark.css`](https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap-dark.css)
  * Also, read the [Quick Start Guide](docs/bootstrap-dark.md).

* **`bootstrap-nightshade`** - the `html.body` css class + JS library variant
  * Production / minified variants:
    * [`https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap-nightshade.min.css`](https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap-nightshade.min.css)
    * [`https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/js/darkmode.min.js`](https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/js/darkmode.min.js)
  * Development / Debug variants:
    * [`https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap-nightshade.css`](https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap-nightshade.css)
    * [`https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/js/darkmode.js`](https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/js/darkmode.js)
  * Also, read the [Quick Start Guide](docs/bootstrap-nightshade.md) and the [`darkmode.js` Reference](docs/darkmode.js.md).

* **`bootstrap-night`** - that dark theme only variant
  * Production / minified variant:
    * [`https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap-night.min.css`](https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css.bootstrap-night.min.css)
  * Development / Debug variant:
    * [`https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap-night.css`](https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap-night.css)
  * Also, read the [Quick Start Guide](docs/bootstrap-night.md).

* Source etc. are [here](https://cdn.jsdelivr.net/gh/vinorodrigues/bootstrap-dark-5/), but I recommend using [GitHub](https://github.com/vinorodrigues/bootstrap-dark-5).


## Further Reading

**Must reads** for all developers wanting to write for dark mode:

* web.dev, Thomas Steiner ([@tomayac](https://github.com/tomayac)), Jun 27, 2019 *(updated Jun 9, 2020)*, "[prefers-color-scheme: Hello darkness, my old friend](https://web.dev/prefers-color-scheme/)"

* web.dev, Thomas Steiner ([@tomayac](https://github.com/tomayac)), Apr 8, 2020 *(updated Jun 16, 2020)*, "[Improved dark mode default styling with the color-scheme CSS property and the corresponding meta tag](https://web.dev/color-scheme/)"

* CSS-TRICKS, Adhuham, Sep 9, 2020 "[A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)"

* My bit about [images and other considerations](https://vinorodrigues.github.io/bootstrap-dark/readme.html#but-thats-not-enough) in my "[.. Definitive Guide ..](http://vinorodrigues.github.io/bootstrap-dark)" piece.


## Feedback

If you have [useful feedback](https://alearningaday.blog/2020/08/04/useful-feedback/) drop me an "Issue" on the [GitHub Issues](https://github.com/vinorodrigues/bootstrap-dark-5/issues) page.


---

<p align="center" style="display:block;font-size:75%;text-align:center">&copy; 2021</p>
