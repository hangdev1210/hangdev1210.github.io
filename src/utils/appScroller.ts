import { scroller, animateScroll } from 'react-scroll';

type SectionId = 'works' | 'educations' | 'home' | 'contact';

export function scrollToSection(id:SectionId){
  if(id == "home"){
    scrollToTop();
    return;
  }
  scroller.scrollTo(id, {
    duration: 500, 
    smooth: true,
    offset: 0,
  });
}

function scrollToTop(){
  animateScroll.scrollToTop();
}