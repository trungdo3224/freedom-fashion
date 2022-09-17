import { useState, FC } from "react";
import { AccountDropDownContainer } from "./account-dropdown.styles";

type AccountDropDownProps = {
    children: string,
    isOpen: boolean
}

const AccountDropDown: FC<AccountDropDownProps> = ({children, isOpen}) => {
  return(
    <AccountDropDownContainer>
        {children}
    </AccountDropDownContainer>
  )
};

export default AccountDropDown;
