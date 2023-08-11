import { useState, useEffect } from "react";
import { TextInput, PasswordInput, Select, Button } from "@mantine/core";
import HeaderComponent from "../components/Header";
import axios from "axios";

function Signup({ close }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    gender: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [success, setSuccess] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [showPasswordError, setShowPasswordError] = useState(false);
  
  useEffect(() => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.userName &&
      formData.gender &&
      formData.email &&
      formData.phone &&
      formData.country &&
      formData.password &&
      formData.confirmPassword 
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [
    formData.firstName,
    formData.lastName,
    formData.userName,
    formData.gender,
    formData.email,
    formData.phone,
    formData.country,
    formData.password,
    formData.confirmPassword,
  ]);

  function handleSubmit(event) {
    event.preventDefault();

    if(formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
      setShowPasswordError(true);
      setTimeout(() => {
        setShowPasswordError(false);
        setPasswordsMatch(true);
      }, 2000);
      return;
    }
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      userName: formData.userName,
      gender: formData.gender,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/Register/", data)
      .then(function (response) {
        console.log(response);
        close();
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          close();
          setSuccess(false);
        }, 3000);
      });
  }

  return (
    <>
      <HeaderComponent />
      <form style={{ maxWidth: 400, margin: "0 auto" }} onSubmit={handleSubmit}>
        <TextInput
          label="First name"
          placeholder="First name"
          required
          name="firstName"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          style={{ marginBottom: 16 }}
        />
        <TextInput
          label="Last name"
          placeholder="Last name"
          required
          name="lastName"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          style={{ marginBottom: 16 }}
        />
        <TextInput
          label="User name"
          placeholder="User name"
          required
          name="userName"
          value={formData.userName}
          onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
          style={{ marginBottom: 16 }}
        />
        <Select
          label="Gender"
          placeholder="Select gender"
          data={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "transgender", label: "Transgender" },
            { value: "intersex", label: "Intersex" },
            { value: "non_binary", label: "Non Binary" },
            { value: "prefer_not_to_say", label: "Prefer Not to Say" },
            { value: "other", label: "Others" },
          ]}
          required
          name="gender"
          value={formData.gender}
          onChange={(selectedValue) => setFormData({ ...formData, gender:selectedValue})}
          style={{ marginBottom: 16 }}
        />
        <TextInput
          label="Email"
          placeholder="youremailhere"
          required
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{ marginBottom: 16 }}
        />
        <TextInput
          label="Phone"
          placeholder="Phone number"
          required
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          style={{ marginBottom: 16 }}
        />
        <Select
          label="Country"
          placeholder="Select country"
          data={[
            { value: "INDIA", label: "India" },
            // Add more countries as needed
          ]}
          required
          name="country"
          value={formData.country}
          onChange={(selectedValue) => setFormData({ ...formData, country:selectedValue})}
          style={{ marginBottom: 16 }}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          style={{ marginBottom: 16 }}
        />
        <PasswordInput
          label="Confirm password"
          placeholder="Confirm your password"
          required
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          style={{ marginBottom: 16 }}
        />
        {!passwordsMatch && (<p style={{color: "red"}}>Passwords do not match</p>)}
        <Button type="submit" fullWidth mt="xl" disabled={!formValid}>
          Sign Up
        </Button>
      </form>
    </>
  );
}

export default Signup;
