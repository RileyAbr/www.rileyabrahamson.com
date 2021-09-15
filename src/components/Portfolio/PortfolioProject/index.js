import React, { useState } from "react";
import PortfolioModal from "./PortfolioModal";
import "./styles.scss";

const PortfolioProject2 = ({ title, metadata }) => {
    const [show, setShow] = useState(false);

    const showModal = (e) => {
        setShow(!show);
    };

    return (
        <section className="portfolio-project">
            <div className="overlay-container">
                <img
                    className="overlay-image align-middle"
                    src={metadata.thumbnail.url}
                    alt={title}
                />
                <div className="overlay-hover">
                    <div
                        className="overlay-description"
                        onClick={(e) => {
                            showModal(e);
                        }}
                    >
                        <p className="overlay-text">
                            <strong>{title}</strong>
                            <br></br>
                            {metadata.teaser}
                        </p>
                    </div>
                </div>
            </div>

            <PortfolioModal
                onClose={() => showModal()}
                show={show}
                title={title}
                modalMediaType={metadata.modal_media_type}
                modalMediaPath={metadata.modal_media.url}
                techUsed={metadata.tech_used}
                externalLink={metadata.external_link}
                repoLink={metadata.source_link}
            >
                {metadata.description}
            </PortfolioModal>
        </section>
    );
};

export default PortfolioProject2;
