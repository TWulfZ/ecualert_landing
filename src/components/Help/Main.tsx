import CardHelp from '@/assets/Help/Card';
import type { CardProps as CardHelpProps } from '@/assets/Help/Card';
import { EnvelopeIcon, MapIcon, MapPinIcon, UserPlusIcon } from '@heroicons/react/16/solid';
import { videoRoutes } from '@/assets/Help/video/paths';

function Features() {
  const classCards = 'size-10 text-white 2xl:size-12';
  const cardsHelp: CardHelpProps[] = [
    {
      title: '¿Cómo registrarme e iniciar sesión?',
      description:
        'Como crear una cuenta e iniciar sesión para tener acceso a la aplicacion, notificaciones, alertas de contacto y mucho mas.',
      icon: <UserPlusIcon className={classCards} />,
      video: videoRoutes.loggin,
    },
    {
      title: '¿Olvidaste tu contraseña?',
      description:
        '¿Olvidaste tu contraseña? Te enseñamos como reestablecerla. Utiliza la seccion "Olvide mi contraseña" y te enviaremos un correo para reestablecerla.',
      icon: <EnvelopeIcon className={classCards} />,
      video: videoRoutes.pass_forget,
      align: 'right',
    },
    {
      title: '¿Como envió una alerta?',
      description:
        'Para enviar una alerta, recuerda tener habilitada tu ubicación GPS. Si no la tienes activa, no podras enviar alertas. Cierra y vuelve a abrir la aplicación sino tenias activa tu ubicación.',
      icon: <MapPinIcon className={classCards} />,
      video: videoRoutes.alerts,
    },
    {
      title: '¿Como funciona el mapa de alertas?',
      description:
        'Puedes ver el mapa de alertas y seleccionar una ubicación para ver quien la envio y a que hora.Las alertas solo aparecen las 24 horas despues de la hora actual, ¿No me actualiza el mapa? Dirigete a la seccion de reportes y dale a "Refrescar". ¿Quiero ver una alerta mas antigua? En la seccion de reportes puedes ver el historial de alertas, y seleccionar el icono de ubicacion, te dirigira a esa alerta.',
      icon: <MapIcon className={classCards} />,
      video: videoRoutes.map,
      align: 'right',
    } /*
    {
      title: 'Notificaciones Push',
      description:
        'Esta poderosa herramienta te conecta instantáneamente con tu comunidad, creando una red de alertas. ¿Ves algo sospechoso? Con solo un toque, alertas a tus vecinos y a quienes puedan ayudar.',
      icon: <BellAlertIcon className={classCards} />,
      btn_text: 'Saber más',
      image: routes.notification,
    },*/,
  ];
  return (
    <>
      <div
        className='mx-auto mt-12 px-4 py-12 text-center text-gray-600 lg:w-[1000px] lg:py-16 2xl:w-[1800px] 2xl:pt-10'
        id='help'
      >
        <h3 className='mb-8 text-4xl font-extrabold sm:text-6xl 2xl:text-6xl'>
          <span className='block text-primary-900'>¿Necesitas ayuda con la App?</span>
        </h3>
        <p className='mx-auto max-w-7xl text-lg 2xl:text-[1.35rem]'>
          Bienvenido a la sección de ayuda de Ecualert, la aplicación móvil que está transformando la seguridad
          comunitaria en Ecuador. Aquí encontrarás una serie de videos instructivos diseñados para ayudarte a aprovechar
          al máximo todas las funciones de nuestra innovadora alarma comunitaria.
        </p>
      </div>
      <div className='mt-6 flex flex-col items-center justify-center gap-10 sm:flex-wrap sm:items-start lg:mt-10 2xl:gap-20'>
        {cardsHelp.map((card, index) => (
          <CardHelp
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            video={card.video}
            align={card.align}
          />
        ))}
      </div>
    </>
  );
}

export default Features;
