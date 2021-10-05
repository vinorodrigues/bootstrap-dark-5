# Bootstrap-Dark Quick Start

A basic HTML file should look like this:

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

    <!-- Replace the Bootstrap CSS with the
         Bootstrap-Dark Variant CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.1.1/dist/css/bootstrap-dark.min.css" rel="stylesheet">

    <title>Hello, world!</title>

    <!-- Optional Meta Theme Color is also supported on Safari and Chrome -->
    <meta name="theme-color" content="#111111" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#eeeeee" media="(prefers-color-scheme: dark)">
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

That's all.  The page will automatically transition to Dark Mode when the users sets their OS *(or Firefox theme)* to Dark Mode.

Refer to the [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/getting-started/introduction/#starter-template) for more help.
