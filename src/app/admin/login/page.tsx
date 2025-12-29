"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        // Force a full page reload to the admin dashboard
        // This ensures the middleware picks up the new cookie
        window.location.href = "/admin";
      } else {
        setError(data.error || "Invalid password");
        setLoading(false);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-6">
            <Image src="/logo.png" alt="Lapzen" width={48} height={48} className="w-12 h-12 object-contain" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-navy mb-2">Admin Portal</h1>
          <p className="text-slate-500">Enter the security password to access the dashboard</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy/5 focus:border-navy transition-all placeholder:text-slate-400 text-navy"
                  placeholder="••••••••"
                  required
                />
              </div>
              {error && <p className="mt-2 text-sm text-red-500 font-medium">{error}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-navy text-#00172E py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-navy/90 transition-all disabled:opacity-70 group"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Access Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center mt-8 text-sm text-slate-400">
          Secure access protected by Lapzen Security
        </p>
      </div>
    </div>
  );
}
