import { Sidebar, Navbar } from ".";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
      {/* Footer */}
    </>
  );
};
