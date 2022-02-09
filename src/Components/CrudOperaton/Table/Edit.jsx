import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import axios from "axios";

// get data on api

// mock api url:https://mockapi.io/projects

const Edit = () => {
  const { id } = useParams();
  alert(id);
  // post data on api
  const url = "https://61efe154732d93001778e670.mockapi.io/crud";

  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    country: "",
    stAddress: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    alert("ok");
    e.preventDefault();

    axios.post(url, {
      fName: data.fName,
      lName: data.lName,
      email: data.email,
      country: data.country,
      stAddress: data.stAddress,
    });
    // post data on api end
  };
  const loadUser = async () => {
    const result = await axios.get("https://61efe154732d93001778e670.mockapi.io/crud/" + id);
    console.log(result);
    setData(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <div>
        <div className="container mx-auto px-5 py-10 max-w-4xl shadow-md mt-20">
          <h1 className="text-2xl text-center">Post Data on Api </h1>
          <form onSubmit={handleSubmit} action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md" />
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label for="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    value={data.fName}
                    onChange={handleChange}
                    type="text"
                    name="fName"
                    autocomplete="given-name"
                    className="block border focus:border-indigo-500 focus:ring-indigo-500 mt-1 py-3 rounded-md shadow-sm sm:text-sm w-full"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label for="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    onChange={handleChange}
                    value={data.lName}
                    type="text"
                    name="lName"
                    autocomplete="family-name"
                    className="block border focus:border-indigo-500 focus:ring-indigo-500 mt-1 py-3 rounded-md shadow-sm sm:text-sm w-full"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    for="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    onChange={handleChange}
                    value={data.email}
                    type="text"
                    name="email"
                    autocomplete="email"
                    className="block border focus:border-indigo-500 focus:ring-indigo-500 mt-1 py-3 rounded-md shadow-sm sm:text-sm w-full"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label for="country" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <select
                    onChange={handleChange}
                    value={data.country}
                    name="country"
                    autocomplete="country-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md /shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    for="street-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street address
                  </label>
                  <input
                    onChange={handleChange}
                    value={data.stAddress}
                    type="text"
                    name="stAddress"
                    autocomplete="street-address"
                    className="block border focus:border-indigo-500 focus:ring-indigo-500 mt-1 py-3 rounded-md shadow-sm sm:text-sm w-full"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 sm:px-6 text-right text-white">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md /text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Edit;
