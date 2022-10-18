import { ContactContainer, ContactInformationContainer, ContactTitle } from "./contact.styles";

const ContactPage = () => {
  return (
    <ContactContainer>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactInformationContainer>
            <h3>Phone: 0123 456 789</h3>
            <h3>Email: freedomfashion@gmail.com</h3>
            <h3>Address: Ha Noi, Viet Nam</h3>
        </ContactInformationContainer>
    </ContactContainer>
  );
};

export default ContactPage;
