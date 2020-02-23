import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

export default class PortfolioModal extends React.Component {
    constructor(props) {
        super(props);
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div class="portfolio-modal">
                <div class="portfolio-modal-header">
                    <h4 class="portfolio-modal-title" id="modal-basic-title">Test</h4>
                    <button type="button" class="modal-close close" aria-label="Close">
                        <span aria-hidden="true" onClick={e => {
                            this.onClose(e);
                        }}>&times;</span>
                    </button>
                </div>
                <div class="portfolio-modal-body">
                    <p class="modal-desc">{this.props.children}</p>
                    <img class="portfolio-modal-preview-image" src={""} alt=""></img>
                    {/* <video class="portfolio-modal-preview-clip" src={""} controls muted></video> */}
                    <p class="portfolio-modal-tech">Technologies used: Test</p>
                </div>
                <div class="portfolio-modal-footer">
                    <a class="portfolio-modal-btn btn-outline-dark" href={""}
                        target="_blank" rel="noopener noreferrer">Link to Project</a>
                    <a class="portfolio-modal-btn" href={""}
                        target="_blank" rel="noopener noreferrer">Link to GitHub Repo</a>
                </div>
            </div>
        )
    }
}

PortfolioModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};