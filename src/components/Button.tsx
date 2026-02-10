type ButtonType = {
  value: string;
  type?: 'basic' | 'danger' | 'warning';
};

const Button = ({value, type = 'basic'}: ButtonType) => {
  const baseClasses = "block w-full p-2 text-center transition-all duration-500 ease-in-out";
  let bgClasses = "";
  switch (type) {
    case 'danger':
      bgClasses = "bg-red-500 hover:bg-red-700";
      break;
    case 'warning':
      bgClasses = "bg-yellow-500 hover:bg-yellow-700";
      break;
    default:
      bgClasses = "bg-stone-500 hover:bg-stone-700";
      break;
  }
  return (
    <button className={`${baseClasses} ${bgClasses}`}>
      {value}
    </button>
  );
};

export default Button;
