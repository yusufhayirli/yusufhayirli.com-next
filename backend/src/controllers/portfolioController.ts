import { Request, Response } from 'express';
import { PortfolioService } from '../services/portfolioService';

const portfolioService = new PortfolioService();

export class PortfolioController {
  // Eğer bir işlem gerekmiyorsa, CRUD tamamlamak için
  async noOp(req: Request, res: Response) {
    res.json({ success: true, message: "No operation performed." });
  }

  // GET /api/portfolio
  async getPortfolio(req: Request, res: Response): Promise<void> {
    try {
      const data = await portfolioService.getPortfolioData();
      if (!data) {
        res.status(404).json({ success: false, message: "Portfolio data not found" });
        return;
      }
      res.status(200).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : error });
    }
  }

  // GET /api/portfolio/content
  async getPortfolioContent(req: Request, res: Response) {
    try {
      const data = await portfolioService.getPortfolioContent();
      if (!data) {
        res.status(404).json({ success: false, message: "Content not found" });
        return;
      }
      res.status(200).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : error });
    }
  }

  // GET /api/portfolio/content
  async getLikeToBuild(req: Request, res: Response) {
    try {
      const data = await portfolioService.getLikeToBuild();
      if (!data) {
        res.status(404).json({ success: false, message: "Content not found" });
        return;
      }
      res.status(200).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : error });
    }
  }

  // GET /api/portfolio/experiences
  async getExperiences(req: Request, res: Response) {
    try {
      const experiences = await portfolioService.getExperiences();
      if (!experiences) {
        res.status(404).json({ success: false, message: "Experiences not found" });
        return;
      }
      res.status(200).json({ success: true, data: experiences });
    } catch (error) {
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : error });
    }
  }

  // GET /api/portfolio/skills
  async getSkillsAndCerts(req: Request, res: Response) {
    try {
      const skillsAndCerts = await portfolioService.getSkillsAndCerts();
      if (!skillsAndCerts) {
        res.status(404).json({ success: false, message: "Skills and Certifications not found" });
        return;
      }
      res.status(200).json({ success: true, data: skillsAndCerts });
    } catch (error) {
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : error });
    }
  }

  // GET /api/portfolio/education
  async getEducation(req: Request, res: Response) {
    try {
      const education = await portfolioService.getEducation(); // Eğitim bilgisini dönecek metod
      if (!education) {
        res.status(404).json({ success: false, message: "Education data not found" });
        return;
      }
      res.status(200).json({ success: true, data: education });
    } catch (error) {
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : error });
    }
  }

  // PUT /api/portfolio
  async upsertPortfolio(req: Request, res: Response) {
    try {
      const updated = await portfolioService.upsertPortfolioData(req.body);
      res.status(200).json({ success: true, data: updated });
    } catch (error) {
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : error });
    }
  }

  // PATCH /api/portfolio
  async patchPortfolio(req: Request, res: Response) {
    try {
      const result = await portfolioService.patchPortfolioData(req.body);
      res.json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : error });
    }
  }

  // DELETE /api/portfolio
  async deletePortfolio(req: Request, res: Response) {
    try {
      await portfolioService.deletePortfolio();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : error });
    }
  }
}
