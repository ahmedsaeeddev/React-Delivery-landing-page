const Newsletter = () => {
  return (
    <div className="flex flex-col items-center py-12 px-4 bg-pink-50 sm:flex-row sm:justify-around">
      <div className="text-center sm:text-left">
        <h2 className="text-3xl font-bold text-gray-900">Subscribe our newsletter</h2>
        <p className="text-gray-600 mt-2">
          Browse local restaurants and businesses for delivery by entering your address below.
        </p>
      </div>

      <div className="mt-6 sm:mt-0 sm:ml-6 flex">
        <input
          type="email"
          placeholder="Enter your email address..."
          className="w-full sm:w-auto px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
        />
        <button
          type="button"
          className="px-6 py-2 bg-orange-500 text-white rounded-r-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
