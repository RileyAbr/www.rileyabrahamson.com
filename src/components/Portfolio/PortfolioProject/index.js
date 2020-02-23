import React from 'react';

import './styles.scss';

import PortfolioModal from './PortfolioModal';

class PortfolioProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return (
            <div>
                <div className="overlay-container">
                    <img className="overlay-image align-middle"
                        //src={this.props.mediaPath} 
                        src={process.env.PUBLIC_URL + "portfolio_img/" + this.props.mediaPath} />
                    <div className="overlay-hover">
                        <div className="overlay-description" onClick={e => {
                            this.showModal(e);
                        }}>
                            <p className="overlay-text">
                                <strong>{this.props.title}</strong>
                                <br></br>
                                {this.props.previewLine1}
                                <br></br>
                                {this.props.previewLine2}
                            </p>
                        </div>
                    </div>
                </div>

                <PortfolioModal onClose={this.showModal} show={this.state.show}>
                    Test Bodydfadsfasd
                </PortfolioModal>
            </div>
        );
    }
}

export default PortfolioProject;
