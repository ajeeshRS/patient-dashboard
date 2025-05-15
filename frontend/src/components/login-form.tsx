"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5001/auth/login", {
        email,
        password,
      });
      console.log(response.data);

      if (response.data.success) {
        router.push("/dashboard");
        toast.success(response.data.message);
      }
    } catch (err: any) {
      console.error("Error logging in : ", err);
      if (err) {
        toast.success(err.response.data.error);
      }
    }
  };

  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="pl-3 border border-neutral-300"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-3 border border-neutral-300"
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" className="border border-neutral-300" />
          <Label htmlFor="remember" className="text-sm">
            Remember me
          </Label>
        </div>
        <Button variant="link" className="text-sm text-slate-600 p-0 h-auto">
          Forgot password?
        </Button>
      </div>

      <Button
        onClick={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="w-full bg-black text-white"
      >
        Signin
      </Button>
    </form>
  );
}
