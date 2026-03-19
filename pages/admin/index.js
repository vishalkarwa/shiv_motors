/**
 * pages/admin/index.js
 * Admin Dashboard — view all bookings, update status, delete bookings.
 * Protected by a simple password prompt (replace with proper auth in production).
 */

import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import toast from 'react-hot-toast';
import {
  FaSync, FaTrash, FaFilter, FaSearch,
  FaWrench, FaSignOutAlt, FaChevronDown,
} from 'react-icons/fa';

const STATUS_OPTIONS = ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'];

const BADGE = {
  pending:      'badge-pending',
  confirmed:    'badge-confirmed',
  'in-progress':'badge-in-progress',
  completed:    'badge-completed',
  cancelled:    'badge-cancelled',
};

// ── Stat card ─────────────────────────────────────────────────────
function StatCard({ label, value, color }) {
  return (
    <div className="glass-card rounded-xl p-5 border border-[#2A3550]">
      <p className="text-gray-400 text-sm font-condensed tracking-wide uppercase mb-1">{label}</p>
      <p className={`font-display text-4xl ${color}`}>{value}</p>
    </div>
  );
}

// ── Booking row ────────────────────────────────────────────────────
function BookingRow({ booking, onStatusChange, onDelete }) {
  const [changing, setChanging] = useState(false);

  const handleStatus = async (newStatus) => {
    setChanging(true);
    await onStatusChange(booking._id, newStatus);
    setChanging(false);
  };

  return (
    <tr className="border-b border-[#2A3550] hover:bg-white/5 transition-colors">
      <td className="px-4 py-4 text-xs text-gray-500 font-mono">
        #{booking._id.slice(-6).toUpperCase()}
      </td>
      <td className="px-4 py-4">
        <p className="text-white text-sm font-medium">{booking.name}</p>
        <p className="text-gray-500 text-xs">{booking.phone}</p>
      </td>
      <td className="px-4 py-4">
        <span className="text-brand-orange text-sm font-condensed">{booking.service}</span>
        {booking.vehicleModel && (
          <p className="text-gray-500 text-xs">{booking.vehicleModel}</p>
        )}
      </td>
      <td className="px-4 py-4 text-sm text-gray-300">
        {booking.date}
        <br />
        <span className="text-gray-500 text-xs">{booking.time}</span>
      </td>
      <td className="px-4 py-4">
        <span className={`text-xs px-2.5 py-1 rounded-full font-condensed tracking-wide capitalize ${BADGE[booking.status]}`}>
          {booking.status}
        </span>
      </td>
      <td className="px-4 py-4">
        <div className="relative">
          <select
            value={booking.status}
            onChange={(e) => handleStatus(e.target.value)}
            disabled={changing}
            className="bg-[#1A2235] border border-[#2A3550] text-gray-300 text-xs
                       rounded-lg px-3 py-1.5 focus:outline-none focus:border-brand-orange
                       appearance-none pr-7 disabled:opacity-50"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s} className="capitalize">{s}</option>
            ))}
          </select>
          <FaChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none" />
        </div>
      </td>
      <td className="px-4 py-4">
        <button
          onClick={() => onDelete(booking._id)}
          className="text-gray-600 hover:text-red-400 transition-colors p-1.5 rounded-lg
                     hover:bg-red-400/10"
          aria-label="Delete booking"
        >
          <FaTrash size={13} />
        </button>
      </td>
    </tr>
  );
}

// ── Skeleton row ───────────────────────────────────────────────────
function SkeletonRow() {
  return (
    <tr className="border-b border-[#2A3550]">
      {[1,2,3,4,5,6,7].map((i) => (
        <td key={i} className="px-4 py-4">
          <div className="skeleton h-4 rounded w-full" />
        </td>
      ))}
    </tr>
  );
}

