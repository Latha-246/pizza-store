import React, { useState } from 'react';
import './contacts.css';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNo: '',
        emailId: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.firstName) errors.firstName = "First Name is required";
        if (!formData.lastName) errors.lastName = "Last Name is required";
        if (!formData.contactNo) errors.contactNo = "Contact Number is required";
        if (!formData.emailId) errors.emailId = "Email ID is required";
        if (!formData.message) errors.message = "Message is required";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fill in all required fields.');
        }
    };

    return (
        <>
            <h2 className='content'>We would love to hear from you</h2>
            <p className='content1'>Drop us a line to say hello</p>
            <div className="contact-container">
                <div className="contact-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>
                    <h2>Address</h2>
                    <p className='para'>Booth No. 10, Sector 9-D, Inner Market, Chandigarh, 160009</p>
                </div>

                <div className="contact-card">
    <i className="bi bi-envelope-arrow-down-fill" ></i>
    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-envelope-arrow-down-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z"/>
</svg>
<h2>Email for customer support</h2>
        <p className='para'>support@deliciouspizza.in</p>
    
       
    </div>

                <div className="contact-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                    <h2>Phone</h2>
                    <p className='para'>0167-2509473</p>
                </div>
            </div>
            <h2 className='paras'>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="First Name"
                                id="firstName"
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                            {formErrors.firstName && <span className="info">{formErrors.firstName}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Last Name"
                                id="lastName"
                                className="form-control"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                            {formErrors.lastName && <span className="info">{formErrors.lastName}</span>}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Contact Number"
                                id="contactNo"
                                className="form-control"
                                value={formData.contactNo}
                                onChange={handleInputChange}
                                required
                            />
                            {formErrors.contactNo && <span className="info">{formErrors.contactNo}</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email ID"
                                id="emailId"
                                className="form-control"
                                value={formData.emailId}
                                onChange={handleInputChange}
                                required
                            />
                            {formErrors.emailId && <span className="info">{formErrors.emailId}</span>}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                id="message"
                                placeholder="Write your message..."
                                rows="3"
                                value={formData.message}
                                onChange={handleInputChange}
                                style={{ width: '80%' }}
                                required
                            ></textarea>
                            {formErrors.message && <span className="info">{formErrors.message}</span>}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group text-center">
                            <button type="submit" className="btnAction btn btn-success">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Contact;
