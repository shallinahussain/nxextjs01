import React from 'react'

const page = () => {
  return(
     <div><figure className="bg-sky-100 rounded-xl p-8 dark:bg-sky-800">
     <img className="w-24 h-24 square-full mx-auto" src="/shallina.jpg"alt="" width="384" height="512"></img>
     <div className="pt-6 text-side space-y-4">
       <blockquote>
         <p className="text-lg font-large">
           introduction
         </p>
       </blockquote>
       <figcaption className="font-large">
         <div className="text-purple-500 dark:text-purple-400">
           Shalina hussain
         </div>
         <div className="text-pink-700 dark:text-pink-500">
         "Hello, my name is Shalina and I'm a student of BS Urdu at Khawaja Fareed College. I'm passionate about Urdu literature and language, and I'm dedicated to exploring the rich cultural heritage and literary traditions of Urdu. I'm excited to learn and grow as a scholar of Urdu, and I look forward to contributing to the literary community."
         </div>
       </figcaption>
     </div>
   </figure></div>
  )
}

export default page