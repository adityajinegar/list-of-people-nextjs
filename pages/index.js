import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vel
        error, voluptatum iste ipsam aut sunt nobis dolore, voluptas repellendus
        ab eligendi? Ipsum harum deserunt architecto odit illo exercitationem
        itaque!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vel
        error, voluptatum iste ipsam aut sunt nobis dolore, voluptas repellendus
        ab eligendi? Ipsum harum deserunt architecto odit illo exercitationem
        itaque!
      </p>
      <Link href="/Listings">
        <a className={styles.btn}>See Aditya Listing</a>
      </Link>
    </div>
  );
}
