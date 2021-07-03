import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vel
        error, voluptatum iste ipsam aut sunt nobis dolore, voluptas repellendus
        ab eligendi? Ipsum harum deserunt architecto odit illo exercitationem
        itaque!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vel
        error, voluptatum iste ipsam aut sunt nobis dolore, voluptas repellendus
        ab eligendi? Ipsum harum deserunt architecto odit illo exercitationem
        itaque!
      </p>
      <Link href="/Listings">
        <a>See Aditya Listing</a>
      </Link>
      <Footer></Footer>
    </div>
  );
}
