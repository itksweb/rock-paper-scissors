const Modal = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
      <div className=" bg-white flex max-sm:h-full flex-col max-sm:items-center max-sm:justify-evenly gap-10 p-10 rounded-md relative ">
        {children}
      </div>
    </div>
  );
};

const Rules = ({ setShowRules }) => {
  return (
    <Modal>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl">RULES</h2>
        <img
          src="images/icon-close.svg"
          alt="close icon"
          className="max-sm:hidden size-5"
          onClick={() => setShowRules(false)}
        />
      </div>
      <img src="images/image-rules.svg" alt="rules image" className="" />
      <img
        src="images/icon-close.svg"
        alt="close icon"
        className="sm:hidden size-5"
        onClick={() => setShowRules(false)}
      />
    </Modal>
  );
};

export default Rules;
