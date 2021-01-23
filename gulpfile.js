var gulp = require("gulp");
var sass = require("gulp-dart-sass");

var babel = require("gulp-babel");


//Compiles Sass to CSS
//gulp.task('css', function () {
//    return gulp.src(['src/**/*.+(scss|sass)', 'src/**/_*.+(scss|sass)','!src/main.scss','!src/examples/*'],{base:"src/"})
//        .pipe(sass())
//        .pipe(gulp.dest('build/'))
//});

//Copies all Sass files over to the build
gulp.task('sass', function () {
    //includes sass partials (files that start with _)
    //excludes files used to style example pages
    return gulp.src(['src/**/*.+(scss|sass)', 'src/**/_*.+(scss|sass)','!src/main.scss','!src/examples/*'],{base:"src/"})
        .pipe(gulp.dest('build/'))
});

//Compiles the component JS files
gulp.task('react', function (){
    //retains folder structure using base:"src/"
    //**/*.js finds any js file inside thre tree of files inside the components folder
    return gulp.src('src/components/**/*.js',{base:"src/"})
    .pipe(babel())
    .pipe(gulp.dest('build/'))
})

//Compiles the index.js that exports all component JS files, for the npm package only
gulp.task('exports', function (){
    return gulp.src('index.js',{base:"./"})
    .pipe(babel())
    .pipe(gulp.dest('build/'))
})

//Builds the whole folder(./build) for the npm package
gulp.task('default', gulp.series('sass', 'react', 'exports'));