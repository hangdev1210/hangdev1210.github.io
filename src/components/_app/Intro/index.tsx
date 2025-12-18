import { WEBSITE_NAME } from "@/constant";

export default function Intro(){
  return (
    <div className="py-4">
      <div className="app-container">
        <div className="bg-black overflow-hidden xl:rounded-2xl">
          <div className="relative about">
            <div className="flex flex-row-reverse">
              <div className="photo w-[45%] overflow-hidden">
                <img src="/img/about.jpg" alt="OwnStory" className="object-cover w-full" />
              </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 desc">
              <div className="w-[55%] h-full flex flex-col justify-center px-10 text-slate-50">
                  <h1 className="text-xl md:text-3xl font-bold mb-4">{WEBSITE_NAME}</h1>
                  <p className="text-xs md:text-base">This is the website for you to share yourself for career, social or something that you want to memory.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}