import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { signUpStart  } from "../../redux/user/user.action";
import {AuthError, AuthErrorCodes} from "firebase/auth"

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import FormInput from "../form-input/form-input.component";
import {SignUpContainer} from "./sign-up-form.styles";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormField = () => {
    alert("Successful created account");
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      dispatch(signUpStart(displayName, email, password));
      resetFormField();

    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS)
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
          onChange={handleChange}
          label={"Display Name"}
          type={"text"}
          value={displayName}
          name={"displayName"}
          required
        />
        <FormInput
          onChange={handleChange}
          label={"Email"}
          type={"email"}
          value={email}
          name={"email"}
          required
        />
        <FormInput
          onChange={handleChange}
          label={"Password"}
          type={"password"}
          value={password}
          name={"password"}
          required
        />
        <FormInput
          onChange={handleChange}
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
