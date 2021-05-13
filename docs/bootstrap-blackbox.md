# Bootstrap-Blackbox Quick Start

A basic HTML file should look like this:

```html
<!doctype html>
<html lang="en" data-bs-color-scheme>
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- The page supports both dark and light color schemes,
         and the page author prefers / default is light. -->
    <meta name="color-scheme" content="light dark">

    <!-- Replace the Bootstrap CSS with the
         Bootstrap-Dark Variant CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.0.1/dist/css/bootstrap-blackbox.min.css" rel="stylesheet">

    <title>Hello, world!</title>
  </head>
  <body>
    <!-- ////////////// -->
    <!-- Your HTML here -->
    <!-- \\\\\\\\\\\\\\ -->

    <!-- Optional Bootstrap JavaScript -->
    <script src="location/of/the/bootstrap.js/here"></script>

    <!-- Required DarkMode JavaScript
         Also requires the `data-bs-color-scheme` attribute in either the HTML
         or the BODY tag -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.0.1/dist/js/darkmode.min.js"></script>
  </body>
</html>
```

That's all.  The page will automatically transition to Dark Mode when the users sets their OS to Dark Mode.

> This variant is essentially the same as the nightshade variant, but instead of using a HTML tag class, it uses a HTML tag data attribute; `data-bs-color-scheme`.

Refer to the [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/getting-started/introduction/#starter-template) for more help.

***

If you wish to add a Dark Mode Toggle button, simply add the following:

```html
    <script>
      document.querySelector("#your-darkmode-button-id").onclick = function(e){
        darkmode.toggleDarkMode();
      }
    </script>
```

Refer to the [`darkmode.js` Reference](darkmode.js.md) for more on the `darkmode` JavaScript object.
