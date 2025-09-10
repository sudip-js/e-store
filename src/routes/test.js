import { Router } from "express";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import * as yup from "yup";
import { validationError } from "../middlewares/error.middleware.js";

const router = Router();

const userSchema = yup.object({
  name: yup.string().required("Name is required").min(3).max(50),
  email: yup.string().required("Email is required").email("Invalid email format"),
});

router.get("/", validationError(userSchema), async (req, res, next) => {
  try {
    ApiResponse({ res, data: req.body });
  } catch (error) {
    console.log({error})
    next(ApiError(500, error));
  }
});

export default router;
