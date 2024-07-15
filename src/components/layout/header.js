import Link from 'next/link';

function Header({ children }) {
  return (
    <div>
      <header className="flex items-center justify-between p-4" style={{maxWidth: "1336px", margin: "0 auto"}}>
        <div className="flex items-center">
          <h2 className="text-3xl font-bold">
            <Link href="/">TravelLux</Link>
          </h2>
        </div>
        {children}
      </header>
    </div>
  );
}

export default Header;
