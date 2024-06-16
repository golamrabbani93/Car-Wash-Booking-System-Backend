import { Router } from 'express'
import { slotsControllers } from './slot.controller'

const router = Router()

// !Get Available Slots

router.get('/availability', slotsControllers.getAvailableSolts)

export const slotRoutes = router
