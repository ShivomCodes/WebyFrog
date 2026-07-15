"use client";

import { useState } from "react";
import { loginAdmin } from "../actions/auth";

export default function LoginPage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const result = await loginAdmin(formData);
    
    if (result && result.error) {
      setError(result.error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-dvh bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-surface-container-lowest border-[4px] border-on-background neo-shadow p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8 border-b-[3px] border-on-background pb-4">
          <span className="material-symbols-outlined text-4xl text-primary font-black">lock</span>
          <h1 className="text-[28px] md:text-[32px] font-black uppercase leading-none" style={{ fontFamily: "var(--font-display)" }}>
            Auth
          </h1>
        </div>
        
        {error && (
          <div className="bg-primary-container text-on-primary-container p-4 border-[3px] border-on-background neo-shadow-sm font-bold mb-6 text-[12px] uppercase tracking-widest" style={{ fontFamily: "var(--font-label)" }}>
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-3">
            <label className="text-[12px] font-black uppercase block tracking-widest text-on-surface-variant" style={{ fontFamily: "var(--font-label)" }}>
              Username
            </label>
            <input
              name="username"
              type="text"
              required
              className="w-full bg-background border-[3px] border-on-background p-4 text-[16px] focus:bg-primary-container/10 focus:outline-none transition-colors"
              placeholder="OPERATIVE ID"
              style={{ fontFamily: "var(--font-body)" }}
            />
          </div>
          <div className="space-y-3">
            <label className="text-[12px] font-black uppercase block tracking-widest text-on-surface-variant" style={{ fontFamily: "var(--font-label)" }}>
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="w-full bg-background border-[3px] border-on-background p-4 text-[16px] focus:bg-primary-container/10 focus:outline-none transition-colors"
              placeholder="PASSCODE"
              style={{ fontFamily: "var(--font-body)" }}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-container text-on-primary-container text-[16px] md:text-[20px] font-black uppercase border-[3px] border-on-background py-4 hard-pop flex justify-center items-center gap-4 group transition-all touch-target disabled:opacity-50"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {isLoading ? "VERIFYING..." : "ENTER SYSTEM"}
            {!isLoading && (
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                login
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
