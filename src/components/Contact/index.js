import React from 'react';

import './styles.scss';

function Contact() {
    return (
        <div className="page-content">
            <form id="contact-form">
                <div class='contact-row'>
                    <label for='name'>Name</label>
                    <input id='input-name' name='name'
                        type='text' placeholder="Your Name" />
                </div>

                <div class='contact-row'>
                    <label for='company'>Company</label>
                    <input id='input-company' name='company' type='text' placeholder="Your Company" />
                </div>

                <div class='contact-row'>
                    <label for='email'>Email</label>
                    <input id='input-email' name='email' type='email' placeholder="Your Email" />
                </div>

                <div class='contact-row'>
                    <label for='reason'>Reason for Contact</label>
                    <select id='input-reason' name='reason'>
                        <option value='employment'>Employment Inquiry</option>
                        <option value='collab'>Project Collaboration</option>
                        <option value='freelance'>Freelance Work</option>
                        <option value='bug'>Bug Report</option>
                        <option value='chat'>Just Chattin'</option>
                    </select>
                </div>

                <div class='contact-row'>
                    <label for='message'>Field for other message details</label>
                    <textarea id='input-message' name='message' placeholder="Any other Details?"></textarea>
                </div>

                <div class='contact-row btn-row'>
                    <button type="submit">Send it!</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
