# grunt-usemin-light [![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

> Replaces blocks of asset references in HTML files.

## DEPRECATED

> Use [grunt-preprocess](https://github.com/jsoverson/grunt-preprocess) instead.

### Migrating to grunt-preprocess

If your original code was

```html
<!-- build:js js/app.js -->
<script src="js/app.js"></script>
<script src="js/controllers/thing-controller.js"></script>
<script src="js/models/thing-model.js"></script>
<script src="js/views/thing-view.js"></script>
<!-- endbuild -->
```

it should now be

```html
<!-- @if true !>
<script src="js/app.js"></script>
<!-- @endif -->
<!-- @exclude -->
<script src="js/app.js"></script>
<script src="js/controllers/thing-controller.js"></script>
<script src="js/models/thing-model.js"></script>
<script src="js/views/thing-view.js"></script>
<!-- @endexclude -->
```

## Getting Started
If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install grunt-usemin-light --save-dev
```

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md

## Workflow

Unlike grunt-usemin, grunt-usemin-light has only one build step. This step is configured in two places.

First, add instructions to your html files:

```html
<!-- build:<type> <output> -->
... HTML Markup, list of script / link tags.
<!-- endbuild -->
```

**type**: either `js` or `css`
**output**: the file that should be loaded in place of this block

An example of this in complete form can be seen below:

```html
<!-- build:js js/app.js -->
<script src="js/app.js"></script>
<script src="js/controllers/thing-controller.js"></script>
<script src="js/models/thing-model.js"></script>
<script src="js/views/thing-view.js"></script>
<!-- endbuild -->
```

which  will result in

```html
<script src="js/app.js"></script>
```

Note: only the HTML file is changed. It's up to you to configure the tasks that should create the final `app.js`.

### Options

#### html
Type: 'array of strings'
Default: nil

Used to limit the directories that will be searched for html files.

## Acknowledgements

This plugins was inspired by grunt-usemin and borrows some of its code. At the time, grunt-usemin was just a little bit too opinionated for the author's needs.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/ianwremmel/grunt-usemin-light/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

