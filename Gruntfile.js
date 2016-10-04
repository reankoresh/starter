module.exports= function(grunt){
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less:{
          task:{
              src:['less/*.less'],
              dest:'css/less.css'
          }
      },
  
      autoprefixer:{
          task:{
              src:['css/less.css'],
              dest:'css/prefixer.css'
          }
      },  
  
      concat:{
        task:{
            src:[
                'lib/normalize-css/normalize.css',
                'lib/font-awesome-css/css/font-awesome.min.css',
                'lib/MDBootstrap/css/bootstrap.min.css',
                'lib/MDBootstrap/css/mdb.min.css',
//                'css/prefixer.css'
            ],
            dest:'css/concat.css'
         }
      },
     
      cssmin:{
        task:{
          src:['css/concat.css'],
          dest:'css/style.min.css'
        }
      },
     
      uglify: {
        task: {
          files: {
            'js/functions.min.js': 
            [
            'lib/angular/angular.min.js',
            'lib/angular-route/angular-route.min.js',
            'js/app.js',     
            'lib/MDBootstrap/js/jquery-2.2.3.min.js',
            'lib/MDBootstrap/js/tether.min.js',
            'lib/MDBootstrap/js/bootstrap.min.js',
            'lib/MDBootstrap/js/mdb.min.js'
            ]
          }
        }
      },
    
      browserSync: {
            dev: {
                options: {
                    notify:false,
                    watchTask: true,
                    browser: "blisk",
                    server: {
                    baseDir: ""  
                    },
                    plugins: [
                        {
                            module: "bs-html-injector",
                            options: {
                                files: [
                                  "index.html", 
                                  "views/*.html",
                                  "css/style.min.css",
                                  "js/functions.min.js"
                                ],
                                excludedTags: ["body"]
                            }
                        }
                    ]
                }
            }
        },
    
  watch: {
      A: {
          files: "less/*.less",
          tasks:
            [
            "newer:less:task", "newer:autoprefixer:task", "newer:concat:task", "cssmin"
            ]
      },
  
      B: {
          files: ["js/app.js", "Gruntfile.js"],
          tasks: ['uglify']
      }
  }
    
  }); 
  
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-autoprefixer'); 
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin'); 
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-newer');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.registerTask('tareas', ['newer:less:task','newer:autoprefixer:task','newer:concat:task','newer:cssmin:task']);
grunt.registerTask('observar', ['tareas','browserSync', 'watch']);
};