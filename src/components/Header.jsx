import React from "react";
import Button from '@mui/material/Button';
import styled from "@emotion/styled";


function Header() {

    const ButtonMain = styled(Button)({
        marginTop: "2.5rem",
        letterSpacing: "2px"
    });

    return(
        <header className="header">

            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Anime Book</span>
                    <span className="heading-primary--sub">Find your favourite anime here</span>
                </h1>
          
                <ButtonMain href="#main" variant="contained" size="large">Discover</ButtonMain>
            </div>
            
        </header>
    );
}

export default Header;