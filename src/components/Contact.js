import React from 'react';

function Contact() {
    return (
        <div style={{ padding: 20 }}>
            <div
                style={{
                    fontWeight: 'bold',
                    fontSize: 'min(24px, 5vw)',
                    marginBottom: '5vh'
                }}
            >
                Email: <span style={{ color: '#686de0', marginLeft: 10 }}> aaronmg241@gmail.com </span>
            </div>

            <div
                style={{
                    fontWeight: 'bold',
                    fontSize: 'min(24px, 5vw)'
                }}
            >
                Phone: <span style={{ color: '#686de0', marginLeft: 10 }}> 519-573-0097 </span>
            </div>
        </div>
    );
}

export default Contact;
