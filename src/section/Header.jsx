import Nav from "../components/Nav";

function Header() {
  return (
    <header className="max-w-[1020px] flex items-center mx-auto px-5 mt-3 sticky top-0 z-50 backdrop-blur-md rounded-full">
      <Nav />
    </header>
  );
}

export default Header;
