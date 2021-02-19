import express from "express"
const router = express.Router()

import { authUser } from "../controllers/userController.js"

/**
 * @desc  login to users
 * @route POST /login
 * @access Public
 */
router.post("/login", authUser)

export default router
