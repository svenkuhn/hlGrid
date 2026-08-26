module.exports = function (grunt) {
    "use strict";

    const postcss = require("postcss");
    const autoprefixer = require("autoprefixer");
    const autoprefixPlugin = {
        install: function (less, pluginManager) {
            pluginManager.addPostProcessor({
                process: function (css) {
                    return postcss([
                        autoprefixer({ overrideBrowserslist: ["last 2 versions"] }),
                    ]).process(css, { from: undefined }).css;
                },
            });
        },
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        distPath: "dist/",

        clean: {
            dist: ["<%= distPath %>"],
        },

        less: {
            options: {
                plugins: [autoprefixPlugin],
                math: "always",
            },
            dist: {
                options: {
                    sourceMap: false,
                    compress: true,
                },
                files: {
                    "<%= distPath %><%= pkg.name %>.min.css": "src/Less/hlgrid.less",
                    "<%= distPath %><%= pkg.name %>-standalone.min.css": "src/Less/standalone.less",
                },
            },
            dev: {
                options: {
                    sourceMap: false,
                    compress: false,
                },
                files: {
                    "<%= distPath %><%= pkg.name %>.css": "src/Less/hlgrid.less",
                    "<%= distPath %><%= pkg.name %>-standalone.css": "src/Less/standalone.less",
                },
            },
        },
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-less");

    grunt.registerTask("main", ["clean:dist", "less:dist", "less:dev"]);
};
