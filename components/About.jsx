import DevImg from './DevImg'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
   User2,
   MailIcon,
   HomeIcon,
   PhoneCall,
   GraduationCapIcon,
   Calendar,
   Briefcase,
} from 'lucide-react'

const infoData = [
   {
      icon: <User2 size={20} />,
      text: 'Daniel Breix',
   },
   {
      icon: <PhoneCall size={20} />,
      text: ' 0661440310',
   },
   {
      icon: <MailIcon size={20} />,
      text: 'Daniel Breix',
   },
   {
      icon: <Calendar size={20} />,
      text: 'Daniel Breix',
   },
   {
      icon: <GraduationCapIcon size={20} />,
      text: 'Daniel Breix',
   },
   {
      icon: <HomeIcon size={20} />,
      text: 'Daniel Breix',
   },
]

const qualificationData = [
   {
      title: 'education',
      data: [
         {
            University: 'AK University',
            Qualification: 'Master',
            Years: '2019-2021',
         },
         {
            University: 'Brook University',
            Qualification: 'Master',
            Years: '2020-2022',
         },
         {
            University: 'AK University',
            Qualification: 'Master',
            Years: '2021-2023',
         },
      ],
   },
   {
      title: 'experiance',
      data: [
         {
            University: 'PPC',
            Qualification: 'Frontend',
            Years: '2019-2021',
         },
         {
            University: 'Pksf',
            Qualification: 'Tech Lead',
            Years: '2020-2022',
         },
         {
            University: 'GOOGLE',
            Qualification: 'Senior',
            Years: '2021-2023',
         },
      ],
   },
]

const skillData = [
   {
      title: 'skills',
      data: [
         {
            name: 'HTML CSS',
         },
         {
            name: 'JAVA SCRIPT ',
         },
         {
            name: 'REACT',
         },
         {
            name: 'BACK END ',
         },
      ],
   },
   {
      title: 'tools',
      data: [
         {
            imgPath: '/about/vscode.svg',
         },
         {
            imgPath: '/about/figma.svg',
         },
         {
            imgPath: '/about/notion.svg',
         },
         {
            imgPath: '/about/wordpress.svg',
         },
      ],
   },
]

const About = () => {
   const getData = (arr, title) => {
      return arr.find((item) => item.title === title)
   }
   return (
      <section className="xl:h-[860px] pb-12 xl:py-24">
         <div className="container mx-auto ">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
               About me
            </h2>
            <div className="flex  flex-col xl:flex-row">
               <div className="hidden xl:flex flex-1 relative">
                  <DevImg
                     containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                     imgSrc="/about/developer.png"
                  />
               </div>
               {/* Tabs */}
               <div className="flex-1">
                  <Tabs defaultValue="personal">
                     <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none ">
                        <TabsTrigger
                           value="personal"
                           className="w-[162px] xl:w-auto"
                        >
                           Personal Info
                        </TabsTrigger>
                        <TabsTrigger
                           value="qualifications"
                           className="w-[162px] xl:w-auto"
                        >
                           Qualifications
                        </TabsTrigger>
                        <TabsTrigger
                           value="skills"
                           className="w-[162px] xl:w-auto"
                        >
                           Skills
                        </TabsTrigger>
                     </TabsList>

                     {/* Tabs content */}
                     <div className="text-lg mt-12 xl:mt-8">
                        <TabsContent value="personal">
                           Personal Info
                        </TabsContent>
                        <TabsContent value="qualifications">
                           Qualifications
                        </TabsContent>
                        <TabsContent value="skills">Skills</TabsContent>
                     </div>
                  </Tabs>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
