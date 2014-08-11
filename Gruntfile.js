module.exports = function(grunt) {
  grunt.initConfig({
    jasmine: {
      javascripts: {
        src: [
          'node_modules/jquery-browser/lib/jquery.js',
          'javascripts/**/*.js'
        ],
        options: {
          specs: 'spec/unit/*Spec.js',
          helpers: 'spec/unit/*Helper.js'
        }
      }
    },
    scsslint: {
      allFiles: [
        'stylesheets/**/*.scss',
      ],
      options: {
        bundleExec: false,
        reporterOutput: 'scss-lint-report.xml',
        colorizeOutput: true
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.registerTask('test', ['scsslint', 'jasmine']);
  grunt.registerTask('default', ['test']);
};
