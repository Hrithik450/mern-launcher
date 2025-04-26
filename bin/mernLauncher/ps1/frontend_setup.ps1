Set-Location -Path frontend

npm create vite@latest .
npm install axios react-router-dom tailwindcss @tailwindcss/vite

New-Item -ItemType Directory -Path "src/components/auth","src/components/common","src/components/home","src/components/layout" | Out-Null
New-Item -ItemType Directory -Path "src/hooks","src/pages/Auth","src/pages/Home","src/pages/NotFound","src/routes","src/store/slices/auth","src/utils" | Out-Null
New-Item -ItemType File -Path "src/pages/Auth/login.jsx","src/pages/Home/home.jsx","src/pages/NotFound/notFound.jsx" | Out-Null
New-Item -ItemType File -Path "src/store/slices/auth/authSlice.jsx","src/store/slices/auth/authThunks.jsx" | Out-Null
New-Item -ItemType File -Path "src/routes/adminRoute.jsx","src/routes/appRoute.jsx","src/routes/index.jsx","src/routes/privateRoute.jsx" | Out-Null
New-Item -ItemType File -Path "src/store/store.jsx" | Out-Null
New-Item -ItemType File -Path ".env" | Out-Null

@'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
'@ | Set-Content -Path "vite.config.js" -Encoding utf8

"@import `"tailwindcss`";" | Set-Content -Path "src\index.css"
"body {background-color: rgba(0, 0, 0, 0.7); color: white;}" | Set-Content -Path "src/App.css" -Encoding utf8

@'
import "./App.css";
import { AppRoutes } from "./routes";

function App() {
  return <AppRoutes />;
}

export default App;
'@ | Set-Content -Path "src/App.jsx" -Encoding utf8

@'
import React from "react";

const Home = () => {
  return (
    <div className="p-6 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-4">
        Thanks For Choosing CodeEase Packages
      </h2>
      <p className="text-center max-w-2xl">
        We provide ready-to-use development packages that simplify coding and
        enhance efficiency. From authentication to payment integrations, we make
        development faster and hassle-free.
      </p>

      <div className="relative w-full max-w-3xl mt-10 text-center">
        <div className="bg-gray-700 text-white font-semibold py-2 px-6 rounded-md inline-block">
          Explore Our Premium Packages
        </div>

        <div className="grid grid-cols-3 gap-10 mt-10">
          {[
            {
              title: "Built-in Authentication",
              code: "npx secure-auth@1.0.0",
              img: "https://res.cloudinary.com/duozomapm/image/upload/v1740422740/package1-image_ds0gme.jpg",
              description: "Pre-configured login with JWT & OAuth support.",
            },
            {
              title: "Payment Gateway",
              code: "npx quickpay@1.0.0",
              img: "https://res.cloudinary.com/duozomapm/image/upload/v1740422740/Screenshot_2025-02-25_002520_rssieh.png",
              description: "Seamless Stripe, PayPal & Razorpay integration.",
            },
            {
              title: "Error Simplifier",
              code: "npx error-ease@1.0.0",
              img: "https://res.cloudinary.com/duozomapm/image/upload/v1740422740/package-3image_yofjxj.jpg",
              description: "Automatic error handling & user-friendly messages.",
            },
          ].map((pkg, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white shadow-md p-4 rounded-lg w-60">
                <h2 className="text-lg font-bold">{pkg.title}</h2>
                <img
                  src={pkg.img}
                  alt=""
                  className="h-32 w-full object-cover rounded"
                />
                <h2 className="text-gray-600 text-sm bg-gray-200 px-2 py-1 rounded font-mono text-sm mt-2">
                  <code>{pkg.code}</code>
                </h2>
                <p className="text-gray-800 text-sm mt-2">{pkg.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
'@ | Set-Content -Path "src\pages\Home\home.jsx" -Encoding utf8

@'
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center p-6">
      <img
        src="https://res.cloudinary.com/duozomapm/image/upload/v1739505711/ErrorImage_xydo7l.png"
        alt="404 Error"
        className="mb-6 max-w-lg w-full"
      />
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-lg bg-red-500 hover:bg-red-600 text-white rounded-md transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
'@ | Set-Content -Path "src\pages\NotFound\notFound.jsx" -Encoding utf8

@'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home.jsx";
import NotFound from "../pages/NotFound/notFound.jsx"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
'@ | Out-File -FilePath "src/routes/appRoute.jsx" -Encoding utf8

'export { default as AppRoutes } from "./appRoute";' | Set-Content -Path "src\routes\index.jsx" -Encoding utf8

Set-Location -Path ..