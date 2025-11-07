import { projectsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Projects = () => {

  return (
    <motion.div 
    initial={{opacity:0,x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '>Projects<span className='font-light decoration-1 under'> Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto '>Crafting Spaces ,Building Legecies-Explore Our Portfolio</p>

      
      <div className='overflow-hidden'>
        <div  className='flex gap-32 transition-transform duration-500 ease-in-out '>
          {projectsData.map((project,index)=>(
            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
              <img src={project.image} alt={project.title} className='w-full h-auto mb-14'/>
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-2xl'>
                <h2 className='text-xl font-semibold text-gray-800 '>
                  {project.title}
                </h2>
                <p className='text-gray-500 text-lg'>
                  {project.price} <span className='px-1'></span> {project.location}
                </p>

                </div>

              </div>
            </div>

          ))}
              
            </div>
          
        </div>
      

    </motion.div>
    
  )
}

export default Projects



