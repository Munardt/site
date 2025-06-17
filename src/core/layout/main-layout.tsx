import { Navbar } from "@/components/navbar/navbar";
import { ToastProvider } from "@heroui/toast";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="flex-grow snap-y snap-mandatory">{children}</main>
      <ToastProvider placement="top-center" maxVisibleToasts={3} />
    </div>
  );
}
