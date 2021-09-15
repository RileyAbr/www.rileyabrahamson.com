import React from "react";
import "./styles.scss";

const PortfolioModalMedia = (mediaType, modalMediaPath) => {
    switch (mediaType) {
        case "image":
            return (
                <img
                    className="portfolio-modal-media"
                    src={modalMediaPath}
                    alt=""
                ></img>
            );
        case "video":
            return (
                <video
                    className="portfolio-modal-media"
                    src={modalMediaPath}
                    controls
                    muted
                ></video>
            );
        case "":
        default:
            return <></>;
    }
};

const PortfolioModal = ({
    children,
    onClose,
    show,
    title,
    techUsed,
    modalMediaType,
    modalMediaPath,
    externalLink,
    repoLink,
}) => {
    // Closes the modal when called
    // Implemented on the background wrapper as well as the "X" button in the modal
    const close = (e) => {
        onClose(e);
    };

    // This function prevents child element actions from bubbling up to their parents
    const stopBubbleUp = (e) => {
        e.persist();
        e.nativeEvent.stopImmediatePropagation();
        e.stopPropagation();
    };

    if (!show) {
        return null;
    }

    return (
        <div className="portfolio-popup">
            <div className="portfolio-modal-backdrop"></div>

            <div
                className="portfolio-modal-wrapper"
                onClick={(e) => {
                    close(e);
                }}
            >
                <div
                    className="portfolio-modal"
                    onClick={(e) => {
                        stopBubbleUp(e);
                    }}
                >
                    {/* Header */}
                    <div className="portfolio-modal-header">
                        <h2 className="portfolio-modal-title">{title}</h2>
                        <button
                            type="button"
                            className="portfolio-modal-close "
                            aria-label="Close"
                        >
                            <span
                                aria-hidden="true"
                                onClick={(e) => {
                                    close(e);
                                }}
                            >
                                &times;
                            </span>
                        </button>
                    </div>

                    {/* Body */}
                    <div className="portfolio-modal-body">
                        <p className="portfolio-modal-desc">{children}</p>

                        {/* Conditional check for whether media in the modal is an image or not */}
                        {modalMediaType &&
                            PortfolioModalMedia(
                                modalMediaType[0].slug,
                                modalMediaPath
                            )}

                        <p className="portfolio-modal-tech">
                            Technologies used:{" "}
                            {techUsed.map((tech, i) => {
                                return (
                                    <span>
                                        {i * 1 === 0 ? "" : ", "}
                                        {tech.title}
                                    </span>
                                );
                            })}
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="portfolio-modal-footer">
                        {/* Only renders the external link if one exists */}
                        {externalLink && (
                            <a
                                className="portfolio-modal-btn"
                                href={externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Link to Project
                            </a>
                        )}
                        {/* Only renders the repo link if it exists */}
                        {repoLink && (
                            <a
                                className="portfolio-modal-btn"
                                href={repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Link to GitHub Repo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal;
