import React, { Component } from 'react';
import { Link, match } from 'react-router-dom';
import Modal from 'react-modal';
import sizeMe from 'react-sizeme';
import StackGrid from "react-stack-grid";
import PropTypes from 'prop-types';

import '../css/portfolioItem.css';
import '../css/modal.css'


//Modal

// const { width } = this.props.size;
// const currWidth = width <= 768 ? '100%' : '50%'
//
// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)',
//     width                 : { currWidth },
//     maxHeight             : '100%'
//   }
// };
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#page');
//end modal

class PortfolioItem extends Component {

  constructor(){
      super();
      this.state = {
        contentLoaded: false,
        modalIsOpen: false,
        modalTitle: '',
        modalImg: '',
        modalContent: '',
        modalGithubLink: '',
        modalLivePreview1: '',
        modalLivePreview2: ''
      }
      this.closeModal = this.closeModal.bind(this);
  }

  //modal
  openModal(){
    this.setState({ modalIsOpen: true });
  }

  closeModal(){
    this.setState({
      modalIsOpen: false,
      modalTitle: '',
      modalImg: '',
      modalContent: '',
      modalGithubLink: '',
      modalLivePreview1: '',
      modalLivePreview2: ''
    });
  }

  //modal content
  val(index){
    let currItem = this.props.portfolioItems[index];
    this.setState({
      modalIsOpen: true,
      modalTitle: currItem.title,
      modalImg: currItem.thumbnail["1x"],
      modalContent: currItem.description,
      modalGithubLink: currItem.urls["github"],
      modalLivePreview1: currItem.urls["live"],
      modalLivePreview2: currItem.urls["live2"],
  })
}
  //end modal content

  render(){
    let portfolioItems, hasLinks;
    if (this.props.portfolioItems.length > 0) {
      portfolioItems = this.props.portfolioItems.map((e, index) =>
                  <div key={e.id} onClick={this.val.bind(this, index)} className="portfolio-item">
                      <div className="card-wrapper">
                        <div className="fakeoverlay"></div>
                          <div className="card-img">
                              <img className="thumb" src={e.thumbnail["1x"]} title={e.title} alt={e.title} media-simple="true" />
                          </div>
                          {e.title
                              ?
                              <div className="card-box">
                                  <h4 className="card-title mbr-fonts-style mbr-bold display-7 title">{e.title}</h4>
                              </div>
                              :
                              null
                          }
                      </div>
                  </div>
                )
    } else {
      portfolioItems = 'No items';
    }

    if(this.state.modalGithubLink !== '' ||
       this.state.modalLivePreview1 !== '' ||
       this.state.modalLivePreview2 !== '') {
          hasLinks = <h3 className="my-3">Project Details</h3>;
    }

    const { width } = this.props.size;
    
    return(
        <StackGrid
              className="grid-main-container"
              gutterWidth={15}
              gutterHeight={15}
              monitorImagesLoaded={true}
              columnWidth={width <= 768 ? '50%' : '25%'}
              >

              {portfolioItems}

              <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    // style={customStyles}
                    className="myModal"
                    >
                    <div className="modal-body">
                      <div className="row">
                        <button className="close-modal" onClick={this.closeModal}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>

                        <div className={hasLinks ? "col-md-8" : "col-md-12"}>
                            <img className="thumb" src={this.state.modalImg} title={this.state.modalTitle} alt={this.state.modalTitle} media-simple="true" />
                        </div>

                        <div className={hasLinks ? "col-md-4" : null}>
                          <h3 className="my-3">{this.state.modalTitle}</h3>
                          <p>{this.state.modalContent}</p>
                          {hasLinks}
                          <ul>
                            {(this.state.modalGithubLink !== '' && this.state.modalGithubLink !== null) ? <li><a href={this.state.modalGithubLink} target="_blank">on GitHub</a></li> : null}
                            {this.state.modalLivePreview1 !== '' ? <li><a href={this.state.modalLivePreview1} target="_blank">Live preview</a></li> : null }
                            {this.state.modalLivePreview2 !== '' ? <li><a href={this.state.modalLivePreview2} target="_blank">Live preview</a></li> : null }
                          </ul>
                        </div>
                      </div>
                    </div>
              </Modal>
            </StackGrid> );
  }
}

PortfolioItem.propTypes = {
     portfolioItems: PropTypes.array.isRequired,
}

export default sizeMe()(PortfolioItem);
