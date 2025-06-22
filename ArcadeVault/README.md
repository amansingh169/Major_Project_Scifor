# 🎮 ArcadeVault

ArcadeVault is a modern game discovery and library management web app built with React, Vite, and Bootstrap. It fetches game data using Steam and SteamSpy APIs (via proxy) and allows users to build their own game collections, wishlist, and cart system.

> 🛠 Built by Aman Singh  
> ⚡ Powered by React 19, Vite 6, and Express Proxy

## 🚀 Features

- 🔍 Discover trending games from SteamSpy
- 🔎 Live search with Steam Store API
- 📚 Game Library with user collections
- ❤️ Wishlist management
- 🛒 Cart system with placeholder checkout
- 🎨 Theme system using Context API
- 🔧 Filters, sorting, and responsive design
- 🧠 Persistent data using localStorage

## 🖼 Preview

> [🚀 Click here to view ArcadeVault Live](https://arcadevault.vercel.app)

![ArcadeVault Preview](https://i.ibb.co/XxjYc34w/Screenshot-80.png)
![ArcadeVault Preview](https://i.ibb.co/8D7XyY8J/Screenshot-81.png)
![ArcadeVault Preview](https://i.ibb.co/hxCNpk8b/Screenshot-82.png)
![ArcadeVault Preview](https://i.ibb.co/WW0GnR4R/Screenshot-83.png)
![ArcadeVault Preview](https://i.ibb.co/S4kgJJTz/Screenshot-84.png)
![ArcadeVault Preview](https://i.ibb.co/4Z766tpW/Screenshot-85.png)
![ArcadeVault Preview](https://i.ibb.co/pvxyHG5m/Screenshot-2025-06-22-232918.png)

## 🧱 Tech Stack

- **Frontend**: React 19, Vite, Bootstrap 5, SASS
- **Backend Proxy (Dev)**: Express.js, node-fetch
- **Deployment**: Vercel (with serverless function rewrites)
- **Routing**: React Router v7
- **Icons**: Bootstrap Icons
- **Skeletons**: react-loading-skeleton

## 📂 Folder Structure

```
📦 src
├── api/                # API utility functions
├── components/         # Shared UI components
├── contexts/           # Theme and User context
├── layouts/            # Layout wrappers
├── pages/              # All main pages
├── SASS/               # Custom styles
├── App.jsx             # Route definitions
└── main.jsx            # App entry with providers
```

## 🧩 Available Routes

- `/` → Discover
- `/search?query=xyz` → Search results
- `/browse` → Browse genres
- `/wishlist` → Wishlist page
- `/cart` → Shopping cart
- `/library` → Library (auto redirects to `/library/all`)
- `/library/:collectionId` → Specific library collection
- `/game/:id` → Game details

## ⚙️ Development

### 🔧 Setup

```bash
git clone https://github.com/amansingh169/arcadevault.git
cd arcadevault
npm install
```

### ▶️ Start Dev Server

```bash
npm run dev
```

> Runs Vite frontend on `http://localhost:5173`

### 🔁 Start Backend Proxy (for dev only)

```bash
node proxy.js
```

> Runs Express proxy server on `http://localhost:5000`

## 🌐 Deployment (Vercel)

- Uses `vercel.json` for serverless function routing:

```json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

- Replace Express backend with serverless functions on Vercel.

## 🧠 Context API

- `UserContext` → Manages cart, wishlist, and collections (stored in localStorage)
- `ThemeContext` → Custom UI themes

## ✨ Future Improvements

- User Authentication (Firebase/Supabase)
- Real payment gateway (Stripe, Razorpay)
- Multiplayer wishlist sharing
- Game reviews & rating system
- PWA support

## 👤 Author

**Aman Singh**  
Frontend Developer | Blender 3D Hobbyist  
🌐 [LinkedIn](https://linkedin.com/in/yourprofile) • [GitHub](https://github.com/yourusername)
