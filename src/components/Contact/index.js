import React from 'react';

import './styles.scss';

function Contact() {
    return (
        <div className="page-content">
            <form id="contact-form">

                <h2 id="contact-title">Need Something More Direct?</h2>

                <fieldset class="contact-body">
                    <div class='contact-row'>
                        <label for='name'>Name</label>
                        <input id='input-name'
                            name='name'
                            type='text'
                            placeholder="Your Name"
                        />
                    </div>

                    <div class='contact-row'>
                        <label for='email'>Email</label>
                        <input id='input-email'
                            name='email'
                            type='email'
                            placeholder="name@website.com"
                        />
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
                        <label for='message'>Additional Details</label>
                        <textarea id='input-message' name='message' placeholder="Any else?"></textarea>
                    </div>
                </fieldset>

                <div class='contact-submit-row'>
                    <button class="contact-submit-button" type="submit">Send it!</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
