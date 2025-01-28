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
import mapImage from "@/assets/images/map.png"


const toolBoxItems=[
  {         
    title:'Javascript',
    iconType:JavascriptIcon
  },
  {
    title:'React',
    iconType: Reacticon
  },
  {
    title:'Next',
    iconType: NextIcon
  },
  {
    title:'Node ',
    iconType:Node
  },
  {
    title:'Docker',
    iconType: DockerIcon
  },
  {
    title:'Java',
    iconType: Java
  },
  {
    title:'Kubernetes ',
    iconType: KuberIcon
  },
]


export const AboutSection = () => {
  return (
    <div>
      <SectionHeader eyebrow="About Me " title="A glimpse Into My World" description="Learn more about who I am , What I do, what inspired me" />
      <div>
        <Card>
          <div>

            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspective</p>
          </div>
          <Image src={bookImage} alt="book Cover"/>
        </Card>
        <Card>
          <div>

            <StarIcon />
            <h3>My Toolbox</h3>
            <p>Explore the technologies and tools I use to craft exceptional digitial experiences</p>
          </div>
          <div >
            {toolBoxItems.map(item=>(
              <div key={item.title}>
                <TchIcon component ={item.iconType}/>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
       
        </Card>
        <Card>
          <div>
            <StarIcon/>
            <h3>Beyond the Code</h3>
            <p>
              Explore my Interest and hobbies beyond the digital realm
            </p>
          </div>

        </Card>
        <Card>
            <Image src={mapImage} alt="map image" />
        </Card>
        
      </div>
    </div>
  )


};
