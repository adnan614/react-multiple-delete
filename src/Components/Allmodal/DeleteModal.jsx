import react from "react";

const DeleteModal = () => {
  return (
    <div class="max-w-2xl mx-auto shadow-md rounded-md mt-10">
      <div class="bg-green-400 rounded-t-md">
        <div class=" flex flex-col h-56 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 mb-3 bg-white rounded-full text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h1 class="text-4xl text-white font-bold">Congratulation </h1>
        </div>
      </div>
      <div class="text-center py-8">
        <p class="font-serif mb-12 text-xl">
          Well Done!, you actually managed to accomplish something today...
        </p>

        <button class="bg-green-400 font-bold px-5 py-2 rounded-lg text-white text-xl">
          cancel
        </button>
        <button class="bg-red-600 font-bold px-5 py-2 rounded-lg text-white text-xl">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
