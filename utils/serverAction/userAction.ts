// flag this
"use server";

import { createClient } from "../supabas/server";

// user login

// login function
export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
  }) => {
    
  try {
    // initialize the login with with email and passord
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log("res: ",data);
    
    if (error) {
      //   return the error
      return { status: error.status, message: error.message };
    }
  } catch (error) {
    //   return the error

    return { status: 500, message: "Something went wrong " };
  }
};
