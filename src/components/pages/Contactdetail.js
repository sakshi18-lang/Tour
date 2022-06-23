import React, { useState, useEffect ,useRef} from "react";
// import ContactForm from "./ContactForm"
import {firebase,dd} from "../../Firebase";
import emailjs from 'emailjs-com';
// import "../images/"
import "../../App.css"

const Contacts = () => {

    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        dd.ref().child('userDataRecords').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects({})

        })
    }, [])// similar to componentDidMount

    const addOrEdit = obj => {
        if (currentId == '')
       dd.ref().child('userDataRecords').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        else
        dd.ref().child(`userDataRecords/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
    }
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_q58wczq', e.target, 'user_uwIYMHs5W5kKE1aPb7MTg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')) {
            debugger
           dd.ref().child(`userDataRecords/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        }
    }

    return (
        <>
        <h2>Reply to customer queries</h2>
            {/* <div className="jumbotron jumbotron-fluid">
                 <div className="container">
                    <h1 className="display-4 text-center">Contact Register</h1>
                </div> 
            </div> */}
            
            <div className="row">
                
                <div className="col">

                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Date of tour</th>
                                <th>No of traveller</th>
                                
                                <th>Destination place</th>
                                <th>Departure city</th>
                                <th>Query Asked</th>
                                <th>Actions</th>
                                <th>Reply</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}>
                                    
                                        
                                        <td>{contactObjects[id].firstName} </td>
                                       
                                        <td>{contactObjects[id].phone} </td>
                                        <td>{contactObjects[id].email} </td>
                                        <td>{contactObjects[id].date}</td>
                                        <td>{contactObjects[id].mem}</td>
                                        <td>{contactObjects[id].dplace}</td>
                                        <td>{contactObjects[id].dcity}</td>
                                        <td>{contactObjects[id].address}</td>
                                        
                                        
                        
                        
                                        <td>
                                            {/* <a className="btn text-primary" onClick={() => { addOrEdit(id) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a> */}
                                            <a className="btn text-danger" onClick={() => { onDelete(id) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                        <td>
                                        <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-6 form-group mx-auto">
                           
                            <input  className="form-control"  type="hidden"  value={contactObjects[id].Name} placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input   className="form-control" type="hidden" value={contactObjects[id].email} placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Reply"></input>
                        </div>
                    </div>
                </form>
                </td>               
                                    </tr>
                                    
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                    </div>
                    
                   
                    
            {/* <form >
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form> */}
            
               
        </>
    );
}

export default Contacts;