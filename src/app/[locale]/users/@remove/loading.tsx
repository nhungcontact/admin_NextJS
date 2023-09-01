"use client";

import LoadingOverlay from "@/components/shared/LoadingOverlay";

export type UserRemoveLoadingProps = object;

function UserRemoveLoading({}: UserRemoveLoadingProps) {
  return <LoadingOverlay open />;
}

export default UserRemoveLoading;
