module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    bowerInstall: {
      target: {
        // Point to the files that should be updated when 
        // you run `grunt bowerInstall` 
        src: [
          '*.html'
        ],
        // Optional: 
        // --------- 
        cwd: '',
        dependencies: true,
        devDependencies: false,
        exclude: [],
        fileTypes: {},
        ignorePath: '',
        overrides: {}
      }
    },
    exec: {
      bowerComponents: {
        cmd: 'bower install'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-install');
  grunt.registerTask('default', ['exec:bowerComponents', 'bowerInstall']);
};
