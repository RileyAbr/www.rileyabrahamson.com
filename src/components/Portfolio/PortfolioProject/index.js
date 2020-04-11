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
            <section className="portfolio-project">
                <div className="overlay-container">
                    <img className="overlay-image align-middle"
                        src={process.env.PUBLIC_URL + "portfolio_thumbs/" + this.props.mediaPath} />
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

                <PortfolioModal
                    onClose={this.showModal}
                    show={this.state.show}
                    title={this.props.title}
                    techUsed={this.props.techUsed}
                    modalMediaPath={this.props.modalMediaPath}
                    modalMediaIsImage={this.props.modalMediaIsImage}
                    hasExternalLink={this.props.hasExternalLink}
                    externalLink={this.props.externalLink}
                    hasRepo={this.props.hasRepo}
                    repoLink={this.props.repoLink}
                >
                    {this.props.longDesc}
                </PortfolioModal>
            </section>
        );
    }
}

export default PortfolioProject;
