import { useEffect, useState } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon, LockClosedIcon } from '@heroicons/react/16/solid';
import env from '@/env/index';

interface AlertProps {
  onClose: () => void;
}

function Alert({ onClose }: AlertProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputKey, setInputKey] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    let timer: number;
    if (status === 'success') {
      timer = setTimeout(() => {
        closeAlert();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [status]);

  const closeAlert = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  };

  const handleDownload = () => {
    const correctKey = env.password;
    const downloadLink = env.url;
    if (inputKey === correctKey) {
      setStatus('success');
      window.location.href = downloadLink;
    } else {
      setStatus('error');
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
        onClick={closeAlert}
      ></div>
      <div
        className={`w-64 rounded-2xl bg-white p-4 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="h-full w-full text-center">
          <div className="flex h-full flex-col justify-between">
            {status === 'idle' && <LockClosedIcon className="mx-auto size-12 text-primary-600" />}
            {status === 'success' && <CheckCircleIcon className="mx-auto size-12 text-primary-600" />}
            {status === 'error' && <ExclamationCircleIcon className="mx-auto size-12 text-red-600" />}
            <p className="mt-4 text-xl font-bold text-gray-800">Descargar APK</p>
            <p className="px-6 py-2 text-xs text-gray-600">
              {status === 'idle' && 'Ingresa la clave de descarga'}
              {status === 'success' && 'Clave correcta. Descargando...'}
              {status === 'error' && 'Clave incorrecta. Intenta de nuevo.'}
            </p>
            <input
              type="text"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="Ingresa la clave"
            />
            <div className="mt-8 flex w-full items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleDownload}
                className="w-full rounded-lg bg-primary-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-200"
              >
                Descargar
              </button>
              <button
                type="button"
                onClick={closeAlert}
                className="w-full rounded-lg bg-white px-4 py-2 text-center text-base font-semibold text-gray-900 shadow-md transition duration-200 ease-in hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-200"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;