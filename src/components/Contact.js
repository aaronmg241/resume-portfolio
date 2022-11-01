import React from 'react';

function Contact() {
    return (
        <div style={{ padding: 20, border: '3px solid rgb(40, 40, 43)' }}>
            <div
                style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    marginBottom: '5vh'
                }}
            >
                Email: <span style={{ color: '#686de0', marginLeft: 10 }}> aaronmg241@gmail.com </span>
            </div>

            <div
                style={{
                    fontWeight: 'bold',
                    fontSize: 24
                }}
            >
                Phone: <span style={{ color: '#686de0', marginLeft: 10 }}> 519-573-0097 </span>
            </div>
        </div>
    );
}

export default Contact;
