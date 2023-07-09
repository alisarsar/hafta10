import useVericek from "./useVericek";

const Kullanicilar = ()=>{
    //https://jsonplaceholder.typicode.com/users

    const [data] = useVericek("https://jsonplaceholder.typicode.com/users");

    return (
        <>
            {data &&
            data.map((item) => {
                return <p key={item.id}>{item.name}</p>;
            })}
        </>
    )
}

export default Kullanicilar