import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar /> {/* Your sidebar component */}
        <main className="flex-1 p-6">
          <div className="h-full w-full">
            <Card className="h-full w-full">
              <CardHeader>
                <CardTitle>
                  <SidebarTrigger /> Admin Panal
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
