import Link from 'next/link';

const Menu = () => {
  return (
    <nav>
      {/* Menu pour écrans larges */}
      <ul className="hidden md:flex space-x-6 text-white">
        <li>
          <Link href="/" className="cursor-pointer hover:text-gray-300">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/film" className="cursor-pointer hover:text-gray-300">
            Films
          </Link>
        </li>
        <li>
          <Link href="/serie" className="cursor-pointer hover:text-gray-300">
            Séries
          </Link>
        </li>

      </ul>

      {/* Menu mobile */}
      <div className="md:hidden flex justify-between items-center">
        <button className="text-white">☰</button> {/* Icône hamburger */}
      </div>
    </nav>
  );
};

export default Menu;
