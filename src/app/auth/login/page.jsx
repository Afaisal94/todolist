"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });
    if (res?.error) {
      setIsError(true);
      setIsLoading(false);
    }
    if (res?.url) {
      router.push(res?.url, { scroll: false });
    }
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-120">
        <h1 className="text-2xl font-semibold mb-6 text-center">TODO LIST</h1>
        {isError ? (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-5 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">Email / Password is wrong.</span>
          </div>
        ) : null}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label>Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
        <p className="text-center m-3">Don't have account? <Link href="/auth/register" style={{color: 'blue'}}>Register</Link></p>
      </div>
    </div>
  );
}

export default Login;
