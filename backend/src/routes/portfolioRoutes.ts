import { Router } from 'express';
import { PortfolioController } from '../controllers/portfolioController';

const router = Router();
const controller = new PortfolioController();

router.get('/', controller.getPortfolio.bind(controller));
router.put('/', controller.upsertPortfolio.bind(controller));
router.patch('/', controller.patchPortfolio.bind(controller));

// Dummy POST & DELETE to avoid changes, we can set if we need them
router.post('/', controller.noOp.bind(controller));
router.delete('/', controller.noOp.bind(controller));

// The rest dummies...
router.get('/profile', controller.getPortfolio.bind(controller));
router.get('/experiences', controller.getPortfolio.bind(controller));
router.get('/skills-certs', controller.getPortfolio.bind(controller));

export default router;
