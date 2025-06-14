import express from 'express';
import { handleGenerateNewShortURL, handleGetAnalytics, handleGetShortSite } from '../controllers/url.js'
const router = express.Router();

router.post('/', handleGenerateNewShortURL);

router.get('/analytics/:shortId', handleGetAnalytics)

router.get('/:shortId',handleGetShortSite)
export { router }