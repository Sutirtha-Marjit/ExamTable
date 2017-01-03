module.exports = function(grunt){
    var TASK_SETTINGS = {};

    TASK_SETTINGS['less']={

        build:{
            options:{
                compress:false,
                optimization:1
            },
            files:{
                'prod/style/themes/default/style.css':['source/style/themes/*.less','source/style/themes/default/components/*.less']
            }
        }
    };


    TASK_SETTINGS['watch'] = {
        general:{
            files:['source/**/*'],
            tasks:["less","sample-html-copy"]
        }
    };

    TASK_SETTINGS['copy'] = {
        themesamples:{
            files:[{expand:true,cwd:'source/',src:['*.html'],dest:'prod/',filter: 'isFile'}]
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

