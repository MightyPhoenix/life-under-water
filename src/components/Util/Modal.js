export const Modal = ({
  isOpen = false,
  close,
  title = `default`,
  children,
}) => {
  return (
    <>
      {/* overlay */}
      <div
        id="modal_overlay"
        className={`${
          !isOpen ? `hidden` : ``
        } absolute inset-0 h-screen w-full grid`}
        style={
          isOpen
            ? { background: "rgba(0,0,0,0.4)", placeItems: "center" }
            : { placeItems: "center" }
        }
      >
        {/* modal */}
        <div
          id="modal"
          className={`${
            isOpen ? `opacity-0 -translate-y-full scale-150` : ``
          } transform relative w-10/12 md:w-1/2 h-1/2 md:h-3/4 bg-white rounded shadow-lg transition-opacity transition-transform duration-300`}
        >
          {/* header */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
          </div>
          {/* body */}
          <div className="w-full p-3 m-5">{children}</div>
          {/* footer */}
          <div className="bottom-0 left-0 px-4 py-3 border-t border-gray-200 w-full grid grid-flow-col gap-5 ml-auto" style={{width:"25%",gap:"1.5rem"}}>
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none">
              Save
            </button>
            <button
              onClick={close}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
