interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <main className="">{children}</main>;
};

export default DashboardLayout;
