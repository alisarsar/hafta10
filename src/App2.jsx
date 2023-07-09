//custom hook ile kullanımı

import Kullanicilar from "./Kullanicilar";
import useVericek from "./useVericek";

const App2 = () => {
  const [data] = useVericek("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}

        <Kullanicilar />
    </>
  );
};

export default App2