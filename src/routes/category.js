import { Router } from 'express';
import { create,  list, read, } from '../controllers/category';
import { checkAuth } from '../middleware/checkAuth';

const router = Router();

router.get("/category", checkAuth, list);
router.get("/category/:id", checkAuth,create);
router.post('/category/:slug', checkAuth, read);


export default router