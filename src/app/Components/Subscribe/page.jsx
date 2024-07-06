const Subscribe = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between bg-cyan-800 ">
      <div className="flex flex-1  flex-col p-10 sm:p-16">
        <p className="m-2 text-xl text-white">| Latest News</p>
        <p className=" text-2xl sm:text-5xl text-white font-bold">
          Subscribe for the<br></br> Exclusive Updates!
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center ">
  <div className="relative p-5 sm:p-10 flex items-center ">
    <input type="text" className=" w-[300px] sm:w-[440px] px-5 py-4 pr-20 rounded-xl outline-none border-none"  placeholder="Enter your Email"/>
    <button className="absolute right-12 top-1/2 transform bg-cyan-800 -translate-y-1/2 bg-purble-600 text-white px-4 py-2 rounded hover:bg-cyan-950">
      Subscribe
    </button>
  </div>
</div>
    </div>
  );
};

export default Subscribe;
