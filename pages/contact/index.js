import Header from '@/components/modules/Header/Header'
import Navbar from '@/components/modules/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useReducer } from 'react'
import WithNavigation from '@/components/HOC/WithNavigation'

const Contact = ({ data }) => {

  function contactFormReducer(state, action) {
    switch (action.type) {
      case 'NAME_CHANGED': {
        return {
          ...state,
          name: action.newValue
        }
      }
      case 'EMAIL_CHANGED': {
        return {
          ...state,
          email: action.newValue
        }
      }
      case 'SUBJECT_CHANGED': {
        return {
          ...state,
          subject: action.newValue
        }
      }
      case 'MESSAGE_CHANGED': {
        return {
          ...state,
          message: action.newValue
        }
      }
      case 'reset': {
        return {
          name: "",
          email: "",
          subject: "",
          message: ""
        }
      }

      default: {
        return state;
      }
    }
  }

  const [state, dispatch] = useReducer(contactFormReducer, {
    name: "",
    email: "",
    subject: "",
    message: ""
  })


  const submitMessageHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/messages", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "Application/json"
      }
    })
    if (res.ok) {
      dispatch({ type: "reset" })
      alert("message sent!")
    }
  }

  return (
    <div>
      <Header pageName="Contact Us" pageLink="/contact" />
      <div className='w-full flex justify-center items-center flex-col bg-light'>
        <div className="w-full flex justify-center items-center flex-col py-10 bg-light">
          <div className="w-[3px] h-[120px] bg-secondary rounded-xl"></div>
          <div className="w-full flex flex-col justify-center items-center mt-5">
            <h3 className="font-semibold uppercase text-secondary text-2xl">contact us</h3>
            <h1 className="font-bold text-primary text-5xl my-3">Feel Free To Contact</h1>
          </div>

          <div className='max-w-[1100px] flex flex-row items-center justify-center gap-5 my-10'>
            <div className='flex flex-col flex-1 justify-center items-center min-w-[400px] gap-3'>
              <FontAwesomeIcon icon={faMapMarkerAlt} className='text-3xl text-secondary' />
              <span className='text-3xl font-bold text-black'>Address</span>
              <span className='font-primary font-lg text-gray-600'>123 Street, New York, USA</span>
            </div>
            <div className='flex flex-col flex-1 justify-center items-center min-w-[400px] gap-3'>
              <FontAwesomeIcon icon={faPhoneAlt} className='text-3xl text-secondary' />
              <span className='text-3xl font-bold text-black'>Phone</span>
              <span className='font-primary font-lg text-gray-600'>+012 345 6789</span>
            </div>
            <div className='flex flex-col flex-1 justify-center items-center min-w-[400px] gap-3'>
              <FontAwesomeIcon icon={faEnvelope} className='text-3xl text-secondary' />
              <span className='text-3xl font-bold text-black'>Email</span>
              <span className='font-primary font-lg text-gray-600'>info@example.com</span>
            </div>
          </div>

        </div>

        <div className='w-full max-w-[1200px] min-w-[768px] flex flex-row items-center gap-5 justify-center bg-light mb-10'>
          <div className='flex-1 w-full'>
            <iframe style={{ width: "100%", height: "443px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <div className='flex-1'>
            <form>
              <div className='border-2 border-gray-300 px-3 py-2 rounded-sm my-3'>
                <input
                  type='text'
                  placeholder='Your Name...'
                  className='bg-transparent outline-none'
                  value={state.name}
                  onChange={(e) => dispatch({ type: "NAME_CHANGED", newValue: e.target.value })}
                />
              </div>
              <div className='border-2 border-gray-300 px-3 py-2 rounded-sm my-3'>
                <input
                  type='text'
                  placeholder='Your Email...'
                  className='bg-transparent outline-none'
                  value={state.email}
                  onChange={(e) => dispatch({ type: "EMAIL_CHANGED", newValue: e.target.value })}
                />
              </div>
              <div className='border-2 border-gray-300 px-3 py-2 rounded-sm my-3'>
                <input
                  type='text'
                  placeholder='Subject...'
                  className='bg-transparent outline-none'
                  value={state.subject}
                  onChange={(e) => dispatch({ type: "SUBJECT_CHANGED", newValue: e.target.value })}
                />
              </div>
              <textarea
                rows={7}
                cols={80}
                placeholder='Message..'
                value={state.message}
                className='border-2 border-gray-300 px-3 py-2 rounded-sm bg-transparent outline-none'
                onChange={(e) => dispatch({ type: "MESSAGE_CHANGED", newValue: e.target.value })}
              />
              <button
                type='submit'
                onClick={submitMessageHandler}
                className='text-lg bg-secondary px-5 py-3 font-primary font-semibold my-5'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const menuRes = await fetch("http://localhost:4000/menuItems");
  const navbarItems = await menuRes.json()

  return {
    props: {
      data: {
        navbarItems,
      }
    }
  }
}

export default WithNavigation(Contact)