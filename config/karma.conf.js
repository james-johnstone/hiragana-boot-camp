module.exports = function (config) {
    config.set({
        basePath: '../',

        files: [
          'app/lib/angular/angular.js',
          'app/lib/angular/angular-*.js',
          'test/lib/angular/angular-mocks.js',
          'app/js/**/*.js',
          'test/unit/**/*.js'
        ],

        exclude: [
          'app/lib/angular/angular-loader.js',
          'app/lib/angular/*.min.js',
          'app/lib/angular/angular-scenario.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
                'karma-chrome-launcher',
                'karma-jasmine'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    })
}
