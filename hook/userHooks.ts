"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { login } from "@/utils/serverAction/userAction";

const useUserHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Handle user login
  const handleUSerLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    // display loading ui
    toast.loading("Loading...");

    try {
      const result = await login({ email, password });

      if (result?.status === 200) {
        toast.success("Logged in successfully");
        router.push("/");
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
      toast.dismiss();
    }
  };
  return {
    isLoading,
    error,
    handleUSerLogin,
  };
};

export default useUserHook;
