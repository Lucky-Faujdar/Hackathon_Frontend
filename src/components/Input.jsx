const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-1">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-red-900" />
      </div>
      <input
        {...props}
        className="w-full pl-10 py-2 my-1 bg-zinc-500 text-white border-white bg-opacity-50 rounded-lg border focus:border-b focus:ring-2 focus:ring-black  placeholder-white transition duration-200"
      />
    </div>
  );
};
export default Input;
