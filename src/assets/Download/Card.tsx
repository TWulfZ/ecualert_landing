import Android from '../icons/Android';

export interface CardProps {
  title: string;
  description: string;
  txt_btn: string;
  onDownloadClick: () => void;
}

function Card({ title, description, txt_btn, onDownloadClick }: CardProps) {
  return (
    <div className='mr-0'>
      <div className=''>
        <div className='z-20 mx-auto px-4 py-12 sm:w-[500px] sm:px-6 lg:px-8'>
          <h2 className='mb-8 text-center text-6xl font-extrabold text-primary-50 sm:text-left sm:text-7xl'>
            <span className='mt-8 block'>{title}</span>
          </h2>
          <p className='text-bal mx-auto mt-4 max-w-md text-center text-xl text-primary-100 sm:text-left'>
            {description}
          </p>
          <div className='text-center lg:mt-0 lg:flex-shrink-0 sm:text-left '>
            <div className='mt-12 inline-flex rounded-md shadow lg:mt-8'>
              <button
                type='button'
                onClick={onDownloadClick}
                className='flex w-full items-center gap-4 rounded-2xl bg-primary-50 px-8 py-6 text-2xl font-bold text-primary-900 shadow-md transition duration-200 ease-in hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-primary-300 sm:text-2xl lg:py-4 2xl:text-3xl'
              >
                <Android className='ml-2 size-12' />
                {txt_btn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
