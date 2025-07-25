import { Request, Response } from 'express';
import { PortfolioService } from '../services/portfolioService';

const portfolioService = new PortfolioService();

export class PortfolioController {
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

  // **PUT /api/portfolio** (update or create)
  async upsertPortfolio(req: Request, res: Response) {
    try {
      const updated = await portfolioService.upsertPortfolioData(req.body);
      res.status(200).json({ success: true, data: updated });
    } catch (error) {
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : error });
    }
  }

  async patchPortfolio(req: Request, res: Response) {
  try {
    const result = await portfolioService.patchPortfolioData(req.body);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error instanceof Error ? error.message : error });
  }
}

  // **DELETE /api/portfolio**
  async deletePortfolio(req: Request, res: Response) {
    try {
      await portfolioService.deletePortfolio();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : error });
    }
  }
}
