'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        watch: {
           
            src: {
                files: [
                    'GruntWatcherAspNetMvc/Views/**/*.cshtml',
                    'GruntWatcherAspNetMvc/Scripts/**/*.js',
                     'GruntWatcherAspNetMvc/Content/**/*.css'
                ],
                options: {
                    livereload: true,
                }
            }
        }
    });
}