// ── Main component ─────────────────────────────────────────────────
export default function AdminDashboard() {
  const [authed, setAuthed]         = useState(false);
  const [password, setPassword]     = useState('');
  const [authError, setAuthError]   = useState('');
  const [bookings, setBookings]     = useState([]);
  const [loading, setLoading]       = useState(true);
  const [filterStatus, setFilter]   = useState('all');
  const [search, setSearch]         = useState('');

  // ── Auth check ─────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('sm_admin');
      if (saved === 'true') setAuthed(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password — in production, use NextAuth or JWT
    const correct = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'shivmotors2024';
    if (password === correct) {
      sessionStorage.setItem('sm_admin', 'true');
      setAuthed(true);
    } else {
      setAuthError('Incorrect password');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('sm_admin');
    setAuthed(false);
    setPassword('');
  };

  // ── Fetch bookings ─────────────────────────────────────────────
  const fetchBookings = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/bookings');
      const data = await res.json();
      if (data.success) setBookings(data.data);
    } catch {
      toast.error('Failed to load bookings');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authed) fetchBookings();
  }, [authed, fetchBookings]);

  // ── Update status ──────────────────────────────────────────────
  const handleStatusChange = async (id, status) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        setBookings((prev) =>
          prev.map((b) => b._id === id ? { ...b, status } : b)
        );
        toast.success(`Status updated to "${status}"`);
      }
    } catch {
      toast.error('Failed to update status');
    }
  };

  // ── Delete booking ─────────────────────────────────────────────
  const handleDelete = async (id) => {
    if (!confirm('Delete this booking? This cannot be undone.')) return;
    try {
      const res = await fetch(`/api/bookings/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setBookings((prev) => prev.filter((b) => b._id !== id));
        toast.success('Booking deleted');
      }
    } catch {
      toast.error('Failed to delete booking');
    }
  };

  // ── Filter + search ────────────────────────────────────────────
  const filtered = bookings.filter((b) => {
    const matchStatus = filterStatus === 'all' || b.status === filterStatus;
    const q = search.toLowerCase();
    const matchSearch = !q ||
      b.name.toLowerCase().includes(q) ||
      b.phone.includes(q) ||
      b.service.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  // ── Stats ──────────────────────────────────────────────────────
  const stats = {
    total:       bookings.length,
    pending:     bookings.filter((b) => b.status === 'pending').length,
    confirmed:   bookings.filter((b) => b.status === 'confirmed').length,
    completed:   bookings.filter((b) => b.status === 'completed').length,
    inProgress:  bookings.filter((b) => b.status === 'in-progress').length,
  };

  // ── Login screen ───────────────────────────────────────────────
  if (!authed) {
    return (
      <>
        <Head><title>Admin Login – Shiv Motors</title></Head>
        <div className="min-h-screen bg-[#0A0F1A] flex items-center justify-center px-4">
          <div className="glass-card rounded-2xl p-8 max-w-sm w-full border border-[#2A3550]">
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaWrench className="text-white text-2xl" />
              </div>
              <h1 className="font-display text-3xl text-white">ADMIN LOGIN</h1>
              <p className="text-gray-500 text-sm mt-1">Shiv Motors Dashboard</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-1.5 font-condensed tracking-wide">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setAuthError(''); }}
                  placeholder="Enter admin password"
                  className={`w-full bg-[#0A0F1A] border rounded-xl px-4 py-3 text-white text-sm
                              placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors
                              ${authError ? 'border-red-500' : 'border-[#2A3550]'}`}
                  autoFocus
                />
                {authError && <p className="text-red-400 text-xs mt-1">{authError}</p>}
              </div>
              <button type="submit" className="w-full btn-orange py-3 font-bold">
                Login →
              </button>
            </form>
            <p className="text-gray-600 text-xs text-center mt-4">
              Default password: <code className="text-gray-500">shivmotors2024</code>
            </p>
            <div className="mt-4 text-center">
              <Link href="/" className="text-gray-500 text-xs hover:text-brand-orange transition-colors">
                ← Back to Website
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── Dashboard ──────────────────────────────────────────────────
  return (
    <>
      <Head><title>Admin Dashboard – Shiv Motors</title></Head>
      <div className="min-h-screen bg-[#0A0F1A]">

        {/* Top bar */}
        <div className="bg-[#070C15] border-b border-[#2A3550] px-6 py-4 
                        flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
              <FaWrench className="text-white text-sm" />
            </div>
            <span className="font-display text-xl text-white tracking-wide">SHIV MOTORS</span>
            <span className="text-gray-500 text-sm hidden sm:inline">/ Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-gray-500 text-xs hover:text-brand-orange transition-colors hidden sm:inline">
              View Website
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-400 hover:text-red-400 
                         transition-colors text-sm px-3 py-1.5 rounded-lg
                         border border-[#2A3550] hover:border-red-400/30"
            >
              <FaSignOutAlt size={12} /> Logout
            </button>
          </div>
        </div>

        <div className="p-6 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="section-title text-4xl text-white mb-1">BOOKINGS DASHBOARD</h1>
            <p className="text-gray-500 text-sm">Manage all service bookings</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <StatCard label="Total"       value={stats.total}      color="text-white" />
            <StatCard label="Pending"     value={stats.pending}    color="text-yellow-400" />
            <StatCard label="Confirmed"   value={stats.confirmed}  color="text-blue-400" />
            <StatCard label="In Progress" value={stats.inProgress} color="text-purple-400" />
            <StatCard label="Completed"   value={stats.completed}  color="text-green-400" />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, phone, service..."
                className="w-full bg-[#1A2235] border border-[#2A3550] rounded-xl pl-9 pr-4 py-2.5
                           text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brand-orange"
              />
            </div>

            {/* Status filter */}
            <div className="flex gap-2 flex-wrap">
              {['all', ...STATUS_OPTIONS].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-condensed tracking-wide capitalize
                              transition-all duration-200 border
                              ${filterStatus === s
                                ? 'bg-brand-orange border-brand-orange text-white'
                                : 'bg-[#1A2235] border-[#2A3550] text-gray-400 hover:border-brand-orange/50'
                              }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Refresh */}
            <button
              onClick={fetchBookings}
              disabled={loading}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#2A3550]
                         text-gray-400 hover:border-brand-orange hover:text-brand-orange
                         transition-all text-sm disabled:opacity-50"
            >
              <FaSync className={loading ? 'animate-spin' : ''} size={12} />
              Refresh
            </button>
          </div>

          {/* Table */}
          <div className="glass-card rounded-2xl overflow-hidden border border-[#2A3550]">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#070C15] border-b border-[#2A3550]">
                    {['ID','Customer','Service','Date/Time','Status','Update','Delete'].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-gray-500 font-condensed 
                                             tracking-wider text-xs uppercase">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {loading
                    ? [1,2,3,4,5].map((i) => <SkeletonRow key={i} />)
                    : filtered.length > 0
                      ? filtered.map((b) => (
                          <BookingRow
                            key={b._id}
                            booking={b}
                            onStatusChange={handleStatusChange}
                            onDelete={handleDelete}
                          />
                        ))
                      : (
                        <tr>
                          <td colSpan={7} className="text-center py-16 text-gray-500">
                            <p className="text-3xl mb-2">📋</p>
                            <p>No bookings found</p>
                          </td>
                        </tr>
                      )
                  }
                </tbody>
              </table>
            </div>

            {/* Table footer */}
            {!loading && filtered.length > 0 && (
              <div className="px-4 py-3 border-t border-[#2A3550] text-gray-500 text-xs">
                Showing {filtered.length} of {bookings.length} bookings
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
