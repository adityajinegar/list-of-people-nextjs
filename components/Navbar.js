import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/AJ.png" alt="AJ" width={100} height={90}></Image>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ShinobiListings">
        <a>Shinobi Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
