module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      //uglify task
      uglify: {
        
        build: {
          src: 'js/script.js',
          dest: 'js/script.min.js'
        }
      },
      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'
          },
          files: {                         // Dictionary of files
            'mainCss/css/style.css': 'mainCss/sass/style.scss'       // 'destination': 'source'
          }
        }
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
  
    // Default task(s).
    grunt.registerTask('default', ['uglify','sass']);
  
  };