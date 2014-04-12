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

        // Normalize might not be necessary with bootstrap.
        sass: {
            dist: {
                options: {
                    includePaths: ['src/main/webapp/sass/module/'],
                    outputStyle: 'nested'
                },
                files: {
                    'dist/main.css': 'src/main/webapp/sass/main.scss'
                }
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'dist/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/',
                ext: '.min.css'
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
                    src: ['src/main/webapp/images/**/*.png'],
                    dest: 'dist/images'
                }, {
                    expand: true,
                    flatten: true,
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
                files: 'src/main/webapp/sass/**/*.scss',
                tasks: ['sass', 'cssmin']
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
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['assemble', 'sass', 'cssmin', 'copy']);
};