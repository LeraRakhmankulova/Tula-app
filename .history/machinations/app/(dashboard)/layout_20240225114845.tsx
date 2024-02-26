import { Sidebar } from "./_components";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl">{children}</div>
    </main>
  );
};

export default DashboardLayout;
