// app/admin/layout.tsx
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* No public headers/footers here */}
        <div className="flex min-h-screen">
          {/* Example Sidebar */}
          <aside className="w-64 bg-gray-900 text-white p-4">
            <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
            <nav className="space-y-2">
              <a href="/admin" className="block hover:underline">
                Dashboard
              </a>
              <a href="/admin/users" className="block hover:underline">
                Users
              </a>
              <a href="/admin/products" className="block hover:underline">
                Products
              </a>
            </nav>
          </aside>
          <main className="flex-1 p-6 bg-gray-50">{children}</main>
        </div>
      </body>
    </html>
  );
}
