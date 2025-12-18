"use client"
import { scrollToSection } from '@/utils/appScroller';

export default function AppNavigation(){
  return (
    <div className='fixed top-0 left-0 w-full z-100'>
      <div className="app-container">
        <nav className="w-full bg-gray-100 py-2 px-4 h-[40px] rounded-b-xl">
          <div className='w-full flex justify-center'>
            <ul className="text-gray-800">
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('works')}>Works</a></li>
              <li><a onClick={() => scrollToSection('educations')}>Educations</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}