export interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  video?: string;
  align?: 'left' | 'right';
}

function Card({ title, description, icon, video, align }: CardProps) {
  return (
    <div
      className={`flex items-center flex-col sm:flex-row ${align === 'right' ? 'sm:flex-row-reverse' : ''} mb-24 w-full justify-between text-center sm:mb-8 sm:text-left`}
    >
      <div className="flex w-[90%] mb-12 sm:w-[450px] flex-col items-center sm:items-start 2xl:w-[36rem] sm:mx-36 2xl:mx-48">
        <i className='flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 2xl:h-20 2xl:w-20'>
          {icon}
        </i>
        <div>
          <h4 className='my-4 text-3xl font-extrabold sm:text-5xl 2xl:text-5xl'>
            <span className='block text-primary-900'>{title}</span>
          </h4>
          <p className='text-lg text-gray-600 sm:text-left 2xl:text-xl'>{description}</p>
          
        </div>
      </div>
      <video controls className='w-[80%] sm:w-[15rem] 2xl:w-[36rem] sm:mx-36 2xl:mx-48'>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Card;
