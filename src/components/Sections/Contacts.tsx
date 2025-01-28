import "./contacts.css";
import "./main-styles.css";
import { RefObject } from "react";
type ContactsProps = {
  contactsRef: RefObject<HTMLDivElement>;
};
const ContactsSection: React.FC<ContactsProps> = ({ contactsRef }) => {
  return (
    <div className="contact page" ref={contactsRef}>
      <h2 className="page-header">Contacts</h2>
    </div>
  );
};

export default ContactsSection;
