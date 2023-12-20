/* eslint-disable react/prop-types */
const Button = ({ children }) => {
  return (
    <button
      className='rounded bg-white px-2 py-1 text-xs font-semibold
           text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-indigo-500 hover:text-white'>
      {children}
    </button>
  );
};

export default Button;
