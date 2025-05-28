import gulp from 'gulp';

import { filePaths } from '../config/paths.js';
import { logger } from "../config/logger.js";

const copyJS = () => {
  return gulp.src(filePaths.src.staticJS)
    .pipe(logger.handleError('COPY'))
    .pipe(gulp.dest(filePaths.build.js));
};

export { copyJS };

