import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import { useEffect, useRef } from "react";
import Spinner from "./Spinner";
import Alert from "./Alert";

function Contact() {
  const [state, handleSubmit] = useForm("xvgpkjpe");
  const formRef = useRef();

  useEffect(() => {
    if (state.succeeded && formRef.current) formRef.current.reset();
  }, [state.succeeded]);

  return (
    <div className="contact-container flex-v-center" id="contact">
      <h2 className="heading-secondary">I’d Love to Hear From You!</h2>

      <form
        className="flex-v-center contact-form"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        {state.succeeded ? (
          <Alert />
        ) : (
          <>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="button button-cta"
              type="submit"
              disabled={state.submitting || state.succeeded}
            >
              {state.submitting ? (
                <Spinner />
              ) : state.succeeded ? (
                "Message successfully delivered!"
              ) : (
                "Submit"
              )}
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default Contact;
