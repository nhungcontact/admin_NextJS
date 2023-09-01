"use client";

import ErrorContent from "@/components/errors/ErrorContent";
import React from "react";

type UserDetailErrorProps = {
  error: Error;
};

function UserDetailError({ error }: UserDetailErrorProps) {
  return <ErrorContent error={error} />;
}

export default UserDetailError;
