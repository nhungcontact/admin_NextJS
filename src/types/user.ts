import { ListOptions } from "./shared";

export enum UserRole {
  Admin = "admin",
  Manager = "manager",
  Member = "member",
}

export interface User {
  _id: string;
  displayName: string;
  username: string;
  email: string;
  tel: string;
  avatar: string;
  role: UserRole;
}

export interface WithPassword {
  password: string;
}

export interface WithToken {
  at: string;
  rt: string;
}

export type UserCreateInput = Omit<User, "id" | "avatar">;

export type UserUpdateInput = Partial<UserCreateInput>;

export type UserFilterParams = ListOptions<User>;
