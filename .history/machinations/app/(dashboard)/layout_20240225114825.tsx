interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <main className="h-full">
    <div></div>{children}</main>;
};

export default DashboardLayout;
