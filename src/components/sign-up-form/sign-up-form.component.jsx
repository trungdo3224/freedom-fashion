import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import FormInput from "../form-input/form-input.component";
import {SignUpContainer} from "./sign-up-form.styles";

const SignUpForm = () => {
  const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormField = () => {
    alert("Successful created account");
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("Cannot create account, email already in use.");
      console.log(`${error}`);
    }
  };

  return (
    <SignUpContainer>
      <h2>I don't have an account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label={"Display Name"}
          type={"text"}
          value={displayName}
          name={"displayName"}
          required
        />
        <FormInput
          handleChange={handleChange}
          label={"Email"}
          type={"email"}
          value={email}
          name={"email"}
          required
        />
        <FormInput
          handleChange={handleChange}
          label={"Password"}
          type={"password"}
          value={password}
          name={"password"}
          required
        />
        <FormInput
          handleChange={handleChange}
          label={"Confirm Password"}
          type={"password"}
          value={confirmPassword}
          name={"confirmPassword"}
          required
        />

        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
}

export default SignUpForm;
