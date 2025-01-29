import ArrowrightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="text-center md:text-left relative overflow-hidden z-0  bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl ">
          <div className=" absolute inset-0 -z-20 opacity-5 " style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            
         <div>
          <h2 className="font-serif text-2xl md:text-3xl ">Let's create something together</h2>
          <p className="text-sm mt-2 md:text-base">
            Ready to bring your next project to life? let's connect and discuss how i can help you achieve your goals
          </p>
          </div>
          <div>
        
          <button className="text-white border border-gray-950 w-max bg-gray-900 inline-flex gap-2 items-center px-6 h-12 rounded-xl">
            <span className="font-semibold ">Contact me</span>
            <ArrowrightIcon className="size-4" />
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
