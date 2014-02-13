module.exports = function(grunt) {
	// Do grunt-related things in here
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		cfg : grunt.file.readJSON('config.json'),
		cloneDir: 'master-branch',
		serverFile : '<%= cloneDir %>/app.js',
		clean: ["<%= cloneDir %>"],
		gitclone : {
			clone : {
				options : {
					repository : '<%= cfg.gitUrl %>',
					branch : 'master',
					directory : '<%= cloneDir %>'
				}
			}
		},

		shell : {
			mongo : {
				command : 'mongod.exe --dbpath=C:\data\db',
				options : {
					async : true
				}
			},
			nodemon : {
				command : 'nodemon <%= serverFile %>',
				options : {
					stdout : true,
					stderr : true
				}
			}
		},
		
		watch: { /* nothing to do in watch anymore */ }
	});

	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
//	grunt.loadNpmTasks('grunt-npm-install');
	grunt.registerTask('install',
			'install the backend dependencies', function() {
				var exec = require('child_process').exec;
				var cb = this.async();
				exec('npm install', {
					cwd : './master-branch'
				}, function(err, stdout, stderr) {
					grunt.verbose.write(stdout);
					cb();
				});
			});

	grunt.registerTask('default', [ 'clean', 'gitclone', 'install',
			'shell:nodemon' ]);

};