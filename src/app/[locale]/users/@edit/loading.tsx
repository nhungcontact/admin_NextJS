"use client";

import LoadingOverlay from "@/components/shared/LoadingOverlay";

export type UserEditLoadingProps = object;

function UserEditLoading({}: UserEditLoadingProps) {
  return <LoadingOverlay open />;
}

export default UserEditLoading;
