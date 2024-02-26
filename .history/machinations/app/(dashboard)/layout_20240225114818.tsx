interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <main className="h-fu">{children}</main>;
};

export default DashboardLayout;
