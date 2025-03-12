import CardFeature from '@/assets/Features/Card';
import type { CardProps as CardInfoProps } from '@/assets/Features/Card';
import { BellAlertIcon, EnvelopeIcon, MapIcon, MapPinIcon, UserPlusIcon } from '@heroicons/react/16/solid';
import { routes } from '@/assets/Features/img/paths';

function Features() {
  const classCards = 'size-10 text-white 2xl:size-12';
  const cardsInfo: CardInfoProps[] = [
    {
      title: 'Registro e Inicio de Sesión',
      description:
        'Crea una cuenta o inicia sesión para tener acceso a tus alertas, notificaciones, alertas de contacto y mucho mas.',
      icon: <UserPlusIcon className={classCards} />,
      btn_text: 'Saber más',
      image: routes.loggin,
    },
    {
      title: '¿Olvidaste tu contraseña?',
      description:
        '¿Olvidaste tu contraseña? No hay problema. Enviaremos un correo para reestablecerla cuando ingreses tu correo con el que te registraste o en olvidaste tu contraseña.',
      icon: <EnvelopeIcon className={classCards} />,
      btn_text: 'Saber más',
      image: routes.email,
      align: 'right',
    },
    {
      title: 'Enviando alertas con precisión',
      description:
        'Envia alertas con precisión. Con la tecnología de geolocalización satelital, la app identifica más rapidamente la ubicación de los usuarios y los notifica en tiempo real.',
      icon: <MapPinIcon className={classCards} />,
      btn_text: 'Saber más',
      image: routes.alert,
    },
    {
      title: 'Mapa de alertas',
      description:
        '¿Olvidaste tu contraseña? No hay problema. Enviaremos un correo para reestablecerla cuando ingreses tu correo con el que te registraste o en olvidaste tu contraseña.',
      icon: <MapIcon className={classCards} />,
      btn_text: 'Saber más',
      image: routes.map,
      align: 'right',
    },
    {
      title: 'Notificaciones Push',
      description:
        'Esta poderosa herramienta te conecta instantáneamente con tu comunidad, creando una red de alertas. ¿Ves algo sospechoso? Con solo un toque, alertas a tus vecinos y a quienes puedan ayudar.',
      icon: <BellAlertIcon className={classCards} />,
      btn_text: 'Saber más',
      image: routes.notification,
    },
  ];
  return (
    <div>
      <div className='mx-auto px-4 py-12 text-center text-gray-600 lg:w-[1000px] lg:py-16 2xl:w-[1800px] 2xl:pt-10' id='features'>
        <h3 className='mb-8 text-4xl font-extrabold sm:text-6xl 2xl:text-6xl'>
          <span className='block text-primary-900'>¿Qué tiene Ecualert?</span>
        </h3>
        <p className='mx-auto max-w-7xl text-lg 2xl:text-[1.35rem]'>
          Ecualert es tu aliado inteligente en seguridad comunitaria. Más que una simple aplicación de
          alertas, con tecnología de vanguardia y funciones diseñadas para fortalecer la conexión entre vecinos, Ecualert transforma tu smartphone en una poderosa herramienta de seguridad.
        </p>
      </div>
      <div className='mt-6 flex flex-col items-center justify-center gap-10 sm:flex-wrap sm:items-start lg:mt-10 2xl:gap-20'>
        {cardsInfo.map((card, index) => (
          <CardFeature
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            btn_text={card.btn_text}
            image={card.image}
            align={card.align}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
