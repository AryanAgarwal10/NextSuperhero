import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";

function Navbar() {
  return (
    <nav className="navbar container">
      <Link href="/" legacyBehavior>
        <a className='navbar-brand'>SuperHero identity</a>
      </Link>
      <Link href="/add" legacyBehavior>
        <MDBBtn>New Identity</MDBBtn>
      </Link>
    </nav>
  );
}

export default Navbar;
