module.exports = function(grunt){
    var TASK_SETTINGS = {};

    TASK_SETTINGS['less']={

        build:{
            options:{
                compress:true,
                optimization:1
            },
            files:{
                'webapp/prod/style/themes/default/style.css':['webapp/source/style/themes/*.less','webapp/source/style/themes/default/components/*.less','webapp/source/style/themes/default/components/**/*.less'],
                'webapp/prod/style/themes/green3d/style.css':['webapp/source/style/themes/*.less','webapp/source/style/themes/green3d/components/*.less','webapp/source/style/themes/green3d/components/**/*.less'],
            }
        }
    };


    TASK_SETTINGS['watch'] = {
        general:{
            files:['webapp/source/**/*'],
            tasks:["less","sample-html-copy"]
        }
    };

    TASK_SETTINGS['copy'] = {
        themesamples:{
            files:[{expand:true,cwd:'webapp/source/',src:['*.html'],dest:'webapp/prod/',filter: 'isFile'}]
        }
    };

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig(TASK_SETTINGS);
    grunt.registerTask("css",["less"]);
    grunt.registerTask("sample-html-copy",["copy:themesamples"]);
    grunt.registerTask("generalwatch",["sample-html-copy","css","watch:general"]);
    
};

