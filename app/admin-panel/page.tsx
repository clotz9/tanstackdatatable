export const revalidate = 60; //cache page every 60 seconds

import { User } from "./components/data-table/columns";
import { filterRoles, filterStatus } from "./utils/data";

import Layout from "./components/layout";
import MainContent from "./components/main-content";
import { ThemeProvider } from "./components/dark-mode-toggle";

//call users from api
async function getData(): Promise<User[]> {
  const isBuilding = process.env.NEXT_PHASE === "phase-production-build";

  // checking if we are in build mode
  if (isBuilding) {
    console.log("Skipping API call during build...");
    return [];
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const res = await fetch(`${apiUrl}/admin-panel/api/users`, {
    next: { revalidate: 60 }, //cached for 60 seconds
  });

  // handle errors if api call fails
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export default async function AdminPanel() {
  const data = await getData();

  return (
    <ThemeProvider>
      <Layout>
        <MainContent
          data={data}
          filterRoles={filterRoles}
          filterStatus={filterStatus}
        />
      </Layout>
    </ThemeProvider>
  );
}
