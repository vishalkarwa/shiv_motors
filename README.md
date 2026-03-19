# 🔧 Shiv Motors — Full-Stack Vehicle Workshop Web App

A production-ready, full-stack web application for **Shiv Motors** auto workshop, built with **Next.js 14**, **Tailwind CSS**, and **MongoDB Atlas**.

---

## 📁 Project Structure

```
shiv-motors/
├── pages/
│   ├── _app.js              # Global app wrapper (fonts, toast)
│   ├── _document.js         # SEO meta tags, Open Graph
│   ├── index.js             # Homepage (all sections)
│   ├── booking.js           # 4-step online booking flow
│   ├── 404.js               # Custom 404 page
│   └── api/
│       └── bookings/
│           ├── index.js     # GET all / POST new booking
│           └── [id].js      # PATCH status / DELETE booking
│   └── admin/
│       └── index.js         # Admin dashboard
│
├── components/
│   ├── Navbar.js            # Sticky responsive nav
│   ├── Hero.js              # Full-screen hero section
│   ├── WorkshopStatus.js    # Live Open/Closed indicator
│   ├── Services.js          # Service cards grid
│   ├── About.js             # About + timeline + values
│   ├── Gallery.js           # Photo gallery + lightbox
│   ├── Reviews.js           # Google-style review cards
│   ├── Testimonials.js      # Featured testimonials carousel
│   ├── MapContact.js        # Google Maps + contact form
│   ├── FloatingButtons.js   # Sticky Call + WhatsApp FABs
│   └── Footer.js            # Full footer
│
├── models/
│   └── Booking.js           # Mongoose schema + model
│
├── lib/
│   └── mongodb.js           # Singleton DB connection
│
├── styles/
│   └── globals.css          # Tailwind imports + custom CSS
│
├── public/
│   └── images/              # Add your workshop photos here
│
├── .env.example             # Environment variable template
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## ✨ Features

### 🏠 Homepage
- Professional hero with animated headline, floating status card
- Live **Open Now / Closed** status badge (auto-updates every minute)
- Quick stats (10+ years, 5K+ customers, 15+ mechanics)
- Smooth scroll navigation

### 🔧 Services Section
- 9 service cards with icon, description, pricing, and direct booking link
- Hover animations, badge labels (Most Popular, etc.)
- Scroll-reveal on enter

### ℹ️ About Section
- Workshop story, founding timeline
- 4 value pillars (Expert Mechanics, Quality Guaranteed, etc.)
- Certifications display

### 🖼️ Gallery
- Responsive masonry-style grid
- Hover overlay effects
- Lightbox modal on click
- Replace placeholder cells with real images

### ⭐ Google Reviews
- 6 styled review cards with star ratings
- Aggregate rating display
- "Leave a Review" CTA

### 💬 Testimonials
- Auto-advancing carousel with 3 featured testimonials
- Dot indicators + prev/next controls

### 📍 Map & Contact
- Google Maps embed (dark-themed via CSS filter)
- "Get Directions" button → opens Google Maps
- Contact form with validation (name, phone, service, notes)
- Working hours display

### 📅 Online Booking System (4-step)
- Step 1: Customer details (name, phone, email)
- Step 2: Vehicle info + service selection
- Step 3: Date picker + time slot grid
- Step 4: Confirmation summary
- Success screen with booking ID

### 🛠️ Admin Dashboard (`/admin`)
- Password-protected login
- Stats cards (total, pending, confirmed, etc.)
- Searchable, filterable booking table
- Update booking status via dropdown
- Delete bookings
- Skeleton loading UI
- Auto-refresh

### 📞 Floating Action Buttons
- Fixed WhatsApp + Call buttons on all pages
- Tooltip labels on hover
- Ping animation on WhatsApp button

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB Atlas account (free tier works)

### Step 1: Clone / Download
```bash
# If cloned from git
git clone https://github.com/yourusername/shiv-motors.git
cd shiv-motors

# Or just navigate to the project folder
cd shiv-motors
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Set up environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/shivmotors

