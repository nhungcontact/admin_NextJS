import UserContainer from "@/components/users/UserContainer";
import { assertRole } from "@/utils/session";
import React from "react";

export type UserLayoutProps = {
  children: React.ReactNode;
  list: React.ReactNode;
  detail: React.ReactNode;
  edit: React.ReactNode;
  remove: React.ReactNode;
  create: React.ReactNode;
};

async function UserLayout({
  children,
  list,
  detail,
  edit,
  remove,
  create,
}: UserLayoutProps) {
  const [, user] = await assertRole(undefined, { returnResult: true });

  if (!user) {
    return (
      <div
        style={{
          margin: "auto",
          marginTop: 100,
          width: 500,
          textAlign: "center",
          color: "red",
        }}
      >
        <strong>Please Login!</strong>
      </div>
    );
  }

  return (
    <>
      <UserContainer
        header={children}
        left={list}
        right={detail}
      />
      {edit}
      {remove}
      {create}
    </>
  );
}

export default UserLayout;
