const Page404 = () => {
  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      <h1 className="font-bold text-8xl text-orange-500">Gifter</h1>
      <h2 className="font-bold text-9xl text-orange-500 drop-shadow-[0_0_20px_rgba(255,255,255,1)] -translate-y-10">
        404
      </h2>
      <a
        href={'/'}
        className="p-4 px-6 text-orange-500 rounded-lg text-lg border-2 border-orange-500 hover:text-white hover:bg-orange-500 "
      >
        Main Page
      </a>
    </main>
  );
};

export default Page404;
