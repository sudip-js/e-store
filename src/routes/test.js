import { Router } from "express";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const router = Router();

router.get("/", (req, res, next) => {
  try {
    ApiResponse({
      res,
      data: { name: "sudip" },
    });
  } catch (error) {
    next(ApiError(500, error?.message));
  }
});

export default router;
