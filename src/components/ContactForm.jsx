import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xrbzzwzp");
  if (state.succeeded) {
      return <p>Email sent! Talk soon =)</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
      Email Me!</label> <br></br>
        <input className='email'
        id="email"
        type="email" 
        name="email"
        placeholder='xyz@gmail.com'
      /> <br></br>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea className='msg'
        id="message"
        name="message"
        placeholder='Hey, I love your website!'
      /><br></br>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;