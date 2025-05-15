import express from "express";
import {
  healthDataController,
  shipmentDataController,
  weightLogController,
} from "../controllers/dashboardController";

const router = express.Router();

router.get("/weight-logs", weightLogController);

router.get("/shipments", shipmentDataController);

router.get("/medications", healthDataController);

export default router;
