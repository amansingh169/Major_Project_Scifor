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

![ArcadeVault Screenshot](https://media.discordapp.net/attachments/1238915463321358607/1388083263452741662/Screenshot_89.png?ex=685fb0c7&is=685e5f47&hm=2404ea9d9cc38028408235fb51b6002bda23a49c277a4dd67b0730002722062b&=&format=webp&quality=lossless&width=1603&height=902)
![ArcadeVault Screenshot](https://media.discordapp.net/attachments/1238915463321358607/1388083267231678485/Screenshot_86.png?ex=685fb0c8&is=685e5f48&hm=79a6be58fbc6e8c05d652a3456cae05c8aa270e9a243669241658ddd65655778&=&format=webp&quality=lossless&width=1603&height=902)
![ArcadeVault Screenshot](https://media.discordapp.net/attachments/1238915463321358607/1388083263901536336/Screenshot_81.png?ex=685fb0c7&is=685e5f47&hm=174107471f219535a8512b3601e9b952fa7cf34d7e5e46fae54bc098e1a46f1a&=&format=webp&quality=lossless&width=1603&height=902)
![ArcadeVault Screenshot](https://media.discordapp.net/attachments/1238915463321358607/1388083264509575239/Screenshot_82.png?ex=685fb0c7&is=685e5f47&hm=3de6a7dceb740955b90e0ac76d7e912ca9982b04d1b08e9fb8c63d34a9213ff9&=&format=webp&quality=lossless&width=1603&height=902)
![ArcadeVault Screenshot](https://media.discordapp.net/attachments/1238915463321358607/1388083264849449082/Screenshot_83.png?ex=685fb0c7&is=685e5f47&hm=6a0ef5ef88e294368b5dd54520b48264edfd1bc44f0a2bae84e933612d9979fa&=&format=webp&quality=lossless&width=1768&height=737)
![ArcadeVault Screenshot](https://media.discordapp.net/attachments/1238915463321358607/1388083265243578506/Screenshot_84.png?ex=685fb0c7&is=685e5f47&hm=03325af9bb30fb733f4303e901cf4e72168103902d88b3d7a36577642821ff4e&=&format=webp&quality=lossless&width=1603&height=902)
![ArcadeVault Screenshot](https://cdn.discordapp.com/attachments/1238915463321358607/1388083265604157521/Screenshot_2025-06-23_115527.png?ex=685fb0c7&is=685e5f47&hm=2297963532e556343063d3b29996b1cf327567ceb0ca726eebe1ed7fa568c89e&)
![ArcadeVault Screenshot](https://media.discordapp.net/attachments/1238915463321358607/1388083266141032478/Screenshot_85.png?ex=685fb0c7&is=685e5f47&hm=e98cbd59ba49e366cd9ee03c10a19db6ecbae84dcc311d74ccfdbbcdc701e56a&=&format=webp&quality=lossless&width=1603&height=902)
![ArcadeVault Screenshot](https://media.discordapp.net/attachments/1238915463321358607/1388083266460057650/Screenshot_2025-06-23_180225.png?ex=685fb0c8&is=685e5f48&hm=94cdb30f11ca1a35f10c6e6ad75decdae4ae5e0fcbf6694c5977afd64d7b320f&=&format=webp&quality=lossless)
![ArcadeVault Screenshot](https://media.discordapp.net/attachments/1238915463321358607/1388083266757595216/Screenshot_2025-06-23_180338.png?ex=685fb0c8&is=685e5f48&hm=80b1b867ad08f57369af12c07adcf0e4fecfb9ccff9c48b3cb3e968e386370b0&=&format=webp&quality=lossless)

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
