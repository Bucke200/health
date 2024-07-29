import React from 'react'
import "./Home.css"


function Home() {
  return (
    <div>

      <div className='imageContainer'>     
      </div>
      
     <section style={{display:'flex',justifyContent:'center'}}>
     <div width="90%" style={{display:'flex',justifyContent:"center",gap:'3px'}}>
      <div >
        <div>
           <img height={300} width={250} src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quidem.</p>
        </div>
      </div>
      <div >
        <div>
           <img height={300} width={250} src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quidem.</p>
        </div>
      </div>
      <div >
        <div>
           <img height={300} width={250} src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quidem.</p>
        </div>
      </div>
      </div>
     </section>

    </div>
  )
}

export default Home