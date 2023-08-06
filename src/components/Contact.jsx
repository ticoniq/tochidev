import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

function Contact() {
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
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white py-2 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput90"
                    placeholder="Name"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-newGray transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">
                    Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white py-2 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-newGray transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary">
                    Email address
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Your message"></textarea>
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[100%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-newGray transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">
                    Message
                  </label>
                </div>
                <button
                  type="submit"
                  className="p-3 px-6 text-white font-bold bg-newYellow rounded-md hover:bg-transparent hover:text-white hover:border-2 hover:border-newYellow">
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
