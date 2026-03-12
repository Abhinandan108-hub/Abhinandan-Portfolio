import React, { useState, useEffect } from "react";
import bgImage1 from "../assets/img1.jpg";
import bgImage2 from "../assets/img2.jpg";
import Profileimage from "../assets/Profile.jpg";

const slides = [
  {
    id: 0,
    image: bgImage1,
    title: "Hi, I am Abhinandan Soni",
    subtitle: "LET'S CREATE SOMETHING AMAZING",
    work: "I am a Full Stack Developer."
  },
  {
    id: 1,
    image: bgImage2,
    title: "Ready to work?",
    subtitle: "I DESIGN & BUILD WEBSITES & SOFTWARES",
    work: "What I can do for you."
  }
];

const HeroSection = () => {

  const [currentSlide,setCurrentSlide] = useState(0)

  useEffect(()=>{

    const interval=setInterval(()=>{
      setCurrentSlide((prev)=>(prev+1)%slides.length)
    },5000)

    return ()=>clearInterval(interval)

  },[])

  const slide = slides[currentSlide]

  return (

<section
id="home"
className="relative w-full min-h-[115vh] flex items-center overflow-hidden pt-24"
>

{/* BACKGROUND */}

{slides.map((s,index)=>(
<div
key={s.id}
className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000
${index===currentSlide ? "opacity-100":"opacity-0"}
`}
style={{backgroundImage:`url(${s.image})`}}
>

<div className="absolute inset-0 bg-black/60"></div>

</div>
))}

{/* MAIN CONTENT */}

<div className="relative z-10 w-full px-[140px]">

<div className="grid lg:grid-cols-2 items-center gap-16">

{/* LEFT TEXT */}
<div>

<p className="text-indigo-400 tracking-widest uppercase mb-6 text-xl font-semibold">
{slide.subtitle}
</p>

<h1 className="text-white font-extrabold leading-tight
text-6xl
sm:text-7xl
lg:text-8xl
xl:text-[92px]
">

{slide.title}

<span className="block text-indigo-400 mt-6">
{slide.work}
</span>

</h1>

<div className="flex gap-6 mt-12">

<button className="
px-12 py-5
text-xl font-bold
bg-indigo-600
rounded-lg
transition-all duration-300
hover:bg-indigo-500
hover:scale-110
hover:shadow-[0_0_25px_rgba(99,102,241,0.9)]
">
Hire Me
</button>

<button className="
px-12 py-5
text-xl font-bold
bg-indigo-600
rounded-lg
transition-all duration-300
hover:bg-indigo-500
hover:scale-110
hover:shadow-[0_0_25px_rgba(99,102,241,0.9)]
">
Download CV
</button>

</div>

</div>

{/* RIGHT IMAGE */}

<div className="flex justify-center items-center">

<div
className="
relative
w-[420px] h-[420px]
sm:w-[520px] sm:h-[520px]
lg:w-[500px] h-[300px]
xl:w-[750px] xl:h-[750px]
overflow-hidden
rounded-full
border-4 border-white
shadow-2xl
flex items-center justify-center
"
>

<img
src={Profileimage}
alt="Profile"
className="
w-[115%]
h-[115%]
object-cover
object-[60%_30%]
"
/>

</div>

</div>

</div>

</div>

{/* DOTS */}

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">

{slides.map((s,index)=>(
<button
key={index}
onClick={()=>setCurrentSlide(index)}
className={`h-3 rounded-full transition-all
${index===currentSlide
?"w-8 bg-indigo-500"
:"w-3 bg-white/60"
}
`}
></button>
))}

</div>

</section>

  )
}

export default HeroSection