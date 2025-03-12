import { useNavigate } from "react-router-dom";

export interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  btn_text: string;
  image?: string;
  align?: 'left' | 'right';
}

function Card({ title, description, icon, btn_text, image, align }: CardProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`flex items-center flex-col sm:flex-row ${align === 'right' ? 'sm:flex-row-reverse' : ''} mb-24 w-full justify-between text-center sm:mb-0 sm:text-left`}
    >
      <div className="flex w-[90%] sm:w-[450px] flex-col items-center sm:items-start 2xl:w-[36rem] sm:mx-36 2xl:mx-48">
        <i className='flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 2xl:h-20 2xl:w-20'>
          {icon}
        </i>
        <div>
          <h4 className='my-4 text-3xl font-extrabold sm:text-5xl 2xl:text-5xl'>
            <span className='block text-primary-900'>{title}</span>
          </h4>
          <p className='text-lg text-gray-600 sm:text-left 2xl:text-xl'>{description}</p>
          {btn_text && (
            <button
              type='button'
              onClick={() => navigate('/help')}
              className='mt-5 w-auto rounded-full bg-primary-600 px-8 py-6 text-center text-xl font-bold text-white shadow-md transition duration-200 ease-in hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-200 lg:px-6 lg:py-4 lg:text-base'
            >
              {btn_text}
            </button>
          )}
        </div>
      </div>
      <span
        className={`mt-32 w-full
           h-[22rem] sm:h-[30rem] sm:w-[40vw] bg-contain bg-center bg-no-repeat transition-transform duration-500 ease-in-out hover:scale-110 sm:block 2xl:h-[40rem] ${align === 'right' ? 'sm:ml-32' : 'sm:mr-32'}`}
        style={{ backgroundImage: `url(${image})` }}
      ></span>
    </div>
  );
}

export default Card;
