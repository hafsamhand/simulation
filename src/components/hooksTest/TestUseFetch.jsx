import useFetch from "./useFetch";

const TestUseFetch = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>Todo {item.id} : {item.name}</p>;
        })}
    </>
  );
};

export default TestUseFetch