import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen w-full  text-content flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back 👋</h1>
          <p className=" mt-1">Use the demo credentials below to sign in.</p>
        </div>

        <div className="rounded-2xl bg-base-300 p-6">
          <button
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-base-100 text-base-content hover:bg-white/90 active:scale-[.99] transition px-4 py-2.5 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-5 w-5"
            >
              <path
                fill="#FFC107"
                d="M43.611 20.083H42V20H24v8h11.303C33.676 32.663 29.179 36 24 36 16.82 36 11 30.18 11 23S16.82 10 24 10c3.59 0 6.84 1.37 9.31 3.59l5.66-5.66C35.89 4.53 30.28 2 24 2 11.85 2 2 11.85 2 24s9.85 22 22 22 22-9.85 22-22c0-1.47-.15-2.9-.389-3.917z"
              />
              <path
                fill="#FF3D00"
                d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 14 24 14c3.59 0 6.84 1.37 9.31 3.59l5.66-5.66C35.89 4.53 30.28 2 24 2 16.318 2 9.656 6.061 6.306 14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24 46c5.113 0 9.76-1.955 13.292-5.146l-6.147-5.2C29.682 37.586 26.955 38.5 24 38.5 18.842 38.5 14.358 35.19 12.705 30.673l-6.49 5.002C9.523 41.75 16.138 46 24 46z"
              />
              <path
                fill="#1976D2"
                d="M43.611 20.083H42V20H24v8h11.303C33.676 32.663 29.179 36 24 36c-7.18 0-13-5.82-13-13s5.82-13 13-13c3.59 0 6.84 1.37 9.31 3.59l5.66-5.66C35.89 4.53 30.28 2 24 2 11.85 2 2 11.85 2 24s9.85 22 22 22 22-9.85 22-22c0-1.47-.15-2.9-.389-3.917z"
              />
            </svg>
            Continue with Google
          </button>

          <div className="relative my-6 text-center">
            <span className="px-2 text-xs uppercase tracking-widest   relative z-10">
              or
            </span>
            <div className="absolute inset-0 top-1/2 border-t border-white/10" />
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium ">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="mt-1 w-full rounded-xl bg-base-200 border border-none focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-400/30 outline-none px-4 py-2.5 placeholder:text-slate-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium ">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  className="w-full rounded-xl bg-base-200 border border-none focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-400/30 outline-none px-4 py-2.5 pr-12 placeholder:text-slate-500"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 my-1 mr-1 px-3 rounded-lg  focus:outline-none"
                >
                  Show
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="inline-flex items-center gap-2 text-sm ">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/10 bg-slate-900/60"
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-sm text-indigo-300 hover:text-indigo-200 underline underline-offset-2"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-indigo-500 hover:bg-indigo-400 active:scale-[.99] transition text-white font-semibold px-4 py-2.5"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-sm ">
            Don’t have an account?{" "}
            <button className="text-indigo-300 hover:text-indigo-200 underline underline-offset-2">
              Create one
            </button>
          </p>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          * This is just a design mockup. No authentication is implemented.
        </p>
      </div>
    </div>
  );
}
