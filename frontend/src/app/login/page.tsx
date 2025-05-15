import LoginForm from "@/components/login-form";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800">Acme Health</h1>
          <p className="mt-2 text-slate-600">
            Sign in to access your patient dashboard
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
