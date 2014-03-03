# GruntWatcher for an ASP.NET MVC project#

Example of using Grunt and grunt-contrib-water to automatically update a web page when an MVC *.cshtml, *.css, *.js files change.

This allows you to keep multiple browsers open, make a change to a file (and save it), and see the results in multiple browsers without having to press refresh in each browser.

More complete details can be found [here](
http://justinklemm.com/grunt-watch-livereload-javascript-less-sass-compilation/)

---
## To use ##

1. Ensure you have Node installed.
2. Open a command console and type
    ''npm install grunt''
    ''npm install grunt-contrib-watch''
3. Open a command console and type
    ''grunt watch''
4. Open the .sln, and press F5 to run.
5. Make a change to a *.chtml file. 
6. The console app should show a file was changed and the browser refresh.

