import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white md:py-4 w-full">
      <nav className="container md:mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li className="text-xl font-semibold bg-red-100 text-blue-600">
            <Link href="/passenger">All Passengers</Link>
          </li>
          <li className="text-xl font-semibold bg-yellow-50 text-green-500">
            <Link href="/flight">Flights</Link>
          </li>
          <li className="text-xl font-semibold bg-emerald-200 text-purple-700">
            <Link href="/contact">Bookings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;