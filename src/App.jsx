import { useState } from 'react'
import bg from "../src/assets/B2B home page.jpg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
        {/* component */}
        <div className="mt-4 flex flex-wrap items-center  justify-center mx-2 ">
          <div className="container lg:w-2/5 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
            <div className=" h- overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-fit "
                src={bg}
                alt=""
              />
            </div>
            <div className=" mt-5">
              <div className="text-center px-14">
                <h2 className="text-gray-800 text-3xl font-bold">
                  PharMedica
                </h2>

                <p className="mt-2 text-gray-500 text-sm px-10">
                  Exprience the convenience of
                  your pharmaceutical and healthcare
                  e-commerce needs.
                </p>
              </div>
              <hr className="mt-6 w-60 mx-auto" />

              <h1 className='text-center font-semibold text-lg py-4 text-gray-600'>Contact Information</h1>
              <div>
                <ul className='flex items-center justify-center gap-4 py-4'>
                  <a
                    className='p-2 bg-blue-700 rounded-full text-white flex items-center justify-center'
                    href="tel:0991626111"
                    target='_blank'
                  >
                    <li>
                      <svg
                        className='p-1'
                        width="30"
                        height="30"
                        fill="none"
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        ></path>
                      </svg>
                    </li>
                  </a>

                  <a
                    className='p-2 bg-blue-700 rounded-full text-white flex items-center justify-center'
                    href="tel:0914343893"
                    target='_blank'
                  >
                    <li>
                      <svg
                        className='p-1'
                        width="30"
                        height="30"
                        fill="none"
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        ></path>
                      </svg>
                    </li>
                  </a>

                  <a
                    className='p-2 bg-blue-700 rounded-full text-white flex items-center justify-center'
                    href="mailto:pharmedica.et@gmail.com"
                    target='_blank'
                  >
                    <li>
                      <svg
                        className='p-1'
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        style={{ fill: "rgba(234, 222, 222, 1)", transform: "", msfilter: "" }}
                      >
                        <path
                          d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"
                        />
                      </svg>
                    </li>
                  </a>
                </ul>
              </div>


              <h1 className='text-center font-semibold text-lg py-4 text-gray-600'>Social Media</h1>
              <div>
                <ul className='flex flex-col items-center justify-center gap-4 py-4 mx-[4em]'>
                  <a
                    className='p-4 bg-blue-700 rounded-full w-full text-white flex items-center'
                    href="https://t.me/pharme24"
                    target='_blank'
                  >
                    <svg
                      className='ml-2'
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      viewBox="0 0 24 24"
                      style={{ fill: "rgba(234, 222, 222, 1)", transform: "", msfilter: "" }}
                    >
                      <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                    </svg>
                    <span className='ml-16 lg:ml-40 text-lg font-semibold text-gray-300'>
                      Telegram
                    </span>
                  </a>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </>

    </>
  )
}

export default App
