import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
// export default function ModalDelete({
//   deleteText,
//   confirmDelete,
//   closeDeleteModal,
//   deleteModalIsOpen,
// }) {

const ModalDelete = ({ deleteText, confirmDelete, closeDeleteModal, deleteModalIsOpen }) => {
  return (
    <Transition appear show={deleteModalIsOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeDeleteModal}
      >
        <div className="min-h-screen px-4 text-center bg-gray-900 bg-opacity-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex flex-col h-full justify-between sm:mt-0 sm:col-span-2">
                <div className="flex justify-center items-center text-center py-16 px-6">
                  <div className="">
                    {/* <Image src="/WarningCircle.svg" height={80} width={80} alt="warning" /> */}
                    <h2 className="text-3xl my-4 text-red-500 font-semibold">Delete Item</h2>
                    <p className="text-gray-400">{deleteText}</p>
                  </div>
                </div>
                <div className="py-6 px-6 border-t border-gray-50">
                  <div className="flex flex-row justify-between ">
                    <button
                      className="w-2/5 px-10 py-3 rounded-md bg-gray-50 text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                      onClick={closeDeleteModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="w-2/5 px-10 py-3 rounded-md bg-red-500 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                      onClick={confirmDelete}
                    >
                      Delete!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalDelete;
