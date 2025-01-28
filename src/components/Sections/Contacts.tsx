import "./contacts.css";
import "./main-styles.css";
import { RefObject } from "react";
type ContactsSectionProps = {
  contactsRef: RefObject<HTMLHeadingElement>;
};
const ContactsSection: React.FC<ContactsSectionProps> = ({ contactsRef }) => {
  return (
    <div className="contact page" ref={contactsRef}>
      <h2 className="page-header">Contacts</h2>
    </div>
  );
};

export default ContactsSection;
