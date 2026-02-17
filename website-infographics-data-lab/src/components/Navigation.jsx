import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/ceraphene', label: 'Ceraphene' },
    { path: '/graffisol', label: 'Graffisol' },
    { path: '/graphacrete', label: 'Graphacrete' },
    { path: '/hdgpe', label: 'HD-G-PE' },
    { path: '/submit', label: '📝 Submit Data' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center space-x-8 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`py-4 px-2 border-b-2 font-semibold text-sm whitespace-nowrap transition-all ${
                isActive(item.path)
                  ? 'border-brand-500 text-white'
                  : 'border-transparent text-gray-300 hover:text-white hover:border-gray-500'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
