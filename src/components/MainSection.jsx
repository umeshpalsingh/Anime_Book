import React from "react";
// import AnimeCard from "./Card";
import NewCard from "./NewCard";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";


function MainSection({ detail }) {

    const Heading = styled(Typography)({
        fontSize: "1.75rem",
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontWeight: "500",
        color: "#eee"
    });

    return (
        <section id="main" className="section-main">
            <Heading variant="h3" sx={{ mb: "5rem", mt: "2rem" }} align="center"  >Look at the details of anime</Heading>

            {/* FIRST ROW */}
            <div className="row">
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[0]?.image}
                        name={detail[0]?.title}
                        description={detail[0]?.description}
                        ID={detail[0]?.id}
                        original_title={detail[0]?.original_title}
                        movie_banner={detail[0]?.movie_banner}
                        director={detail[0]?.director}
                        producer={detail[0]?.producer}
                        release_date={detail[0]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[1]?.image}
                        name={detail[1]?.title}
                        description={detail[1]?.description}
                        ID={detail[1]?.id}
                        original_title={detail[1]?.original_title}
                        movie_banner={detail[1]?.movie_banner}
                        director={detail[1]?.director}
                        producer={detail[1]?.producer}
                        release_date={detail[1]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[2]?.image}
                        name={detail[2]?.title}
                        description={detail[2]?.description}
                        ID={detail[2]?.id}
                        original_title={detail[2]?.original_title}
                        movie_banner={detail[2]?.movie_banner}
                        director={detail[2]?.director}
                        producer={detail[2]?.producer}
                        release_date={detail[2]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[3]?.image}
                        name={detail[3]?.title}
                        description={detail[3]?.description}
                        ID={detail[3]?.id}
                        original_title={detail[3]?.original_title}
                        movie_banner={detail[3]?.movie_banner}
                        director={detail[3]?.director}
                        producer={detail[3]?.producer}
                        release_date={detail[3]?.release_date}

                    />
                </div>
            </div>

            {/* SECOND ROW */}
            <div className="row">
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[4]?.image}
                        name={detail[4]?.title}
                        description={detail[4]?.description}
                        ID={detail[4]?.id}
                        original_title={detail[4]?.original_title}
                        movie_banner={detail[4]?.movie_banner}
                        director={detail[4]?.director}
                        producer={detail[4]?.producer}
                        release_date={detail[4]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[5]?.image}
                        name={detail[5]?.title}
                        description={detail[5]?.description}
                        ID={detail[5]?.id}
                        original_title={detail[5]?.original_title}
                        movie_banner={detail[5]?.movie_banner}
                        director={detail[5]?.director}
                        producer={detail[5]?.producer}
                        release_date={detail[5]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[6]?.image}
                        name={detail[6]?.title}
                        description={detail[6]?.description}
                        ID={detail[6]?.id}
                        original_title={detail[6]?.original_title}
                        movie_banner={detail[6]?.movie_banner}
                        director={detail[6]?.director}
                        producer={detail[6]?.producer}
                        release_date={detail[6]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[7]?.image}
                        name={detail[7]?.title}
                        description={detail[7]?.description}
                        ID={detail[7]?.id}
                        original_title={detail[7]?.original_title}
                        movie_banner={detail[7]?.movie_banner}
                        director={detail[7]?.director}
                        producer={detail[7]?.producer}
                        release_date={detail[7]?.release_date}

                    />
                </div>
            </div>

            {/* THIRD ROW */}
            <div className="row">
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[8]?.image}
                        name={detail[8]?.title}
                        description={detail[8]?.description}
                        ID={detail[8]?.id}
                        original_title={detail[8]?.original_title}
                        movie_banner={detail[8]?.movie_banner}
                        director={detail[8]?.director}
                        producer={detail[8]?.producer}
                        release_date={detail[8]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[9]?.image}
                        name={detail[9]?.title}
                        description={detail[9]?.description}
                        ID={detail[9]?.id}
                        original_title={detail[9]?.original_title}
                        movie_banner={detail[9]?.movie_banner}
                        director={detail[9]?.director}
                        producer={detail[9]?.producer}
                        release_date={detail[9]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[10]?.image}
                        name={detail[10]?.title}
                        description={detail[10]?.description}
                        ID={detail[10]?.id}
                        original_title={detail[10]?.original_title}
                        movie_banner={detail[10]?.movie_banner}
                        director={detail[10]?.director}
                        producer={detail[10]?.producer}
                        release_date={detail[10]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[11]?.image}
                        name={detail[11]?.title}
                        description={detail[11]?.description}
                        ID={detail[11]?.id}
                        original_title={detail[11]?.original_title}
                        movie_banner={detail[11]?.movie_banner}
                        director={detail[11]?.director}
                        producer={detail[11]?.producer}
                        release_date={detail[11]?.release_date}

                    />
                </div>
            </div>

            {/* FORTH ROW */}
            <div className="row">
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[12]?.image}
                        name={detail[12]?.title}
                        description={detail[12]?.description}
                        ID={detail[12]?.id}
                        original_title={detail[12]?.original_title}
                        movie_banner={detail[12]?.movie_banner}
                        director={detail[12]?.director}
                        producer={detail[12]?.producer}
                        release_date={detail[12]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[13]?.image}
                        name={detail[13]?.title}
                        description={detail[13]?.description}
                        ID={detail[13]?.id}
                        original_title={detail[13]?.original_title}
                        movie_banner={detail[13]?.movie_banner}
                        director={detail[13]?.director}
                        producer={detail[13]?.producer}
                        release_date={detail[13]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[14]?.image}
                        name={detail[14]?.title}
                        description={detail[14]?.description}
                        ID={detail[14]?.id}
                        original_title={detail[14]?.original_title}
                        movie_banner={detail[14]?.movie_banner}
                        director={detail[14]?.director}
                        producer={detail[14]?.producer}
                        release_date={detail[14]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[15]?.image}
                        name={detail[15]?.title}
                        description={detail[15]?.description}
                        ID={detail[15]?.id}
                        original_title={detail[15]?.original_title}
                        movie_banner={detail[15]?.movie_banner}
                        director={detail[15]?.director}
                        producer={detail[15]?.producer}
                        release_date={detail[15]?.release_date}

                    />
                </div>
            </div>

            {/* FIFTH ROW */}
            <div className="row">
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[16]?.image}
                        name={detail[16]?.title}
                        description={detail[16]?.description}
                        ID={detail[16]?.id}
                        original_title={detail[16]?.original_title}
                        movie_banner={detail[16]?.movie_banner}
                        director={detail[16]?.director}
                        producer={detail[16]?.producer}
                        release_date={detail[16]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[17]?.image}
                        name={detail[17]?.title}
                        description={detail[17]?.description}
                        ID={detail[17]?.id}
                        original_title={detail[17]?.original_title}
                        movie_banner={detail[17]?.movie_banner}
                        director={detail[17]?.director}
                        producer={detail[17]?.producer}
                        release_date={detail[17]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[19]?.image}
                        name={detail[19]?.title}
                        description={detail[19]?.description}
                        ID={detail[19]?.id}
                        original_title={detail[19]?.original_title}
                        movie_banner={detail[19]?.movie_banner}
                        director={detail[19]?.director}
                        producer={detail[19]?.producer}
                        release_date={detail[19]?.release_date}

                    />
                </div>
                <div className="col-1-of-4">
                    <NewCard
                        img={detail[21]?.image}
                        name={detail[21]?.title}
                        description={detail[21]?.description}
                        ID={detail[21]?.id}
                        original_title={detail[21]?.original_title}
                        movie_banner={detail[21]?.movie_banner}
                        director={detail[21]?.director}
                        producer={detail[21]?.producer}
                        release_date={detail[21]?.release_date}

                    />
                </div>
            </div>



        </section>
    );
}

export default MainSection;