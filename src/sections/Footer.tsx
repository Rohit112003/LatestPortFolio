import ArrowrightIcon from "@/assets/icons/arrow-up-right.svg"
export const Footer = () => {
  const footerLinks = [

    {
      title:'LinkedIn',
      href:'https://www.linkedin.com/in/rohit-kumar-454591233/'
    },
    {
      title:'LeetCode',
      href:'https://leetcode.com/u/Rohit_kumar11/'
    },
    {
      title:'Github',
      href:'https://github.com/Rohit112003'
    },
    {
      title:'Instagram',
      href:'https://www.instagram.com/_rohiiiit__/'
    },

  ]
  return <footer className="relative z-10 overflow-x-clip ">
    <div className="absolute  h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

    <div className="container ">
      <div className="border-t gap-8 border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between item-center ">
        <div className="text-white/40 ">&copy; 2024. All rights reserved</div>
        <nav className="flex flex-col md:flex-row items-center gap-8">
          {footerLinks.map(link =>(
            <a key={link.title} className="inline-flex items-center gap-1.5" href={link.href}>
              <span className="font-semibold">{link.title}</span>
              <ArrowrightIcon className="size-4"/>
            </a>
          ))}
          
        </nav>
      </div>
    </div>
  </footer>;
};
