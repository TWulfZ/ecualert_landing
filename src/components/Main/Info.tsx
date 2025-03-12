import CardInfo from '@/assets/Info/Card';
import type { CardProps as CardInfoProps } from '@/assets/Info/Card';
import { ArrowDownTrayIcon, MapPinIcon, ShieldCheckIcon } from '@heroicons/react/16/solid';

function Info() {
  const classCards = 'size-12 text-white 2xl:size-16';
  const cardsInfo: CardInfoProps[] = [
    {
      title: 'Notificaciones Push',
      description:
        'Esta poderosa herramienta te conecta instantáneamente con tu comunidad, creando una red de alertas. ¿Ves algo sospechoso? Con solo un toque, alertas a tus vecinos y a quienes puedan ayudar.',
      children: <ArrowDownTrayIcon className={classCards} />,
    },
    {
      title: 'Geolocalización',
      description:
        'La app utiliza tecnología de geolocalización avanzada con alta precisión para identificar rápidamente dónde se necesita ayuda, permitiendo una respuesta más rápida y eficaz.',
      children: <MapPinIcon className={classCards} />,
    },
    {
      title: 'Facilidad de uso',
      description:
        'Lo mejor de todo es su facilidad de uso. Con una interfaz intuitiva y un gran botón de alarma, hasta el miembro menos tecnológico de tu familia podrá pedir ayuda en segundos.',
      children: <ShieldCheckIcon className={classCards} />,
    },
  ];

  return (
    <div
      className='mx-auto px-4 py-12 text-center text-gray-600 lg:w-[1200px] lg:py-16 2xl:w-[1800px] 2xl:pt-10'
      id='info'
    >
      <h3 className='mb-8 text-4xl font-extrabold sm:text-5xl 2xl:text-6xl'>
        <span className='block text-primary-900'>Tu alerta personal en tu Bolsillo</span>
      </h3>
      <p className='mx-auto text-lg max-w-7xl 2xl:text-xl'>
        ¡Imagina tener un guardián personal en tu bolsillo, listo para actuar en segundos! Eso es Ecualert, la
        revolucionaria app que está transformando la seguridad comunitaria en tu ciudad.
      </p>
      <div className='mt-6 flex flex-col text-lg items-center justify-center gap-10 sm:flex-row sm:items-start lg:mt-10 2xl:gap-20'>
        {cardsInfo.map((card, index) => (
          <CardInfo key={index} title={card.title} description={card.description} children={card.children} />
        ))}
      </div>
    </div>
  );
}

export default Info;
