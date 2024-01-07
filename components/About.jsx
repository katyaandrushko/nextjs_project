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
            university: 'AK University',
            qualification: 'Master',
            years: '2019-2021',
         },
         {
            university: 'Brook University',
            qualification: 'Master',
            years: '2020-2022',
         },
         {
            university: 'AK University',
            qualification: 'Master',
            years: '2021-2023',
         },
      ],
   },
   {
      title: 'experience',
      data: [
         {
            company: 'PPC',
            role: 'Frontend',
            years: '2019-2021',
         },
         {
            company: 'Pksf',
            role: 'Tech Lead',
            years: '2020-2022',
         },
         {
            company: 'GOOGLE',
            role: 'Senior',
            years: '2021-2023',
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
                           <div className="text-center xl:text-left">
                              <h3 className="h3 mb-4">PERSONAL INFORMATION</h3>
                              <p className="subtitle max-w-xl max-auto xl:mx-0">
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Unde et nisi illo architecto
                                 adipisci delectus deleniti minima nostrum?
                                 Alias dolores delectus libero porro amet
                                 asperiores deserunt corporis nesciunt cumque
                                 voluptas.
                              </p>

                              {/* ICONS */}
                              <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                 {infoData.map((item, index) => {
                                    return (
                                       <div
                                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                          key={index}
                                       >
                                          <div className="text-primary">
                                             {item.icon}
                                          </div>
                                          <div>{item.text}</div>
                                       </div>
                                    )
                                 })}
                              </div>
                              {/* Languages */}

                              <div className="flex flex-col gap-y-2">
                                 <div>Language Skills</div>
                                 <div className="border-b border-border "></div>
                                 <div className="">
                                    English, Spanish, Ukrainian
                                 </div>
                              </div>
                           </div>
                        </TabsContent>

                        {/* Qualifications content */}
                        <TabsContent value="qualifications">
                           <div>
                              <h3 className="h3 mb-8 text-center xl:text-left">
                                 My Journey
                              </h3>
                              <div className="grid md:grid-cols-2 gap-y-8 ">
                                 {/* experience  */}
                                 <div className="flex flex-col gap-y-6">
                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                       <Briefcase />
                                       <h4 className="capitalize font-medium ">
                                          {
                                             getData(
                                                qualificationData,
                                                'experience'
                                             ).title
                                          }
                                       </h4>
                                    </div>
                                    {/* Experience list */}
                                    <div className="flex flex-col gap-y-8 ">
                                       {getData(
                                          qualificationData,
                                          'experience'
                                       ).data.map((item, index) => {
                                          const { company, role, years } = item
                                          return (
                                             <div
                                                className="flex gap-x-8 group"
                                                key={index}
                                             >
                                                <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                                   <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                </div>
                                                <div>
                                                   <div className="font-semibold text-xl leading-none mb-2">
                                                      {company}
                                                   </div>
                                                   <div className="text-lg leading-none text-muted-foreground mb-4">
                                                      {role}
                                                   </div>
                                                   <div className="text-base font-medium">
                                                      {years}
                                                   </div>
                                                </div>
                                             </div>
                                          )
                                       })}
                                    </div>
                                 </div>

                                 {/* education  */}
                                 <div className="flex flex-col gap-y-6">
                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                       <GraduationCapIcon size={28} />
                                       <h4 className="capitalize font-medium ">
                                          {
                                             getData(
                                                qualificationData,
                                                'education'
                                             ).title
                                          }
                                       </h4>
                                    </div>
                                    {/* Experience list */}
                                    <div className="flex flex-col gap-y-8 ">
                                       {getData(
                                          qualificationData,
                                          'education'
                                       ).data.map((item, index) => {
                                          const {
                                             university,
                                             qualification,
                                             years,
                                          } = item
                                          return (
                                             <div
                                                className="flex gap-x-8 group"
                                                key={index}
                                             >
                                                <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                                   <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                </div>
                                                <div>
                                                   <div className="font-semibold text-xl leading-none mb-2">
                                                      {university}
                                                   </div>
                                                   <div className="text-lg leading-none text-muted-foreground mb-4">
                                                      {qualification}
                                                   </div>
                                                   <div className="text-base font-medium">
                                                      {years}
                                                   </div>
                                                </div>
                                             </div>
                                          )
                                       })}
                                    </div>
                                 </div>
                              </div>
                           </div>
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
