
import "../app/style/home.css"
import Hero from "./components/hero"
import Navbar from "./components/nav"
export default function Home(){
  return(
    <main className="full-height">
      <Hero/>
    
     <div className="container2">
     <h3 className="heading3">About</h3>
      <p className="para">I am a <span className="emphasize">passionate tech enthusiast</span> with a deep interest in <span className="emphasize">Web-Development and graphic designing. </span>
       Currently, I am pursuing a web 3.0 and metaverse course of <span className="emphasize">Governor Initiative for Artifitial Intelligence and Computing(GIAIC)</span> at Governor House. and am gaining valuable experience in <span className="emphasize">Quarter 2</span> of front-end development with NEXTJS. I possess expertise in <span className="emphasize">Graphic Designing</span>, UI/UX Design with Figma templates, Next.js, and Tailwind CSS for web development, as well as Node.js and typescript for robust backend solutions.

      . This diverse experience has provided me with a holistic understanding on front-end and back-end technologies, as well as user experience, allowing me to make meaningful contributions across various facets of technology projects.</p>
     
      <h3 className="heading3">What I Do.</h3>
     <div className="sub-container2">
     <div className="sub-container2-1">
        <div className="sub-pic-container">
        <img className="sub-pic" src="/images/front-end.jpg" alt="front-end mockup " height={250} width={250}></img>

        </div>
       <div className="sub-content">
       <h4 className="heading4">Front-end web development</h4>
        <p className="para">With a robust proficiency in
        Next.js. I excel at transforming design concepts into dynamic, user-friendly websites.</p>
       </div>
      </div>
      <div className="sub-container2-2">
        <div className="sub-pic-container">
        <img className="sub-pic" src="/images/graphic-design.jpg" alt="front-end mockup " height={250} width={250}></img>

        </div>
       <div className="sub-content">
       <h4 className="heading4">Graphic Designer</h4>
        <p className="para">With strong expertise in Graphic design, I excel at creating intuitive and visually engaging user experiences, translating user needs into seamless, impactful Designs.</p>
       </div>
      </div>
     </div>
     </div>
     
  
          <Navbar/>
    </main>
  )
}