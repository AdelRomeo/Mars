const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');

gulp.task('sass-compile', () =>{
    return gulp.src('./src/styles/main-style.scss') // путь откуда будут браться файлы
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('main.css')) //сборка нескольких файлов в один
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/styles/')) //путь куда ляжет конечный файл
});

gulp.task('watch', () =>{ // автоматизация
    gulp.watch('./src/styles/**/*.scss', gulp.series('sass-compile'))
});