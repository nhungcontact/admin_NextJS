"use client";

import ErrorDialog from "@/components/errors/ErrorDialog";
import { useRouter } from "next-intl/client";

type UserDetailErrorProps = {
  error: Error;
};

function UserDetailError({ error }: UserDetailErrorProps) {
  const router = useRouter();

  return (
    <ErrorDialog
      open
      error={error}
      onClose={router.back}
    />
  );
}

export default UserDetailError;
