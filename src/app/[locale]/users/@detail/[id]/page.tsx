import UserDetail from "@/components/users/UserDetail";
import React from "react";

type UserDetailPageProps = {
  params: {
    id: string;
  };
};

function UserDetailPage({ params }: UserDetailPageProps) {
  return <UserDetail userId={params.id} />;
}

export default UserDetailPage;
