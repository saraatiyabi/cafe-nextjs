import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useReducer } from 'react'
import {
    faCheck
} from "@fortawesome/free-solid-svg-icons";
import styled from "./Reservation.module.css"

const ReservationForm = () => {
    function formReducer(state, action) {
        switch (action.type) {
            case 'name_changed': {
                return {
                    ...state,
                    name: action.newValue
                }
            }
            case 'email_changed': {
                return {
                    ...state,
                    email: action.newValue
                }
            }
            case 'date_changed': {
                return {
                    ...state,
                    date: action.newValue
                }
            }
            case 'time_changed': {
                return {
                    ...state,
                    time: action.newValue
                }
            }
            case 'person_changed': {
                return {
                    ...state,
                    person: action.newValue
                }
            }
            case 'reset': {
                return {
                    name: '',
                    email: '',
                    date: '',
                    time: '',
                    person: 0
                }
            }
            default: {
                return state;
            }
        }
    }
    const [state, dispatch] = useReducer(formReducer, {
        name: '',
        email: '',
        date: '',
        time: '',
        person: 0
    })

    async function submitUserReservation(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:4000/reservation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...state
            })
        })

        if (res.status === 201) {
            dispatch({ type: "reset" })
        }
    }

    return (
        <div className='w-full bg-light flex justify-center items-center font-primary'>
            <div className={`max-w-[1100px] ${styled.reservation__gradient} flex flex-row gap-10 text-white`}>
                <div className='flex-1 py-[60px] h-full px-10'>
                    <h2 className='text-[70px] font-semibold text-secondary mt-10'>30% OFF</h2>
                    <h3 className='text-white font-semibold text-4xl my-3'>For Online Reservation</h3>
                    <p className='font-md text-gray-200 my-5'>
                        Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                        ipsum et dolor kasd sit ea justo.
                        Erat justo sed sed diam. Ea et erat ut sed diam sea
                    </p>
                    <ul className='my-5'>
                        {
                            Array(3).fill(0).map((item, index) => (
                                <li className='flex flex-row items-center gap-2 my-3' key={index}>
                                    <FontAwesomeIcon icon={faCheck} size="lg" className='text-secondary' />
                                    <span>Lorem ipsum dolor sit amet</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex-1 bg-primary bg-opacity-80 py-[60px] h-full px-10'>
                    <h1 className="text-white text-center mb-4 mt-5 text-[40px] font-semibold">Book Your Table</h1>
                    <form className="mb-5">
                        <div className="border-2 border-secondary my-3">
                            <input
                                type="text"
                                value={state.name}
                                className="bg-transparent p-3"
                                placeholder="Name"
                                onChange={(e) => dispatch({ type: "name_changed", newValue: e.target.value })}
                                required="required"
                            />
                        </div>
                        <div className="border-2 border-secondary my-3">
                            <input
                                type="email"
                                value={state.email}
                                className="bg-transparent p-3"
                                placeholder="Email"
                                onChange={(e) => dispatch({ type: "email_changed", newValue: e.target.value })}
                                required="required"
                            />
                        </div>
                        <div className="border-2 border-secondary my-3">
                            <div className="date" id="date" data-target-input="nearest">
                                <input
                                    value={state.date}
                                    type="text"
                                    className=" bg-transparent p-3 datetimepicker-input"
                                    placeholder="Date"
                                    onChange={(e) => dispatch({ type: "date_changed", newValue: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="border-2 border-secondary my-3">
                            <div>
                                <input
                                    value={state.time}
                                    type="text"
                                    placeholder="Time"
                                    className='w-full bg-transparent p-3'
                                    onChange={(e) => dispatch({ type: "time_changed", newValue: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="border-2 border-secondary my-3">
                            <select className="w-full bg-transparent p-3" value={state.person} defaultValue={1} onChange={(e) => dispatch({ type: "person_changed", newValue: e.target.value })}>
                                <option className='bg-primary text-white'>Person</option>
                                <option className='bg-primary text-white' value="1">Person 1</option>
                                <option className='bg-primary text-white' value="2">Person 2</option>
                                <option className='bg-primary text-white' value="3">Person 3</option>
                                <option className='bg-primary text-white' value="3">Person 4</option>
                            </select>
                        </div>

                        <div>
                            <button className="w-full bg-secondary flex justify-center items-cente text-black py-3 font-bold" type="submit" onClick={submitUserReservation}>Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReservationForm