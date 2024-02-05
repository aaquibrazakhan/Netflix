const Title = ({ title, desc }) => {
  return (
    <div className=" px-10 w-screen aspect-video bg-gradient-to-r from-black absolute pt-20 text-white">
      <h1 className="text-6xl font-bold py-12">{title}</h1>
      <p className="w-1/4 text-lg line-clamp-4">{desc}</p>
      <div className="flex space-x-4 mt-3">
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          ▶️ Play
        </button>
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
         ℹ️ Info
        </button>
      </div>
    </div>
  );
};

export default Title;
