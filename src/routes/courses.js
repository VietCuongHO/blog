import express from 'express';
import { CourseController } from '../app/controllers/CourseController.js';

const router = express.Router();
const courseController = new CourseController();

router.get('/:slug', courseController.show);

export default router;
