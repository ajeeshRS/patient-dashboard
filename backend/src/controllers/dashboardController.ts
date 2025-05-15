import { Request, Response } from "express";
import {
  healthStats,
  shipmentTrackingData,
  weightTrackingData,
} from "../helpers/data";

export const weightLogController = (req: Request, res: Response) => {
  res.status(200).json({ success: true, weightTrackingData });
};

export const shipmentDataController = (req: Request, res: Response) => {
  res.status(200).json({ success: true, shipmentTrackingData });
};

export const healthDataController = (req: Request, res: Response) => {
  res.status(200).json({ success: true, healthStats });
};
