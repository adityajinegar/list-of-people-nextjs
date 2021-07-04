export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = res.json();

  const paths = data.map((shinobi) => {
    return {
      params: { id: shinobi.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

const Details = () => {
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
};

export default Details;
