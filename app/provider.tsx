"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import axios from "axios";

function Provider({ children }: { children: React.ReactNode }) {
  const { data } = useSession();

  const createNewUser = async () => {
    const result = await axios.post("/api/user", {});
  };

  useEffect(() => {
    data?.user?.email && createNewUser();
  }, [data]);

  return <div>{children}</div>;
}

export default Provider;
