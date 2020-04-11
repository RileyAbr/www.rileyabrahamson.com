import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

export default class PortfolioModal extends React.Component {
    // Closes the modal when called
    // Implemented on the background wrapper as well as the "X" button in the modal
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    // This function prevents child element actions from bubbling up to their parents
    stopBubbleUp = e => {
        e.persist();
        e.nativeEvent.stopImmediatePropagation();
        e.stopPropagation();
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="portfolio-popup">
                <div className="portfolio-modal-backdrop"></div>

                <div className="portfolio-modal-wrapper"
                    onClick={e => {
                        this.onClose(e);
                    }}>

                    <div className="portfolio-modal"
                        onClick={e => {
                            this.stopBubbleUp(e);
                        }}>

                        {/* Header */}
                        <div className="portfolio-modal-header">
                            <h2 className="portfolio-modal-title">
                                {this.props.title}
                            </h2>
                            <button type="button"
                                className="portfolio-modal-close " aria-label="Close">
                                <span aria-hidden="true" onClick={e => {
                                    this.onClose(e);
                                }}>
                                    &times;
                                </span>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="portfolio-modal-body">
                            <p className="portfolio-modal-desc">
                                {this.props.children}
                            </p>

                            {/* Conditional check for whether media in the modal is an image or not */}
                            {this.props.modalMediaIsImage &&
                                <img className="portfolio-modal-media"
                                    src={process.env.PUBLIC_URL + "portfolio_media/img/" + this.props.modalMediaPath}
                                    alt=""></img>
                            }
                            {!this.props.modalMediaIsImage &&
                                <video className="portfolio-modal-media"
                                    src={process.env.PUBLIC_URL + "portfolio_media/video/" + this.props.modalMediaPath} controls muted>
                                </video>
                            }

                            <p className="portfolio-modal-tech">
                                Technologies used: {this.props.techUsed}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="portfolio-modal-footer">
                            {/* Only renders the external link if one exists */}
                            {this.props.hasExternalLink &&
                                <a className="portfolio-modal-btn"
                                    href={this.props.externalLink}
                                    target="_blank" rel="noopener noreferrer">
                                    Link to Project
                                </a>
                            }
                            {/* Only renders the repo link if it exists */}
                            {this.props.hasRepo &&
                                <a className="portfolio-modal-btn"
                                    href={this.props.repoLink}
                                    target="_blank" rel="noopener noreferrer">
                                    Link to GitHub Repo
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

PortfolioModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};