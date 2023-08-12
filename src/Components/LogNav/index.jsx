import { motion } from "framer-motion"
import logo from '../../assets/Logo.svg'

const LogNav = () => {
   return (
   <div className='flex fixed z-10 items-center w-screen h-16 bg-project-blue shadow-md border-b-2 border-slate-300 px-20'>
      <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}>
         <img src={logo} className="w-[40px] h-[40px]"/>
      </motion.button>
      
   </div>
   )
}

export { LogNav }