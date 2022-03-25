import { Router } from 'express';
import { signup,signin  } from '../controllers/auth';

const router = Router();

// router.post("/signin", signin);
router.post("/signup", signup);
router.post("/signin", signin)


export default router