WORKSHOP_PHONE=+919876543210
WORKSHOP_WHATSAPP=919876543210

GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=YOUR_CODE_HERE

NEXT_PUBLIC_ADMIN_PASSWORD=shivmotors2024
```

### Step 4: Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🌐 Deploy to Vercel + MongoDB Atlas

### MongoDB Atlas Setup
1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas) → Create free account
2. Create a **free M0 cluster**
3. Under **Database Access** → Add a user with read/write access
4. Under **Network Access** → Add IP `0.0.0.0/0` (allow all, for Vercel)
5. Click **Connect** → **Connect your application** → Copy the URI
6. Replace `<password>` in the URI with your actual password

### Vercel Deployment
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Under **Environment Variables**, add:
   - `MONGODB_URI` = your Atlas connection string
   - `WORKSHOP_PHONE` = +91XXXXXXXXXX
   - `WORKSHOP_WHATSAPP` = 91XXXXXXXXXX (no +)
   - `GOOGLE_MAPS_EMBED_URL` = your maps embed URL
   - `NEXT_PUBLIC_ADMIN_PASSWORD` = your secure password
4. Click **Deploy** — done! ✅

---

## 🔑 Admin Dashboard

- Visit `/admin` on your deployed URL
- Default password: `shivmotors2024` (change this in env!)
- View, filter, search all bookings
- Update status: pending → confirmed → in-progress → completed
- Delete bookings

---

## 🗺️ Google Maps Embed URL

1. Go to [maps.google.com](https://maps.google.com)
2. Search for your workshop location
3. Click **Share** → **Embed a map** → Copy the `src="..."` URL
4. Paste it as `GOOGLE_MAPS_EMBED_URL` in your `.env.local`

---

## 📱 Tech Stack

| Layer      | Technology                    |
|------------|-------------------------------|
| Framework  | Next.js 14 (Pages Router)     |
| Styling    | Tailwind CSS v3               |
| Database   | MongoDB Atlas + Mongoose      |
| Fonts      | Bebas Neue + Barlow (Google)  |
| Icons      | react-icons (Font Awesome)    |
| Toast      | react-hot-toast               |
| Hosting    | Vercel (recommended)          |

---

## 🛠️ Customisation Guide

| What to change             | Where                              |
|----------------------------|------------------------------------|
| Workshop name              | `components/Navbar.js`, `Footer.js`|
| Phone / WhatsApp           | `.env.local`                       |
| Workshop address           | `MapContact.js`, `Footer.js`       |
| Working hours              | `WorkshopStatus.js`, `MapContact.js`|
| Services list              | `components/Services.js`           |
| Gallery photos             | `/public/images/` + `Gallery.js`   |
| Reviews                    | `components/Reviews.js`            |
| Brand colours              | `tailwind.config.js` + `globals.css`|
| Admin password             | `.env.local`                       |

---

## 📝 API Reference

### `GET /api/bookings`
Returns all bookings (newest first).

### `POST /api/bookings`
Create a new booking.
```json
{
  "name": "Rajesh Sharma",
  "phone": "+919876543210",
  "email": "rajesh@example.com",
  "vehicleNumber": "MH12AB1234",
  "vehicleModel": "Hyundai i20",
  "service": "Oil Change",
  "notes": "Engine makes noise",
  "date": "2025-07-15",
  "time": "10:00"
}
```

### `PATCH /api/bookings/:id`
Update booking status.
```json
{ "status": "confirmed" }
```

### `DELETE /api/bookings/:id`
Delete a booking.

---

## 🎨 Design System

- **Primary font**: Bebas Neue (headings)
- **Body font**: Barlow (body text), Barlow Condensed (UI labels)
- **Brand orange**: `#F97316`
- **Dark bg**: `#0A0F1A`
- **Card bg**: `#1A2235`
- **Border**: `#2A3550`

---

## 📄 License

MIT — free to use for personal and commercial projects.

---

**Built with ❤️ for Shiv Motors**
