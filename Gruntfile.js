module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        clean: ['dist'],

        assemble: {
            options: {
                partials: 'src/main/webapp/templates/*.hbs',
                data: 'src/main/webapp/templates/*.json'
            },
            pages: {
                expand: true,
                flatten: true,
                src: ['src/main/webapp/templates/layouts/*hbs'],
                dest: 'dist'
            }
        },

        cssmin: {
            combine: {
                files: {
                    'dist/all.css': ['src/main/webapp/**/*.css']
                }
            }
        }
    });


    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['assemble', 'cssmin']);
};