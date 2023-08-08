/* eslint-disable no-unused-vars */
import { useState } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    if (!name && !email && !message) {
      e.preventDefault();
      setError('All fields are required');
      setTimeout(() => {
        setError('');
      }, 2000);
      return;
    }
  };
  
  return (
    <section id="Contact" className="bg-newbBlue dark:">
      <div className="max-w-7xl mx-auto px-5 py-20">
          <div className="flex flex-wrap">
            <div className="w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6 text-white">
              <h2 className="mb-6 text-2xl font-bold">Connect with me:</h2>
              <div className="grid grid-cols-1 space-y-10 mb-10 md:mb-0">
                <div className="w-full shrink-0 grow-0 basis-auto">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-newYellow p-4 text-white">
                        <EnvelopeIcon className="w-8" />
                      </div>
                    </div>
                    <div className="ml-2">
                      <p className="mb-2 font-bold">
                        Email
                      </p>
                      <p>
                        support@example.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-newYellow p-4 text-white">
                        <PhoneIcon className="w-8" />
                      </div>
                    </div>
                    <div className="ml-2">
                      <p className="mb-2 font-bold">
                        Phone
                      </p>
                      <p>
                        +1 234-567-89
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <h2 className="w-72 mb-6 text-xl font-bold text-white">
                Contact me, let’s make magic together
              </h2>
              <form action="https://formspree.io/f/xrgwpgzk" onSubmit={handleSubmit} method="post">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    name="name"
                    className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white py-2 px-3 leading-[1.6] outline-none"
                    id="exampleInput90"
                    placeholder="Name"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    name="email"
                    className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white py-2 px-3 leading-[1.6] outline-none"
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none"
                    id="exampleFormControlTextarea1"
                    name="message"
                    rows="5"
                    placeholder="Your message"></textarea>
                    {error && <p className="messages mt-3 text-red-600">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="btn float-right border-0 p-3 px-6 text-white font-bold bg-newYellow rounded-md hover:bg-transparent hover:text-white hover:border-2 hover:border-newYellow">
                  Email me
                </button>
              </form>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Contact;
