export interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function Card({ title, description, children }: CardProps) {
  return (
    <div className='flex w-96 flex-col items-center'>
      <i className='flex h-20 w-20 items-center justify-center rounded-full bg-primary-600 2xl:h-24 2xl:w-24'>
        {children}
      </i>
      <div>
        <h4 className='my-4 text-3xl font-extrabold sm:text-3xl 2xl:text-4xl'>
          <span className='block text-primary-900'>{title}</span>
        </h4>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
