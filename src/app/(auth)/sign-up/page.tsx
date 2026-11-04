
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  UserRound,
  Mail,
  LockKeyhole,
  Image as ImageIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const userData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      image: formData.get("image") as string,
      password: formData.get("password") as string,
    };

    // Sign Up API
    const { data, error } = await authClient.signUp.email({
      email: userData.email,
      password: userData.password,
      name: userData.name,
      image: userData.image,
      callbackURL: "/sign-in",
    });

    if (error) {
      toast.error(error.message);
      console.log(error.message);
      return;
    }

    if (data) {
      toast.success("Account created successfully!");

      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/sign-in");
          },
        },
      });
    }
  };

const handleGoogleSignUp = async () => {
  const { error } = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
    errorCallbackURL: "/sign-up",
  });

  if (error) {
    toast.error(error.message);
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 dark:bg-slate-950">

      <Card className="w-full max-w-md overflow-hidden border-slate-200 bg-white shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">

        <CardHeader className="space-y-4 px-6 pt-8 text-center sm:px-8">

          {/* Logo Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
            <UserRound size={30} />
          </div>

          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Join <span className="text-orange-600">Kindora</span>
            </CardTitle>

            <CardDescription className="text-sm leading-6 text-slate-500 dark:text-slate-400">
              Create your account and become part of a better community.
            </CardDescription>
          </div>

        </CardHeader>

        <CardContent className="px-6 pb-8 sm:px-8">

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">

            {/* Name */}
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="font-semibold text-slate-700 dark:text-slate-200"
              >
                Full Name
              </Label>

              <div className="relative">
                <UserRound className="absolute left-3 top-3 h-4 w-4 text-slate-400" />

                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="border-slate-200 pl-10 focus-visible:ring-orange-500 dark:border-slate-700"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="font-semibold text-slate-700 dark:text-slate-200"
              >
                Email Address
              </Label>

              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="border-slate-200 pl-10 focus-visible:ring-orange-500 dark:border-slate-700"
                  required
                />
              </div>
            </div>

            {/* Profile Image */}
            <div className="space-y-2">
              <Label
                htmlFor="image"
                className="font-semibold text-slate-700 dark:text-slate-200"
              >
                Profile Image URL
              </Label>

              <div className="relative">
                <ImageIcon className="absolute left-3 top-3 h-4 w-4 text-slate-400" />

                <Input
                  id="image"
                  name="image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="border-slate-200 pl-10 focus-visible:ring-orange-500 dark:border-slate-700"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="font-semibold text-slate-700 dark:text-slate-200"
              >
                Password
              </Label>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-3 h-4 w-4 text-slate-400" />

                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="border-slate-200 px-10 focus-visible:ring-orange-500 dark:border-slate-700"
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 transition hover:text-orange-600"
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
              className="h-11 w-full bg-orange-600 font-semibold text-white shadow-sm transition hover:bg-orange-700"
            >
              Create Account
            </Button>

          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <Separator className="flex-1 bg-slate-200 dark:bg-slate-700" />

            <span className="text-xs font-medium text-slate-400">
              OR CONTINUE WITH
            </span>

            <Separator className="flex-1 bg-slate-200 dark:bg-slate-700" />
          </div>

          {/* Google Login */}
          <Button
            type="button"
            variant="outline"
            className="h-11 w-full gap-3 border-slate-200 font-semibold text-slate-700 transition hover:border-orange-200 hover:bg-orange-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            onClick={handleGoogleSignUp}
          >
          
            <svg viewBox="0 0 48 48" className="h-5 w-5">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.47 13.72 17.74 9.5 24 9.5Z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.24 5.48-4.7 7.18l7.27 5.64c4.24-3.91 7.47-9.68 7.47-17.29Z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24 24 0 0 0 0 21.56l7.98-6.19Z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.9-5.81l-7.27-5.64c-2.02 1.35-4.6 2.15-8.63 2.15-6.26 0-11.53-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
              />
            </svg>

            Continue with Google
          </Button>

          {/* Sign In Link */}
          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Already have an account?{" "}

            <Link
              href="/sign-in"
              className="font-semibold text-orange-600 transition hover:text-orange-700 hover:underline"
            >
              Sign In
            </Link>
          </p>

        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
