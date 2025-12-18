"use client"
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import PhoneIcon from '@mui/icons-material/Phone';
import contactData, { ContactType } from "@/data/contacts";

export default function Contact(){
  return (
    <div id="contact" className="app-container flex flex-col py-12 min-h-screen bg-(--intro-desc) xl:rounded-t-xl">
      <div className='flex-1'>
        <h2 className='text-center font-semibold text-2xl xl:text-3xl text-gray-400'>Contacts</h2>
        <div className="grid grid-cols-1 gap-4 w-4/5 mx-auto mt-20 md:grid-cols-2">
          {
            contactData.map((item,index) => (
              <div 
                key={`c-${index}`} 
                className='flex justify-center items-center mx-auto'
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className='m-4'><Icon type={item.type} /></div>
                <div style={{width:200}}><a href={item.type == 'email' ? `mailto:${item.link}` : item.link} className='text-gray-400' >{item.link.replace("https://www.","")}</a></div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

function Icon({type}:{type:ContactType}){
  const size = "large";
  const className = 'text-gray-400'
  switch(type){
    case 'x':         return <XIcon fontSize={size} className={className} />;
    case 'youtube':   return <YouTubeIcon fontSize={size} className={className} />;
    case 'instagram': return <InstagramIcon fontSize={size} className={className} />;
    case 'linkedin':  return <LinkedInIcon fontSize={size} className={className} />;
    case 'facebook':  return <FacebookIcon fontSize={size} className={className} />;
    case 'email':     return <MailIcon fontSize={size} className={className} />;
    case 'phone':     return <PhoneIcon fontSize={size} className={className} />;
    default: return null;
  }
}
