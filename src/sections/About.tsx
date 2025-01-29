import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg"
import Reacticon from "@/assets/icons/react.svg"
import NextIcon from "@/assets/icons/next.svg"
import DockerIcon from "@/assets/icons/docker_1.svg"
import KuberIcon from "@/assets/icons/Kubernetss.svg"
import Java from "@/assets/icons/java_1.svg"
import Node from "@/assets/icons/node.svg"
import TchIcon from "@/components/TchIcon";
import mapImage from "@/assets/images/mapImage.png"
import simileEmoji from "@/assets/images/memoji-smile.png"
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";


const toolBoxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon
  },
  {
    title: 'React',
    iconType: Reacticon
  },
  {
    title: 'Next',
    iconType: NextIcon
  },
  {
    title: 'Node ',
    iconType: Node
  },
  {
    title: 'Java',
    iconType: Java
  },
  {
    title: 'Kubernetes ',
    iconType: KuberIcon
  },
  {
    title: 'Docker',
    iconType: DockerIcon
  },

]

const hoobles = [
  {
    title: 'traveling',
    emoji: '🚀',
    left: '5%',
    top: '5%',

  },
  {
    title: 'photogrophy',
    emoji: '📷',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Hiking',
    emoji: '🏞️',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '70%',
    top: '45%',
  },
  {
    title: 'WeightLifting',
    emoji: '🏋️',
    left: '5%',
    top: '65%',
  },

]

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me " title="A glimpse Into My World" description="Learn more about who I am , What I do, what inspired me" />
        <div className="mt-20 flex flex-col  gap-8  ">
          <div className="md:grid md:grid-cols-5 lg:grid-cols-3 md:gap-8">


            <Card className="h-[320px] md:col-span-2 lg:col-span-1 ">
              <CardHeader title="My Reads" description="explore the books shaping my perspectives" />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book Cover" />

              </div>

            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2 mt-6 md:mt-0">
              <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digitial experiences"
                className="px-6 pt-6"
              />

              <ToolBoxItems className="mt-6 " items={toolBoxItems} />
              <ToolBoxItems className="mt-6 " itemsWrapperClasssName="-translate-x-1/2" items={toolBoxItems} />


            </Card>
          </div>
          <div className="md:grid md:grid-cols-5  md:gap-8 lg:grid-cols-5 ">
          <Card className="h-[320px] p-0 flex flex-col col-span-3  lg:col-span-3 ">
            <CardHeader title="Beyond the Code" description=" Explore my Interest and hobbies beyond the digital realm" className="px-6 py-6" />

            <div className="relative flex-1">
              {hoobles.map(hobby => (
                <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute " style={{
                  left: hobby.left,
                  top: hobby.top
                }}>
                  <span className="font-medium text-gray-950 ">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}

            </div>

          </Card>
          <div className="pt-8 md:p-0">

          <Card className="h-[320px] md:w-[360px] p-0 relative col-span-2 lg:col-span-2">
            <Image src={mapImage} alt="map image" className="h-full w-full object-cover object-left-top " />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2
            after:outline-offset-2  after:rounded-full after:outline-gray-950/30 ">

              <Image className="size-20" src={simileEmoji} alt="map image" />

            </div>
          </Card>
          </div>

          
          </div>
        </div>
      </div>
    </div>
  )


};
