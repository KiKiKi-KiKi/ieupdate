module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');
  var dir = 'theplugin/';

  grunt.initConfig({
    jshint: {
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        },
        unused: false,
        browser: true,
        devel: true,
        laxbreak: true,
        // Relaxing Options
        expr: true
      },
      files: 'ieupdate/ieupdate.js'
    },
    removelogging: {
      dist: {
        src: 'ieupdate/ieupdate.js',
        dest: 'ieupdate/ieupdate-clean.js'
      }
    },
    uglify: {
      options: {
        banner: '/*!\n * IE Alert! jQuery plugin\n * Version 2.1\n * Author: David Nemes | @nmsdvid\n * http://nmsdvid.com/iealert/\n * iealert.js - japanese @Chaika-design <%= grunt.template.today("dd-mm-yyyy") %>\n */\n'
      },
      dist: {
        files: {
          'ieupdate/ieupdate.min.js': 'ieupdate/ieupdate-clean.js'
        }
      }
    },
    compress: {
      js: {
        options: {
          mode: 'gzip'
        },
        files: [
          {
            expand: true,
            src: 'ieupdate/*.min.js',
            ext: '.min.js.gz'
          }
        ]
      }
    },
    clean: {
      options: {
        force: true
      },
      js: ['ieupdate/ieupdate-clean.js']
    },

    watch: {
      js: {
        files: ['ieupdate/ieupdate.js'],
        tasks: ['js'],
        options: {
          nospawn: true
        }
      }
    }
  });

  for(var taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) == 'grunt-') {
      grunt.loadNpmTasks(taskName);
    }
  }

  grunt.registerTask('js', ['jshint', 'removelogging:dist', 'uglify:dist', 'compress:js', 'clean:js']);

  grunt.registerTask('default', 'watch');
};
