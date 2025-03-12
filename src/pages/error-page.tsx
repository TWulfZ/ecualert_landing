import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='mb-4 text-7xl font-extrabold tracking-tight text-primary-600 lg:text-9xl'>404</h1>
          <p className='mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>Falta aglo.</p>
          <p className='mb-4 text-lg font-light text-gray-500'>
          Lo sentimos, no podemos encontrar esa página. Encontrará mucho que explorar en la página de inicio.{' '}
          </p>
          <a
            href='/'
            className='my-4 inline-flex rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300'
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </section>
  );
}
