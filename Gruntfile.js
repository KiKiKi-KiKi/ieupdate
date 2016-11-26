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
        banner: '/*!\n * ieupdate.js\n * Version 1.0.0\n * ORIGINAL: IE6Update.js\n * Author: Jakob Westhoff | jakob@php.net\n * Kleiner Floraweg 35\n * 44229 Dortmund\n * Germany\n * http://www.westhoffswelt.de/\n *\n * Fork & customize\n * @chaika-design\n * last updated: <%= grunt.template.today("dd-mm-yyyy") %>\n */\n'
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
