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
   return <div>About</div>
}

export default About
