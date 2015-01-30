module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }


  assemble: {
  options: {
    assets: "path/to/assets",
    data:   "path/to/config.json" 
  },
  project: {
    options: {
      layout: "path/to/default-layout.hbs",
      partials: "path/to/partials/**/*.hbs" 
    },
    files: {
      'dest': ["path/to/pages/**/*.hbs" ]
    }
  }
}
  }); 

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('assemble' );
  grunt.loadNpmTasks('grunt-newer' );
  // Default task(s).
  grunt.registerTask('minify', ['uglify']);
  
  grunt.registerTask('default', ['newer:assemble' ]);

};