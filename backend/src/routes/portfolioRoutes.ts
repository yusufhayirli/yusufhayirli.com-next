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

// Additional routes for specific parts
router.get('/profile', controller.getPortfolio.bind(controller));
router.get('/content', controller.getPortfolioContent.bind(controller));
router.get('/experiences', controller.getExperiences.bind(controller));
router.get('/skills', controller.getSkillsAndCerts.bind(controller));
router.get('/education', controller.getEducation.bind(controller));
router.get('/liketobuild', controller.getLikeToBuild.bind(controller));


export default router;
