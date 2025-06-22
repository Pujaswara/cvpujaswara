import { useState, useEffect } from "react";
import { useRouter } from "next/router";
//import Layout from "../components/Layout";


export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ready, setReady] = useState(false);

  // Cek jika sudah login, redirect ke dashboard
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn === "true") {
        router.replace("/dashboard");
      } else {
        setReady(true); // boleh render form login
      }
    }
  }, [router]);

  const handleLogin = () => {
    if (username === "user" && password === "user") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid credentials. Try user/user");
    }
  };

  if (!ready) return null;

  return (
    <main className="flex justify-center items-center min-h-[80vh] px-4 bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="login-box">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <label className="block mb-1 font-medium">Username</label>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <label className="block mb-1 font-medium">Password</label>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button
          onClick={handleLogin}
          className="btn-login"
        >
          Login
        </button>

        {/* Pesan tambahan di bawah tombol */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Try <strong>user/user</strong>
        </p>
      </div>
    </main>
  );
}
