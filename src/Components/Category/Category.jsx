import axios from "axios";
import { useState } from "react";

const Category = () => {
  const [input, setinput] = useState("");
  const [item, setitem] = useState([]);

  const additem = () => {
    if (!input) {
      alert("input some value here");
    } else {
      setitem([...item, input]);
      setinput("");
    }
  };

  const deleteitem = (id) => {
    const updateitem = item.filter((ele, index) => {
      return index !== id;
    });
    setitem(updateitem);
  };
  const removeAll = () => {
    setitem([]);
  };

  return (
    <>
      <div>
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
              <h1 className="text-grey-darkest">Todo List</h1>
              <div className="flex mt-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add Todo"
                  value={input}
                  onChange={(e) => setinput(e.target.value)}
                />
                <button
                  onClick={additem}
                  className="flex-no-shrink p-2 border-2 rounded text-teal border-teal  hover:bg-teal"
                >
                  Add
                </button>
              </div>
            </div>
            <div>
              {item.map((ele, index) => {
                return (
                  <div className="flex mb-4 items-center" key={index}>
                    <p className="w-full text-grey-darkest">{ele}</p>
                    <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded  text-green border-green hover:bg-green">
                      Done
                    </button>
                    <button
                      onClick={() => deleteitem(index)}
                      className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red  hover:bg-red"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}

              <div
                onClick={removeAll}
                className="flex items-center justify-center border px-2 py-2 bg-blue-700 text-white cursor-pointer"
              >
                <button>Delete All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
