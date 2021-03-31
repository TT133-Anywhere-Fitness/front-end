import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { axiosWithAuth } from '../utils/axiosWithAuth'


export default function AddClass(){
    const [classItem, setClassItem] = useState({
        name: '', 
        type:'',
        date: '',
        duration: '',
        intensity: '',
        location: '',
        numberOfRegisteredAttendees: '',
        maxClassSize: ''
    });

    const handleChange = e => {
        setClassItem({
            ...classItem, 
            [e.target.name]: e.target.value
        });
    }

    const addClass = e => {
        e.preventDefault();
        axiosWithAuth().post("/classes", classItem) //replace with actual backend user endpoint when ready
        .then(res => {
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="loginForm">
            <form onSubmit={addClass}>
                <label htmlFor="name">Class Name </label>
                <input 
                    value={classItem.name}
                    name="name" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="type">Class Type </label>
                <input 
                    value={classItem.type}
                    name="type" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="date">Date </label>
                <input 
                    value={classItem.date}
                    name="date" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="date">Duration </label>
                <input 
                    value={classItem.duration}
                    name="duration" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="name">Intensity </label>
                <input 
                    value={classItem.intensity}
                    name="intensity" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="name">Location </label>
                <input 
                    value={classItem.location}
                    name="location" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="numberOfRegisteredAttendees">Current Class Size </label>
                <input 
                    value={classItem.numberOfRegisteredAttendees}
                    name="numberOfRegisteredAttendees" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="maxClassSize">Max Size </label>
                <input 
                    value={classItem.maxClassSize}
                    name="maxClassSize" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <button>Add Class</button>
            </form>
        </div>
    
    
    )
}

