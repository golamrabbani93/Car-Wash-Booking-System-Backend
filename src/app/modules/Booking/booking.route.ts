import { Router } from 'express'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../User/user.constant'
import validateRequest from '../../middlewares/validateRequest'
import { BookingValidation } from './booking.validation'
import { bookingController } from './booking.controller'

const router = Router()

// !Create booking Route

router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(BookingValidation.createBookingvalidationSchema),
  bookingController.createBooking,
)

// !Get all Bookings Route
router.get('/', auth(USER_ROLE.admin), bookingController.getAllBookings)

export const bookingRoutes = router
