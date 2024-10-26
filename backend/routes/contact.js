import express from 'express'
const contactRouter = express.Router()
import { contactUsController }  from "../controllers/ContactUsContoller.js"

contactRouter.post("/contact", contactUsController)

export default contactRouter;