/**
 * pages/api/bookings/index.js
 * GET  /api/bookings  — returns all bookings (admin use)
 * POST /api/bookings  — creates a new booking
 */

import connectDB from '../../../lib/mongodb';
import Booking from '../../../models/Booking';

export default async function handler(req, res) {
  await connectDB();

  // ── GET — list all bookings ──────────────────────────────────────
  if (req.method === 'GET') {
    try {
      const bookings = await Booking.find({})
        .sort({ createdAt: -1 }) // newest first
        .lean();

      return res.status(200).json({ success: true, data: bookings });
    } catch (error) {
      console.error('GET /api/bookings error:', error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  }

  // ── POST — create a new booking ──────────────────────────────────
  if (req.method === 'POST') {
    try {
      const {
        name, phone, email, vehicleNumber,
        vehicleModel, service, notes, date, time,
      } = req.body;

      // Basic server-side validation
      if (!name || !phone || !service || !date || !time) {
        return res.status(400).json({
          success: false,
          message: 'Name, phone, service, date, and time are required.',
        });
      }

      // Prevent duplicate booking for same phone + date + time
      const existing = await Booking.findOne({ phone, date, time });
      if (existing) {
        return res.status(409).json({
          success: false,
          message: 'A booking already exists for this phone number at the selected date and time.',
        });
      }

      const booking = await Booking.create({
        name, phone, email, vehicleNumber,
        vehicleModel, service, notes, date, time,
      });

      return res.status(201).json({ success: true, data: booking });
    } catch (error) {
      console.error('POST /api/bookings error:', error);

      // Mongoose validation error
      if (error.name === 'ValidationError') {
        const messages = Object.values(error.errors).map((e) => e.message);
        return res.status(400).json({ success: false, message: messages.join(', ') });
      }

      return res.status(500).json({ success: false, message: 'Server error' });
    }
  }

  // ── Method not allowed ───────────────────────────────────────────
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).json({ success: false, message: `Method ${req.method} not allowed` });
}
