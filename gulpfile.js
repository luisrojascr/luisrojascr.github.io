var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: ""
    });

    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

// Scripts
gulp.task('own-scripts', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
});

gulp.task('default', ['serve']);

    

// gulp.task('styles', function () {
//     return (sass('./src/scss'))
//         .on('error', function (err) { console.log(err.message); })
//         .pipe(minifycss())
//         .pipe(gulp.dest('./css'))
// });



// Watch
// gulp.task('watch', function() {
//     gulp.watch('./src/scss/*.scss', ['styles']);
//     gulp.watch('./src/js/*.js', ['own-scripts']);
// });

// Default task
// gulp.task('default', ['watch','webserver'], function() {
//     gulp.start('styles', 'own-scripts');
// });