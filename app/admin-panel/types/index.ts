// app/admin-panel/types/index.ts
export enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

export enum UserStatus {
  Active = "active",
  Inactive = "inactive",
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
}
