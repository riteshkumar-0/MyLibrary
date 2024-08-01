import express from 'express';
import { createBookRequest, createArticleRequest, createMagazineRequest } from '../controller/request.controller.js';
import upload from '../MulterMiddleware/multer.js'

const router = express.Router();

router.post('/bookrequest', upload.single('image'), createBookRequest);
router.post('/article', createArticleRequest);
router.post('/magazine', upload.single('image'), createMagazineRequest);

export default router;
