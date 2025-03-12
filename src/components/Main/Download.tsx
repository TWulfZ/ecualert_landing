import CardDownload from '@/assets/Download/Card';
import type { CardProps } from '@/assets/Download/Card';
import './Download.css';
import Phone from '@/assets/Download/Phone';
import { useState } from 'react';
import Alert from '@/assets/Download/Alert';

function Download() {
  const [showAlert, setShowAlert] = useState(false);

  const handleDownloadClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const CardDownloadProps: CardProps = {
    title: 'Descarga Ecualert',
    description:
      'No esperes a que ocurra una emergencia para estar preparado. Descarga Ecualert ahora y únete a la revolución de la seguridad comunitaria en Ecuador.',
    txt_btn: 'Descargar',
    onDownloadClick: handleDownloadClick,
  };

  return (
    <div
      className='bg-image-dwn z-1 flex h-[800px] w-full items-center justify-evenly sm:h-[600px] sm:pr-[18rem] 2xl:h-[900px] 2xl:pr-[32rem]'
      id='download'
    >
      <Phone />
      <CardDownload {...CardDownloadProps} />
      {showAlert && (
        <Alert
          onClose={handleCloseAlert}
        />
      )}
    </div>
  );
}

export default Download;
