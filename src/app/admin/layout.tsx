// app/admin/layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { IUser } from "@/types";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const cookieStore = cookies();
  // const token = (await cookieStore).get("token")?.value;
  // const { user, auth } = useAuth();
  // const [userData, setUserData] = useState<IUser>(null); // Keep as object
  // const [isAdmin, setIsAdmin] = useState(false);

  // useEffect(() => {
  //   if (auth && user) {
  //     try {
  //       // Handle both string and object cases
  //       const retrievedUser =
  //         typeof user === "string" ? JSON.parse(user) : user;
  //       setUserData(retrievedUser);
  //       setIsAdmin(userData?.isAdmin || false);
  //     } catch (e) {
  //       console.error("Error parsing user data:", e);
  //       setIsAdmin(false);
  //     }
  //   } else {
  //     setIsAdmin(false);
  //   }

  //   if (!isAdmin) {
  //     redirect("/login");
  //   }
  // }, [user, auth]);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="h-full w-full">
            <Card className="h-full w-full">
              <CardHeader>
                <CardTitle>
                  <SidebarTrigger /> Admin Panel
                </CardTitle>
              </CardHeader>
              <CardContent>{children}</CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
