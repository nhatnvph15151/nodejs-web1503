import { Router } from 'express';
import { signup  } from '../controllers/auth';

const router = Router();

// router.post("/signin", signin);
router.post("/signup", signup);



export default router