/**
 * pages/api/bookings/[id].js
 * PATCH  /api/bookings/:id  — update booking status
 * DELETE /api/bookings/:id  — delete a booking
 */

import connectDB from '../../../lib/mongodb';
import Booking from '../../../models/Booking';

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;

  // ── PATCH — update status ────────────────────────────────────────
  if (req.method === 'PATCH') {
    try {
      const { status } = req.body;

      const validStatuses = ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ success: false, message: 'Invalid status value' });
      }

      const booking = await Booking.findByIdAndUpdate(
        id,
        { status },
        { new: true, runValidators: true }
      );

      if (!booking) {
        return res.status(404).json({ success: false, message: 'Booking not found' });
      }

      return res.status(200).json({ success: true, data: booking });
    } catch (error) {
      console.error('PATCH /api/bookings/[id] error:', error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  }

  // ── DELETE ───────────────────────────────────────────────────────
  if (req.method === 'DELETE') {
    try {
      const booking = await Booking.findByIdAndDelete(id);

      if (!booking) {
        return res.status(404).json({ success: false, message: 'Booking not found' });
      }

      return res.status(200).json({ success: true, message: 'Booking deleted' });
    } catch (error) {
      console.error('DELETE /api/bookings/[id] error:', error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  }

  res.setHeader('Allow', ['PATCH', 'DELETE']);
  return res.status(405).json({ success: false, message: `Method ${req.method} not allowed` });
}
