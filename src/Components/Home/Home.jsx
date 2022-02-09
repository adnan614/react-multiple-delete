import { useEffect, useState } from "react/cjs/react.development";
import ProductCard from "../Product/ProductCard";
import axios from "axios";

//npm i axios

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const [getData, setData] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);
  console.log(getData);

  return (
    <>
      <div>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Get Data From Api
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {/* {getData.map((data, index) => (
                <ProductCard
                  imgSrc={data.completed}
                  title={data.title}
                  color={data.id}
                  price={data.userId}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
