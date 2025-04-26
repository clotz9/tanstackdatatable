import { UserRole, UserStatus, User } from "../types";

export const filterRoles = [
  "All" as const,
  UserRole.Admin,
  UserRole.Editor,
  UserRole.Viewer,
];
export const filterStatus = [
  "All" as const,
  UserStatus.Active,
  UserStatus.Inactive,
];

export const usersData: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: UserRole.Admin,
    status: UserStatus.Active,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: UserRole.Editor,
    status: UserStatus.Active,
  },
  {
    id: 3,
    name: "Peter Jones",
    email: "peter.jones@example.com",
    role: UserRole.Viewer,
    status: UserStatus.Inactive,
  },
  {
    id: 4,
    name: "Mary Brown",
    email: "mary.brown@example.com",
    role: UserRole.Admin,
    status: UserStatus.Active,
  },
  {
    id: 5,
    name: "David Lee",
    email: "david.lee@example.com",
    role: UserRole.Editor,
    status: UserStatus.Inactive,
  },
  {
    id: 6,
    name: "Susan White",
    email: "susan.white@example.com",
    role: UserRole.Viewer,
    status: UserStatus.Active,
  },
];
