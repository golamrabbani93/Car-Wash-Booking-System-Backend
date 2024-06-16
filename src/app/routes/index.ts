import { Router } from 'express'
import { userRoutes } from '../modules/User/user.route'
import { authRoutes } from '../modules/Auth/auth.route'
import { serviceRoutes } from '../modules/Service/service.route'
import { slotRoutes } from '../modules/Slot/slot.route'
import { bookingRoutes } from '../modules/Booking/booking.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/services',
    route: serviceRoutes,
  },
  {
    path: '/slots',
    route: slotRoutes,
  },
  {
    path: '/bookings',
    route: bookingRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
