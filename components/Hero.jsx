import Link from 'next/link'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import DevImg from './DevImg'
import Socials from './Socials'
import Badge from './Badge'
import {
   RiBriefcase4Fill,
   RiTeamFill,
   RiTodoFill,
   RiArrowDownSLine,
} from 'react-icons/ri'

const Hero = () => {
   return (
      <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-pink-100">
         <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
               {/* Text */}
               <div>Text</div>
               {/* Image */}
               <div>Image</div>
            </div>
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
               <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
         </div>
      </section>
   )
}

export default Hero
