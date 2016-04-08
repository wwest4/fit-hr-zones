module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    wiredep: {
      target: {
        src: 'index.html' // point to your HTML file.
      }
    },
    exec: {
      bowerComponents: {
        cmd: 'bower install'
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.registerTask('default', ['exec:bowerComponents', 'wiredep']);
};
