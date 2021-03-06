# gulp-usemin
Replace references from non-optimized scripts, stylesheets and other assets to their optimized version within a set of HTML files

## Getting Started
This plugin requires Gulp `~3.8.10`

If you haven't used [Gulp](http://gulpjs.com/) before, be sure to check out the [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) guide, as it explains how to create a [Gulpfile](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) as well as install and use Gulp plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install gulp-usemin-html --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gulpfile with this line of JavaScript:

```js
var htmlusemin = require('gulp-usemin-html')
```

## The "htmlusemin" task

### Overview
In your project's Gulpfile, add a section.

```js
gulp.task('htmlusemin', function() {
    return gulp.src([basepath + '/source/**/*.html'])
        .pipe(usemin({
            js: {
                suffix: '-min',
                enable: true
            },
            css: {
                suffix: '.min',
                enable: true
            }
        }))
        .pipe(gulp.dest(basepath + '/build/'));
});
```

### Options

#### options.js
Type: `Object`
Default value: `{
                suffix: '.min',
                enable: true
            }`

#### options.css
Type: `Object`
Default value: `{
                suffix: '.min',
                enable: true
            }`


### Usage Examples

#### Replace the '.css' to '.min.css' and replace the '.js' to '.min.js' in HTML
In this example,replaces references from non-optimized scripts, stylesheets and other assets to their optimized version within a set of HTML files`

```js
gulp.task('htmlusemin', function() {
    return gulp.src([basepath + '/source/**/*.html'])
        .pipe(usemin({
            js: {
                suffix: '-min',
                enable: true
            },
            css: {
                suffix: '.min',
                enable: true
            }
        }))
        .pipe(gulp.dest(basepath + '/build/'));
});
```





## Release History
_(Nothing yet)_

