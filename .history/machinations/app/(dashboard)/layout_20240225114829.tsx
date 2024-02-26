interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <main className="h-full">
    <div>{children}</div></main>;
};

export default DashboardLayout;
