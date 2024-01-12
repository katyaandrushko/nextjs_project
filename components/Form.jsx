'use client'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'

const Form = () => {
   return (
      <form className="flex flex-col gap-y-4 ">
         {/* Input */}
         <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="Name" />
            <User className="absolute right-6" size={20} />
         </div>
         {/* email */}
         <div className="relative flex items-center">
            <Input type="email" id="email" placeholder="Email" />
            <MailIcon className="absolute right-6" size={20} />
         </div>
         {/* textarea */}
         <div className="relative flex items-center ">
            <Textarea
               type="name"
               id="name"
               placeholder="Type your message here..."
               className="pt-3 text-base"
            />
            <MessageSquare className="absolute top-4 right-6" size={20} />
         </div>
         <Button className="flex items-center gap-x-2 max-w-[165px]">
            Let`s talk!
            <ArrowRightIcon size={20} />
         </Button>
      </form>
   )
}

export default Form
