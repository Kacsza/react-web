
const Container = ({ children }) => {
  return (
    <div 
      className="relative bg-slate-600 flex flex-col items-center w-1/3 h-1/3 mx-auto my-12 p-6 rounded-2xl shadow-lg text-white justify-center"
    >
      {children}
    </div>
  );
};

export default Container;
