# The Ancillary Guide to Dark Mode and Bootstrap 5
**A continuation of the v4 Dark Mode POC**

> This is a follow up to [The Definitive Guide to Dark Mode and Bootstrap 4](http://vinorodrigues.github.io/bootstrap-dark) body of work,
> and pertains to [Bootstrap 5](https://getbootstrap.com) *([Github repo.](https://github.com/twbs/bootstrap))*.

> If you're after the same work for [Bootstrap 4](https://getbootstrap.com/docs/4.5/) please visit the [vinorodrigues/bootstrap-dark](https://github.com/vinorodrigues/bootstrap-dark) repo.

## About

This code will make little sense if you don't read
[The Definitive Guide to Dark Mode and Bootstrap 4](http://vinorodrigues.github.io/bootstrap-dark) first.

## What do you get?

The code only compiles the [Method 1](https://github.com/vinorodrigues/bootstrap-dark/blob/master/README.md#method-1) and [Method 4](https://github.com/vinorodrigues/bootstrap-dark/blob/master/README.md#method-4) variants (for BS5) of the topics discussed in the original body of work.

i.e.:

* `bootstrap-night` *(done for now)*, _and;_
* `bootstrap-dark` *(not done **yet**!)*

## Can you use this?

Yes.


If you're a theme builder or want to use its principles in your own project you'll need to have [Git](https://help.github.com/articles/set-up-git) and [Node](https://nodejs.org/) installed.

1. Fork or download the repository: `git clone https://github.com/vinorodrigues/bootstrap-dark-5.git`
2. Install Node dependencies: `npm install`  *(See note below.)*
3. Modify `_variables.scss` and `_variables-alt.scss` in the `scss` sub-folder.
4. Run `npm run css` to build your theme.
5. The compiled code will be in the `dist` folder.

> **Note:** The build system is based on [NPM Scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts). Most of the build tools _(NPM modules)_ will need to be installed as *"global"* to ensure the scripts are executable from the command line.

```bash
npm install -g autoprefixer browser-sync clean-css-cli cross-env find-unused-sass-variables nodemon npm-run-all postcss postcss-cli rtlcss sass stylelint stylelint-config-twbs-bootstrap
```


### CDN

*(Comming soon...)*


### Feedback

If you have useful feedback drop me an "Issue" on the [GitHub Issues](https://github.com/vinorodrigues/bootstrap-dark-5/issues) page.


---

<p align="center" style="display: block; font-size: 75%; text-align: center;">&copy; 2021</p>
