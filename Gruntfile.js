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
        }
    });


    grunt.loadNpmTasks('assemble');

    grunt.registerTask('default', ['assemble']);
};