import React from "react";
import Header from "@/components/sections/header";
import Image from "next/image";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
        <div className="flex min-h-screen flex-col bg-slate-50">
          <Header />
          <div className="flex flex-1 container pt-[160px] pb-12 gap-8 px-4 lg:px-8 max-w-[1400px] mx-auto">
            <aside className="w-64 hidden lg:block">
            <div className="mb-8 flex items-center gap-3 px-3">
              <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                <Image src="/logo.png" alt="Lapzen" width={40} height={40} className="w-10 h-10 object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-navy">Lapzen</span>
            </div>
            <nav className="flex flex-col gap-2 sticky top-24">
            <a href="/admin" className="p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all font-medium text-navy">Dashboard</a>
            <a href="/admin/inventory" className="p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all font-medium text-navy">Inventory</a>
            <a href="/admin/orders" className="p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all font-medium text-navy">Sales Orders</a>
            <a href="/admin/users" className="p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all font-medium text-navy">Users</a>
          </nav>
        </aside>
        <main className="flex-1 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          {children}
        </main>
      </div>
    </div>
  );
}
