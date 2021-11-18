import React, { useState } from 'react'
import axios from 'axios'
// import { getTokenFromLocalStorage } from './Helpers/auth'
import ExperienceForm from './ExperienceForm'


const ExperienceNew = () => {

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    duration: '',
    description: '',
    categories: '',
    price: '',
    languages: '',
    uploadImage: ''
  })


  const [errorData, setErrorData] = useState({
    name: '',
    location: '',
    duration: '',
    description: '',
    categories: '',
    price: '',
    languages: '',
    uploadImage: ''
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    console.log('Event Target Value ->', event.target.value)
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Form Data ->', formData)
    try {
      await axios.post('/api/experiences',
        formData,
        {
          headers: { 
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTkzYjczMDRlNTM3ZmNkMDQ5ZWQ3MTAiLCJpYXQiOjE2MzcxNTM5OTgsImV4cCI6MTYzNzQxMzE5OH0.wbnKjZostpEfb7T7UEiY13lem400YDepCJqfyvw_JHc' }
        }
      )
    } catch (err) {
      console.log('Error ->', err)
      setErrorData(err.response.data.errors)
    }
  }

  return (
    <section>
      <div>
        <ExperienceForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          errors={errorData}
          setFormData={setFormData}
        />
      </div>
    </section>
  )

}

export default ExperienceNew



