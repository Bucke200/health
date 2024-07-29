import React, { useState } from 'react'
import './Contact.css'
import { Alert } from '@mui/material'

function Contact() {
    let [istrue, setIsBool] = useState(false)

    let handleSubmit = () => {
        setIsBool(true)

        setTimeout(() => {
            setIsBool(false)
        }, 2000)
    }

    return (
        <div >
            {istrue && <Alert variant="outlined" severity="success">
                Form is Submitted
            </Alert>}
            <div className='contactcontainer'>
                <h1 style={{ margin: '0px', padding: '25px', fontSize: '70px', color: 'white' }}>Contact Us</h1>
            </div>

            <section style={{ display: 'flex', justifyContent: 'center',gap:"23%"}}>
                <div style={{width:"80%",height:'100%'}}>
                    <form className="form-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="label-cell"><label htmlFor="name">Name:</label></td>
                                    <td><input type="text" id="name" name="name" required /></td>
                                </tr>
                                <tr>
                                    <td className="label-cell"><label htmlFor="phone">Phone:</label></td>
                                    <td><input type="tel" id="phone" name="phone" required /></td>
                                </tr>
                                <tr>
                                    <td className="label-cell"><label htmlFor="address">Address:</label></td>
                                    <td><input type="text" id="address" name="address" required /></td>
                                </tr>
                                <tr>
                                    <td className="label-cell"><label htmlFor="comments">Comments:</label></td>
                                    <td><textarea id="comments" name="comments" required></textarea></td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="submit-cell">  <button onClick={handleSubmit}>Submit</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>

                </div>

                <div style={{width:"500px"}}>
                    <h1>Contact details.</h1>
                    <h4>+91 8827275229
                   </h4>
                   <h4>
                   sanyogverma07@gmail.com
                   </h4>
                    <div>
                        <img height="100%" width="100%" src="https://healthup2.odoo.com/web/image/428-78529db2/text-sign-showing-here-to-help-vector-illustration-text-sign-showing-here-to-help-137560019.webp" alt="" />

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact