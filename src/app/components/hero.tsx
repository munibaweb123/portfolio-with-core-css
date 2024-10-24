import "../style/hero.css"
export default function Hero(){
    return(
        <div className="container1">
        <div className="pic-container"><img className="profile-pic" src="/images/profile.jpg" alt="profile pic" height={500} width={500}/></div>
         <div >
         <h1 className="heading1">Muniba Ahmed</h1>
         <h2 className="heading2">Graphic Designer + Web Developer</h2>
   
         </div>
        </div>
    )
}