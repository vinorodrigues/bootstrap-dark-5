# Bootstrap-Night Quick Start

A basic HTML file should look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- The page supports only a dark color schemes -->
    <meta name="color-scheme" content="dark">

    <!-- Replace the Bootstrap CSS with the
         Bootstrap-Dark Variant CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap-night.min.css" rel="stylesheet">

    <title>Hello, world!</title>
  </head>
  <body>
    <!-- ////////////// -->
    <!-- Your HTML here -->
    <!-- \\\\\\\\\\\\\\ -->

    <!-- Optional Bootstrap JavaScript -->
    <script src="location/of/the/bootstrap.js/here"></script>
  </body>
</html>
```

Refer to the [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/getting-started/introduction/#starter-template) for more help.

***

The theme can also be used in conjunction with the original Bootstrap variant to provide a dark mode / light mode switch based on the user's OS dark mode setting.

This HTML file could look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- The page supports both dark and light color schemes,
         and the page author prefers / default is light. -->
    <meta name="color-scheme" content="light dark">

    <!-- If `prefers-color-scheme` is not supported, fall back to light mode.
         In this case, inject the `light` CSS before the others, with
         no media filter so that it will be downloaded with highest priority. -->
    <script>
      if (window.matchMedia("(prefers-color-scheme: dark)").media === "not all") {
        document.documentElement.style.display = "none";
        document.head.insertAdjacentHTML(
          "beforeend",
          "<link id=\"css\" rel=\"stylesheet\" href=\"../dist/css/bootstrap.css\" onload=\"document.documentElement.style.display = ''\">"
        );
      }
    </script>
    <!-- Load the alternate CSS first ...
         in this case the Bootstrap-Dark Variant CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap-night.min.css" rel="stylesheet" media="(prefers-color-scheme: dark)">
    <!-- and then the primary CSS last ...
         in this case the (original) Bootstrap Variant CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-dark-5@0.1/dist/css/bootstrap.min.css" rel="stylesheet" media="(prefers-color-scheme: light)">

    <title>Hello, world!</title>
  </head>
  <body>
    <!-- ////////////// -->
    <!-- Your HTML here -->
    <!-- \\\\\\\\\\\\\\ -->

    <!-- Optional Bootstrap JavaScript -->
    <script src="location/of/the/bootstrap.js/here"></script>
  </body>
</html>
```

Refer to the Thomas Steiner's ([@tomayac](https://github.com/tomayac)) blog entry "[prefers-color-scheme: Hello darkness, my old friend](https://web.dev/prefers-color-scheme/)" for an explanation on this.
