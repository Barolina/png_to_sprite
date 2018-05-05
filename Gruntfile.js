module.exports = function (grunt) {
  // Configure grunt
  grunt.initConfig({
    sprite:{
      all: {
        src: 'src/48/*.png',
        dest: 'dest/sprite@4x.png',
        destCss: 'dest/sprite@4x.json'
      }
    }
  });

  // Load in `grunt-spritesmith`
  grunt.loadNpmTasks('grunt-spritesmith');
};