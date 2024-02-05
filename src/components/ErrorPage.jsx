const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page not found</p>
        <p className="text-lg">The page you are looking for might be under construction or doesn't exist.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
