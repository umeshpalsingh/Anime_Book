import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { GitHub } from "@mui/icons-material";

function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    const Title = styled(Typography)({
        fontSize: ".7rem",
        display: "inline-block",
        color: "#ccc",
        textTransform: "uppercase",
        letterSpacing: "1px"
    });

    return(
        <section className="footer">
            <div className="u-text-center">
              <Title variant="h6" sx={{m: "2.5rem"}}>Copyright &copy; {year} Anime Book</Title>
            </div>
        </section>
    );
};

export default Footer;