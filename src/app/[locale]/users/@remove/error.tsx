"use client";

import ErrorDialog from "@/components/errors/ErrorDialog";
import { useRouter } from "next-intl/client";

type UserRemoveErrorProps = {
  error: Error;
};

function UserRemoveError({ error }: UserRemoveErrorProps) {
  const router = useRouter();

  return (
    <ErrorDialog
      open
      error={error}
      onClose={router.back}
    />
  );
}

export default UserRemoveError;
