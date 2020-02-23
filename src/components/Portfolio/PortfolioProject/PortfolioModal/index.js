import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

export default class PortfolioModal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div>
                <div class="modal-header">
                    <h4 class="modal-title" id="modal-basic-title">Test</h4>
                    <button type="button" class="modal-close close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p class="modal-desc">{this.props.children}</p>
                    <img class="modal-preview-image" src={""} alt=""></img>
                    <video class="modal-preview-clip" src={""} controls muted></video>
                    <p class="modal-tech">Technologies used: Test</p>
                </div>
                <div class="modal-footer">
                    <a class="modal-btn btn-outline-dark" href={""}
                        target="_blank">Link to Project</a>
                    <a class="modal-btn" href={""}
                        target="_blank">Link to GitHub Repo</a>
                </div>
            </div>
        )
    }
}

PortfolioModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};