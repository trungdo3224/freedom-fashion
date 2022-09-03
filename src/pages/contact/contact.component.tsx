import { ContactContainer, ContactInformationContainer } from "./contact.styles";

const ContactPage = () => {
  return (
    <ContactContainer>
        <h1>Contact Us</h1>
        <ContactInformationContainer>
            <h3>Phone: 0123 456 789</h3>
            <h3>Email: freedom-engine@gmail.com</h3>
            <h3>Address: Ha Noi, Viet Nam</h3>
        </ContactInformationContainer>
    </ContactContainer>
  );
};

export default ContactPage;
