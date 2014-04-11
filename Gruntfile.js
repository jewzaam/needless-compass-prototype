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
        },

        copy: {
            modernizr: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['src/main/webapp/js/modernizr.js'],
                    dest: 'dist/'
                }]
            },
            images: {
                files: [{
                    expand: true,
                    flatten: true,
                    // cwd: 'src/main/webapp/images/',
                    src: ['src/main/webapp/images/**/*.png'],
                    dest: 'dist/images'
                }, {
                    expand: true,
                    flatten: true,
                    // cwd: 'src/main/webapp/images/',
                    src: ['src/main/webapp/images/**/*.ico'],
                    dest: 'dist/'
                }]
            }
        },

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: 'src/main/webapp/css/**/*.css',
                tasks: ['cssmin']
            },
            templates: {
                files: 'src/main/webapp/templates/**/*.hbs',
                tasks: ['assemble']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['assemble', 'cssmin', 'copy']);
};