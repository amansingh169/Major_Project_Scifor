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

## 🖼 Screenshots

> [🚀 Click here to view ArcadeVault Live](https://arcadevault.vercel.app)

<img src="./src/assets/Screenshot 1.png" width="500"/>
<img src="./src/assets/Screenshot 2.png" width="500"/>
<img src="./src/assets/Screenshot 3.png" width="500"/>
<img src="./src/assets/Screenshot 4.png" width="500"/>
<img src="./src/assets/Screenshot 5.png" width="500"/>
<img src="./src/assets/Screenshot 6.png" width="500"/>
<img src="./src/assets/Screenshot 7.png" width="500"/>
<img src="./src/assets/Screenshot 8.png" width="500"/>
<img src="./src/assets/Screenshot 9.png" width="500"/>
<img src="./src/assets/Screenshot 10.png" width="500"/>

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
git clone https://github.com/amansingh169/Major_Project_Scifor.git
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
node proxy
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
🌐 [LinkedIn](https://www.linkedin.com/in/aman-singh-b69a7120b/) • [GitHub](https://github.com/amansingh169)
