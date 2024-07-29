import React from 'react'

function LinkForm() {
  return (
    <>
        <div>

        </div>
        <section>
        <div style={{width:'100%', maxWidthh: "1200px"}}>
                    <form  className="form-table">
                        <table >
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
                                    <td colSpan="2" className="submit-cell">  <button>Submit</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>

                </div>

        </section>
        </>
  )
}

export default LinkForm