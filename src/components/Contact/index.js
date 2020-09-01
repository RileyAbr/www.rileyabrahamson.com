import React from "react";

import "./styles.scss";

function Contact() {
    return (
        <div className="page-content">
            <form
                method="POST"
                name="contact"
                id="contact-form"
                data-netlify="true"
            >
                <h1 id="contact-title">Need Something More Direct?</h1>

                <fieldset className="contact-body">
                    <div className="contact-row">
                        <label>
                            Name
                            <input
                                id="input-name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                            />
                        </label>
                    </div>

                    <div className="contact-row">
                        <label>
                            Email
                            <input
                                id="input-email"
                                name="email"
                                type="email"
                                placeholder="name@website.com"
                            />
                        </label>
                    </div>

                    <div className="contact-row">
                        <label>
                            Reason for Contact
                            <select id="input-reason" name="reason">
                                <option value="employment">
                                    Employment Inquiry
                                </option>
                                <option value="collab">
                                    Project Collaboration
                                </option>
                                <option value="freelance">
                                    Freelance Work
                                </option>
                                <option value="bug">Bug Report</option>
                                <option value="chat">Just Chattin'</option>
                            </select>
                        </label>
                    </div>

                    <div className="contact-row">
                        <label>
                            Additional Details
                            <textarea
                                id="input-message"
                                name="message"
                                placeholder="Anything else?"
                            ></textarea>
                        </label>
                    </div>
                </fieldset>

                <div className="contact-submit-row">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
