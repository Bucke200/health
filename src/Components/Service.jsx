import React, { useState } from 'react'
import "./Contact.css"
import CollectionsIcon from '@mui/icons-material/Collections';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import LinkForm from './LinkForm';
import { Link } from 'react-router-dom';
function Service() {
  let [isBool,setIsBool]=useState(false)
  return (
    <>
      <div className='contactcontainer'>

        <h1 style={{ margin: '0px', padding: '25px', fontSize: '70px', color: 'white' }}>
          Services
        </h1></div>
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: "90%", padding: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>
              What are you looking for??
            </h1>
          </div>
          <div style={{marginBottom:'5px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
            <div>
              <h1>
                  <Link to='/LinkForm'> 1.Short-term mentoring</Link> 
              </h1> 
              <div style={{marginBottom:'5px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
                <div style={{padding:"30px",height:'50%',backgroundColor:'#20c997'}}>
                <AutoFixHighIcon/>
                </div>
                <div>
                  <h1>
                    Want to talk about some problem.
                  </h1>
                  <p>
                    Some specific problems.
                  </p>
                </div>
              </div>
              <div style={{marginBottom:'5px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
                <div style={{padding:"30px",height:'50%',backgroundColor:'#20c997'}}>
                <ModeEditOutlineOutlinedIcon/>
                </div>
                <div>
                  <h1>
                    Want to talk about some problem.
                  </h1>
                  <p>
                    Some specific problems.
                  </p>
                </div>
              </div>
              <div style={{marginBottom:'5px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
                <div style={{padding:"30px",height:'50%',backgroundColor:'#20c997'}}>
                <CollectionsIcon/>
                </div>
                <div>
                  <h1>
                    Want to talk about some problem.
                  </h1>
                  <p>
                    Some specific problems.
                  </p>
                </div>
              </div>

            </div>
            <div>
              
              <h1>
              <Link to='/LinkForm'>  2.Long-term mentoring</Link>  
              </h1>
              <div style={{marginBottom:'5px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
                <div style={{padding:"30px",height:'50%',backgroundColor:'#20c997'}}>
                <AutoFixHighIcon/>

                </div>
                <div>
                  <h1>
                    Want to talk about some problem.
                  </h1>
                  <p>
                    Some specific problems.
                  </p>
                </div>
              </div>
              <div style={{marginBottom:'5px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
                <div style={{padding:"30px",height:'50%',backgroundColor:'#20c997'}}>
                <ModeEditOutlineOutlinedIcon/>

                </div>
                <div>
                  <h1>
                    Want to talk about some problem.
                  </h1>
                  <p>
                    Some specific problems.
                  </p>
                </div>
              </div>
              <div style={{marginBottom:'5px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
                <div style={{padding:"30px",height:'50%',backgroundColor:'#20c997'}}>
                <CollectionsIcon/>
                </div>
                <div>
                  <h1>
                    Want to talk about some problem.
                  </h1>
                  <p>
                    Some specific problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Service