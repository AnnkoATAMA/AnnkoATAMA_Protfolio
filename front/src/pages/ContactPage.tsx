import "./css/contact.css"

const ContactPage = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">contact test</h1>
            <div className="contact-form">
                <input type="text" placeholder="おなまえ" className="contact-input"/>
                <input type="email" placeholder="めーるあどれす" className="contact-input"/>
                <textarea placeholder="ごようけん" className="contact-textarea"></textarea>
                <button className="contact-button">Send Message</button>
            </div>
        </div>
    )
}
export default ContactPage;