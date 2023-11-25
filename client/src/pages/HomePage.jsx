const HomePage = () => {
  return (
    <section className='w-full h-full flex flex-col bg-slate-800 rounded-sm items-center justify-center p-36'>
      <header className='header-container'>
        <h1 className='text-2xl font-bold font-mono p-16 mt-20'>
          Welcome to the TASK MANAGER{' '}
        </h1>
      </header>
      <main className='text-main-container'>
        <div className='text-container'>
          <p className='font-mono text-xl p-2'>
            This is a simple task manager application that allows you to add,
            edit, and delete tasks. You can also mark tasks as complete, pending
            or In Progress.
          </p>

          <p className='font-mono text-xl p-2 text-center m-20'>
            To get started, click on the &quot;Register Button&quot;.
          </p>
        </div>
      </main>
    </section>
  );
};

export default HomePage;
