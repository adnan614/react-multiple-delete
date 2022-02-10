import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalDelete from "../Allmodal/Modaldelete";

//npm i axios

const GetOperation = () => {
  const url = "https://61efe154732d93001778e670.mockapi.io/crud";
  const [getData, setData] = useState([]);

  // for delete modal
  const [deleteDataId, setDeleteDataId] = useState("");
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  // const [stateCustomer, setCustomerState] = useState([]);

  // console.log(getData);

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       // console.log(res);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [url]);
  // console.log(getData);

  // get data from api
  const loadUsers = async () => {
    const res = await axios.get(url);
    let user = res.data;
    setData(
      user.map((d) => {
        return {
          select: false,
          id: d.id,
          email: d.email,
          fName: d.fName,
          lName: d.lName,
          country: d.country,
          address: d.stAddress,
        };
      })
    );
  };

  //  console.log(getData);

  //   useEffect(() => {
  //   console.log(getData);
  // }, []);

  useEffect(() => {
    loadUsers();
  }, []);

  // for delete data by modal
  const openDeleteModal = (id) => {
    setDeleteDataId(id);
    setDeleteModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteDataId("");
    setDeleteModalIsOpen(false);
  };

  const deleteUser = async () => {
    // console.log('true');
    let arrayids = [];
    getData.map((d) => {
      if (d.select) {
        arrayids.push(d.id);
      }
    });
  
    // console.log(arrayids);
    await axios.delete(
      `https://61efe154732d93001778e670.mockapi.io/crud/${arrayids}`
    );
    loadUsers();
  };

  return (
    <>
      <div>
        <div className="bg-white p-8 rounded-md w-full container mx-auto mt-20">
          <div className=" flex items-center justify-between pb-6">
            <div>
              <h2 className="text-gray-600 font-semibold">Products Oder</h2>
              <span className="text-xs">All products item</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex bg-gray-50 items-center p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <input
                  className="bg-gray-50 outline-none ml-1 block "
                  type="text"
                  name=""
                  id=""
                  placeholder="search..."
                />
              </div>
              <div className="lg:ml-40 ml-10 space-x-8">
                <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                  New Report
                </button>
                <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                  Create
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <button className="px-3 bg-red-400 py-2" onClick={deleteUser}>
                  Delete Customer
                </button>
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            let value = e.target.checked;
                            setData(
                              getData.map((d) => {
                                d.select = value;
                                return d;
                              })
                            );
                          }}
                        />
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Frist Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Last Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Email Address
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Country
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Street Address
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getData.map((data, index) => {
                      return (
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              checked={data.select}
                              onChange={(e) => {
                                let value = e.target.checked;

                                setData(
                                  getData.map((sd) => {
                                    if (sd.id === data.id) {
                                      // console.log('true');
                                      sd.select = value;
                                    }
                                    return sd;
                                  })
                                );
                              }}
                            />
                          </td>

                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {data?.fName}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {data?.lName}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {data?.email}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {data?.country}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden=""
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">
                                {data?.stAddress}
                              </span>
                            </span>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex space-x-3">
                              <Link to={"/delete/" + data.id}>
                                <button>Edit</button>
                              </Link>
                              <button onClick={() => openDeleteModal(data.id)}>
                                Delete
                              </button>

                              <Link to={"/edit/" + data.id}>
                                <button>Edit</button>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Showing 1 to 4 of 50 Entries
                  </span>
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                      Prev
                    </button>
                    &nbsp; &nbsp;
                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalDelete
          closeDeleteModal={closeDeleteModal}
          deleteModalIsOpen={deleteModalIsOpen}
          confirmDelete={deleteUser}
          deleteText="Are you sure you want to delete this item?"
        />
      </div>
    </>
  );
};
export default GetOperation;
