import { Sidebar } from "./_components";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">{children}</div>
    </main>
  );
};

export default DashboardLayout;
