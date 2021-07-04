import Link from "next/link";
import styles from "../../styles/Shinobis.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      shinobis: data,
    },
  };
};

const List = ({ shinobis }) => {
  return (
    <div>
      {shinobis.map((shinobi) => (
        <Link href={`/ShinobiListings/${shinobi.id}`} key={shinobi.id}>
          <a className={styles.single}>
            <h3>{shinobi.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default List;
