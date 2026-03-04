import { Link } from 'react-router-dom';

const Header = ({ title, subtitle, accuracy }) => {
  return (
    <header className="gradient-bg text-white shadow-2xl">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
              <p className="text-teal-100 text-lg">{subtitle}</p>
            </Link>
          </div>
          {accuracy && (
            <div className="text-right">
              <div className="inline-block px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                <div className="text-xs uppercase tracking-wider text-teal-200 mb-1">
                  Status
                </div>
                <div className="text-2xl font-bold">{accuracy}% Complete</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
