import './Home.css';

function Home() {
  return (
    <div className='bg-image z-1 flex h-[800px] w-full items-center justify-center pb-32 sm:h-[700px] sm:flex-col 2xl:h-[900px]' id="home">
      <div className='mr-0 sm:mr-[35vw]'>
        <div className=''>
          <div className='z-20 mx-auto px-4 py-12 sm:w-[500px] sm:px-6 lg:px-8'>
            <h2 className='mb-8 text-center text-6xl font-extrabold text-black sm:text-left sm:text-7xl dark:text-white'>
              <span className='mt-8 block sm:text-primary-900'>Cuida la seguridad de los tuyos</span>
            </h2>
            <p className='mx-auto mt-4 max-w-md text-center text-xl text-gray-50 sm:text-left sm:text-gray-500'>
              Ecualert es la aplicación móvil que revoluciona la seguridad comunitaria en Ecuador. Con nuestra
              innovadora alarma comunitaria, estarás siempre un paso adelante de cualquier emergencia.
            </p>
            <div className='text-center lg:mt-0 lg:flex-shrink-0'>
              <div className='mt-12 inline-flex rounded-md shadow lg:mt-8'>
                <a href='#download'
                  className='w-full rounded-2xl bg-primary-600 px-8 py-6 text-xl text-center lg:text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-200 lg:px-6 lg:py-4'
                >
                  Descargar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
