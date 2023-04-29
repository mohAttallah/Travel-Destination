export default function Tours({data}) {
  return (
    <>
      {data.map((iteam) => {
        return (
          <div>
            {/* <p>ID :{iteam.id}</p> */}
            <p>Name :{iteam.name}</p>
            {/* <p>Info :{iteam.info}</p> */}
            <img src={iteam.image} alt={iteam.name} />
            {/* <p>Price {iteam.price}</p> */}
            <hr />
          </div>
        );
      })}
    </>
  );
}
