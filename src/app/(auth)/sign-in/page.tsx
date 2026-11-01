
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  UserRound,
  Mail,
  LockKeyhole,
 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const userData = {
    //   name: formData.get("name"),
      email: formData.get("email"),
    //   image: formData.get("image"),
      password: formData.get("password"),
    };

    // console.log(userData);

    // Add your signup API here
    const { data, error } = await authClient.signIn.email({
        email: userData.email as string,
        password: userData.password as string,
        callbackURL: "/",
      });

      if (error) {
        console.log(error.message);
        return;
      }

      if (data) {
        console.log("Sign-in successful:", data);
      }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">

      <Card className="w-full max-w-md border shadow-lg">

        <CardHeader className="space-y-3 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <UserRound size={28} />
          </div>

          <CardTitle className="text-2xl font-bold">
            Join Kindora
          </CardTitle>

          <CardDescription>
           Login to your account and start exploring the world of events with Kindora.
          </CardDescription>

        </CardHeader>

        <CardContent>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            {/* <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>

              <div className="relative">
                <UserRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="pl-10"
                  required
                />
              </div>
            </div> */}

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>

              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Profile Image */}
            {/* <div className="space-y-2">
              <Label htmlFor="image">Profile Image URL</Label>

              <div className="relative">
                <ImageIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                  id="image"
                  name="image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="pl-10"
                  required
                />
              </div>
            </div> */}

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="px-10"
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              Login 
            </Button>

          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">
              OR CONTINUE WITH
            </span>
            <Separator className="flex-1" />
          </div>

          {/* Google Login */}
          <Button
            type="button"
            variant="outline"
            className="w-full gap-3"
            onClick={() => {
              // Add Google Login here
            }}
          >
            <svg viewBox="0 0 48 48" className="h-5 w-5">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.47 13.72 17.74 9.5 24 9.5Z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.24 5.48-4.7 7.18l7.27 5.64c4.24-3.91 7.47-9.68 7.47-17.29Z" />
              <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24 24 0 0 0 0 21.56l7.98-6.19Z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.81l-7.27-5.64c-2.02 1.35-4.6 2.15-8.63 2.15-6.26 0-11.53-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
            </svg>

            Continue with Google
          </Button>

          {/* Sign In Link */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-emerald-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
