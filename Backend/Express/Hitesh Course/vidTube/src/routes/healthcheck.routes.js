import {Router} from 'express'
import {healthcheck} from '../controllers/healtcheck.controllers.js'

const router = Router()
//  /api/vi/healthcheck/test

router.route('/').get(healthcheck)
router.route('/test').get(healthcheck)

export default router


