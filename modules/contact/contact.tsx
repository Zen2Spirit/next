"use client";

import { Header } from "../common/header";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <>
      <Header title="Contact" />
      <div className="flex flex-col">
        <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12 flex flex-wrap gap-12 justify-between">
          <div className="flex flex-col gap-6">
            <span className="text-primary font-bold">Heb je een vraag?</span>
            <h2 className="text-4xl font-bold">Contacteer ons!</h2>
            <p className="w-2/3">
              Vul ons contact formulier in of contacteer ons langs onderstaande
              middelen.
            </p>
            <p>We antwoorden gemiddeld binnin de 24 uur.</p>
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2">
                <span className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </span>{" "}
                Meersstraat 176, 1742 Ternat
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>{" "}
                <a href="tel:+32478443753">+32(0) 478 44 37 53</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>{" "}
                <a href="tel:+32487223615">+32(0) 487 22 36 15</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>{" "}
                <a href="mailto:info@zen2spirit.be">info@zen2spirit.be</a>
              </p>
            </div>
          </div>
          <ContactForm />
        </section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d157.32665263549603!2d4.1323549!3d50.8825192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3be9157280981%3A0x287f8615b3464b0c!2sMeersstraat%20176%2C%201742%20Ternat!5e0!3m2!1snl!2sbe!4v1771340850122!5m2!1snl!2sbe"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
