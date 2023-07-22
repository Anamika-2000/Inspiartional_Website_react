import React, { useState } from "react";
import axios from "axios";

function WriteInspiration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  console.log(formData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8800/api/inspiration", formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 class="text-center text-red-500 text-4xl font-bold mt-8">
        Welcome to mysite!
      </h1>
      <p class="text-xl text-center mt-4">
        <b>
          Hi, my friend! You can write inspirations/experiences that you have in
          your daily life on our site. Hope it will help or motivate others.
        </b>
      </p>

      <img
        src="https://media.istockphoto.com/photos/day-one-of-getting-my-life-into-gear-picture-id1278058065?b=1&k=20&m=1278058065&s=170667a&w=0&h=01ookdBsMGGNplphN2fHRXsEetWTPvES4HUSGVCgnJ8="
        class="mx-auto my-8 max-w-full"
        alt="write"
        width="1000"
        height="500"
      />

      <h2 class="text-center text-brown text-3xl font-bold">
        Write your own inspirational story
      </h2>

      <form id="write" class="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="firstName"
          >
            First Name:
          </label>
          <input
            class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="lastName"
          >
            Last Name:
          </label>
          <input
            class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email ID:
          </label>
          <input
            class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="phoneNumber"
          >
            Phone Number:
          </label>
          <input
            class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="description"
          >
            Enter the inspiration or experience of your life:
          </label>
          <textarea
            class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            rows="5"
            cols="60"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write your story here"
          ></textarea>
        </div>

        <input
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default WriteInspiration;
