# The Ancillary Guide to Dark Mode and Bootstrap 5
**A continuation of the v4 Dark Mode POC, but this time for v5**

> This is a follow up to [The Definitive Guide to Dark Mode and Bootstrap 4](http://vinorodrigues.github.io/bootstrap-dark) body of work,
> and pertains to [Bootstrap 5](https://getbootstrap.com) *([Github repo.](https://github.com/twbs/bootstrap))*.

> If you're after the same work for [Bootstrap 4](https://getbootstrap.com/docs/4.5/) please visit the [vinorodrigues/bootstrap-dark](https://github.com/vinorodrigues/bootstrap-dark) repo.


> <u style="text-decoration:none;color:red">***NOTE:***</u> This is a 'Work In Progress' and is specifically based on Bootstrap 5 - Beta 1 - https://github.com/twbs/bootstrap/tree/v5.0.0-beta1

> <u style="text-decoration:none;color:red">***NOTE:***</u> The recomendation is to ***not*** use this in a production environment.

## About

This code will make little sense if you don't read
[The Definitive Guide to Dark Mode and Bootstrap 4](http://vinorodrigues.github.io/bootstrap-dark) first.


## What do you get?

The code only compiles the [Method 1](https://github.com/vinorodrigues/bootstrap-dark/blob/master/README.md#method-1) and [Method 4](https://github.com/vinorodrigues/bootstrap-dark/blob/master/README.md#method-4) variants (for BS5) of the topics discussed in the original body of work.

i.e.:

* `bootstrap-night`, _and;_
* `bootstrap-dark`.


## The Proof Is in the Pudding

Test pages have been set up at [vinorodrigues.github.io/bootstrap-dark-5](https://vinorodrigues.github.io/bootstrap-dark-5/)


## Can you use this?

Yes.

> Licence is MIT.  *i.e. use as you whish as long as you credit the original authors and leave the copyright in situ.*

If you're a theme builder or want to use its principles in your own project you'll need to have [Git](https://help.github.com/articles/set-up-git) and [Node](https://nodejs.org/) installed.

1. Fork or download the repository: `git clone https://github.com/vinorodrigues/bootstrap-dark-5.git`
2. Install Node dependencies: `npm install`  *(See note below.)*
3. Modify `_variables.scss` and `_variables-alt.scss` in the `scss` sub-folder.
4. Run `npm run build` to build your theme.
5. The compiled code will be in the `dist` folder.

> <u style="text-decoration:none;color:red">***NOTE:***</u> The build system is based on [NPM Scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts). Most of the build tools _(NPM modules)_ will need to be installed as *"global"* to ensure the scripts are executable from the command line.

```bash
npm install -g autoprefixer browser-sync clean-css-cli cross-env find-unused-sass-variables nodemon npm-run-all postcss postcss-cli rtlcss sass stylelint stylelint-config-twbs-bootstrap
```


### NPM

[![](https://img.shields.io/npm/v/bootstrap-dark-5)](http://npmjs.com/package/bootstrap-dark-5)

Developers can include the `scss` and `dist` folders into your own project with:

`npm install bootstrap-dark-5`


### CDN

[![](https://data.jsdelivr.com/v1/package/npm/bootstrap-dark-5/badge?style=rounded)](https://www.jsdelivr.com/package/npm/bootstrap-dark-5)

You can also hotlink the theme via CDN with [jsdelivr.com](https://www.jsdelivr.com).

You can access the theme CSS file from the GitHub release:

* [`https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.0/dist/bootstrap-dark.min.css`](https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.0/dist/bootstrap-dark.min.css)
* [`https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.0/dist/bootstrap-dark.css`](https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.0/dist/bootstrap-dark.css)
* [`https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.0/dist/bootstrap-night.min.css`](https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.0/dist/bootstrap-night.min.css)
* [`https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.0/dist/bootstrap-night.css`](https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.0/dist/bootstrap-night.css)
* Source etc. are [here](https://cdn.jsdelivr.net/gh/vinorodrigues/bootstrap-dark-5/), but I recommend using [GitHub](https://github.com/vinorodrigues/bootstrap-dark-5).


### Feedback

If you have useful feedback drop me an "Issue" on the [GitHub Issues](https://github.com/vinorodrigues/bootstrap-dark-5/issues) page.

> During the WIP period I'll be open to feedback on my Slack channel:  [tecsmith -> bootstrap-dark](https://tecsmith.slack.com/messages/boostrap-dark/)


---

<p align="center" style="display:block;font-size:75%;text-align:center">&copy; 2021</p>
