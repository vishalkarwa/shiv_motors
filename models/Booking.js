/**
 * models/Booking.js
 * Mongoose schema/model for workshop service bookings.
 */

import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
  {
    // ── Customer Info ──────────────────────────────────────────────
    name: {
      type: String,
      required: [true, 'Customer name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^[+]?[\d\s\-()]{7,15}$/, 'Please enter a valid phone number'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },

    // ── Vehicle Info ───────────────────────────────────────────────
    vehicleNumber: {
      type: String,
      trim: true,
      uppercase: true,
    },
    vehicleModel: {
      type: String,
      trim: true,
    },

    // ── Service Info ───────────────────────────────────────────────
    service: {
      type: String,
      required: [true, 'Please select a service'],
      enum: [
        'Engine Repair',
        'Oil Change',
        'Tyre Service',
        'Full Car Wash',
        'Brake Service',
        'AC Service',
        'Battery Replacement',
        'Wheel Alignment',
        'Suspension Repair',
        'General Service',
        'Other',
      ],
    },
    notes: {
      type: String,
      maxlength: [500, 'Notes cannot exceed 500 characters'],
    },

    // ── Appointment ────────────────────────────────────────────────
    date: {
      type: String, // stored as "YYYY-MM-DD"
      required: [true, 'Appointment date is required'],
    },
    time: {
      type: String, // stored as "HH:MM"
      required: [true, 'Appointment time is required'],
    },

    // ── Status ─────────────────────────────────────────────────────
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

// Avoid OverwriteModelError in Next.js hot-reload
export default mongoose.models.Booking ||
  mongoose.model('Booking', BookingSchema);
