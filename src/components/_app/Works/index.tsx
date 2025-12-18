import worksData from '@/data/works';

export default function Works(){
  return (
    <div id="works" className='my-4'>
      <div className='app-container px-2 xl:px-0'>
        <h2 className='text-center font-semibold text-2xl xl:text-3xl mb-8'>Works</h2>
        <div className='grid grid-cols-2 gap-3 xl:gap-6'>
          {
            worksData.map((item,index) => (
              <div 
                key={`works-${index}`}
                data-aos="fade-in"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div className='w-full aspect-4/3 overflow-hidden rounded-lg xl:rounded-xl'>
                  <img src={item.img}  alt={item.name} className='w-full h-full object-cover'/>
                </div>
                <h3 className='text-center py-2 text-sm xl:text-base font-semibold'>{item.name}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}