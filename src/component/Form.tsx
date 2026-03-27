import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";


const Form: React.FC = () => {

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_txdlcdm",
        "template_9q79t9e",
        form.current,
        "XjuqA_t8kNPlxfIIS"
      )
      .then(
        () => {
          alert("Email Sent Successfully ✅");
        },
        (error) => {
          console.log(error);
          alert("Failed to send email ❌");
        }
      );
  };

  return (
    <div className="form-container">
    

      <form ref={form} onSubmit={sendEmail}>
        <h2>Contect Form</h2>
  <input type="text" name="name" placeholder="Enter Name" required />
  <input type="email" name="email" placeholder="Enter Email" required />
  <input type="number" name="number" placeholder="Phone Number" required />
  <textarea name="message" placeholder="Enter Message" required />
  <button type="submit">Send Email</button>
</form>
    </div>
  );
};

export default Form;