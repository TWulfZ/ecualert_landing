import { useState, useEffect } from 'react';
import Item from '@/assets/Header/Item';
import LogoSvg from '@/assets/Header/LogoSvg';

// ID hook
function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = sectionIds.map(id => {
      const element = document.getElementById(id);
      if (!element) {
        return null;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.5 } // Ajusta este valor según necesites
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}

// scroll hook
function useHeaderVisibility() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return isVisible;
}


function Header() {
  const sectionIds = ['home', 'info', 'download', 'features', 'contact'];
  const activeSection = useActiveSection(sectionIds);
  const isVisible = useHeaderVisibility();

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 
      transform transition-transform duration-1000 ease-in-out
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <nav className='bg-white px-4 py-1 sm:py-4 lg:px-6'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
          <LogoSvg />
          <div className='flex items-center lg:order-2'></div>
          <div className='hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto' id='mobile-menu-2'>
            <ul className='mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8'>
              <Item href='/#home' active={activeSection === 'home'}>
                Home
              </Item>
              <Item href='/#info' active={activeSection === 'info'}>Informacion</Item>
              <Item href='/#download' active={activeSection === 'download'}>Descargar</Item>
              <Item href='/#features' active={activeSection === 'features'}>Caracteristicas</Item>
              <Item href='/help' active={activeSection === 'help'}>Ayuda</Item>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;