const Layout = ({ children }) => (
  <div className="layout">
    {children}
  </div>
);

const MyReactPage = () => {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
};

export default MyReactPage;
