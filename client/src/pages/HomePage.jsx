const HomePage = () => {
  return (
    <section
      className='w-full h-100dvh flex flex-col
     bg-white rounded-sm items-center justify-center p-26 text-center'>
      <header className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold font-mono p-6 mt-20 mb-1  text-black'>
          Welcome to ...{' '}
        </h1>
        <img
          className='w-200 mt-0 
          animate-rotate-y animate-twice animate-duration-[3000ms] animate-delay-[350ms] animate-ease-out 
          hover:animate-none'
          src='./src/assets/logo.png'
        />{' '}
      </header>
      <main className='text-main-container'>
        <div className='text-container pl-10 pr-10'>
          <p className='font-mono text-xl p-2 text-center text-black  '>
            This is a simple task manager application that allows you to add,
            edit, and delete tasks. Fell free to manage your todo´s from
            anywhere.
          </p>

          <p className='font-mono text-xl p-2 text-center m-20 text-black'>
            To get started, click on the &quot;Register Button&quot;.
          </p>
        </div>
      </main>
    </section>
  );
};

export default HomePage;
