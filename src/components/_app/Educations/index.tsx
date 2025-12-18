import educationsData from "@/data/educations";
import { isEven } from "@/utils/math";
import { delay } from "@/utils/common";

export default function Educations(){
  return (
    <div id="educations" className="my-8">
      <div className="app-container">
        <h2 className='text-center font-semibold text-2xl xl:text-3xl mb-8'>Educations</h2>
        <div className="edu bg-gray-100 p-4 xl:rounded-lg">
          {
            educationsData.map((item, index) => (
              <div 
                key={`education-${index}`} 
                className="flex"
              >
                <div className="flex-1">
                  { isEven(index) && <Item {...item} dir="l" index={index} /> }
                </div>
                <div className="flex justify-center px-6"><div className="h-full bg-gray-300 edu-line" /></div>
                <div className="flex-1">
                  { !isEven(index) && <Item {...item} dir="r" index={index} /> }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

function Item(props:{
  index:number;
  year:string;
  name:string;
  course:string;
  dir:'l' | 'r';
}){
  const classDir = props.dir == 'l' ? 'text-right' : 'text-left';

  return (
    <div 
      className={`py-6 text-gray-700 ${classDir}`}
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-delay={delay(props.index+1)}
      data-aos-once="true"
    >
      <div className="text-3xl font-semibold text-gray-300 mb-1">{props.year}</div>
      <h3 className="text-xl font-semibold">{props.name}</h3>
      <p className="text-sm">{props.course}</p>
    </div>
  )
}