import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Nav, NavItem } from 'react-bootstrap';

import 'react-select/dist/react-select.css';
import PortfolioItem from './PortfolioItem';
import Loading from './Loading';
import '../css/portfolio.css';


class Portfolio extends Component {

  constructor(){
      super();
      this.state = {
          categories: [],
          portfolioItems: [],
          selectValue: null,
          isLoading: true,
          isActive: false,
      }
  }

  updateValue = (index) => {
    let currCat = this.state.categories[index];

		this.setState({
			selectValue: currCat.id,
		}, function(){
      // console.log(this.state.selectValue);
    });
	}

  componentWillMount(){
      var self = this;
      //get articles
       axios.get('/api/portfolioItems.json').then((data) => {
            self.setState({
               portfolioItems: data.data,
             })
          })
          .catch(function (error) {
             console.log(error);
          })
      axios.get('/api/categories.json').then((data) => {
           // console.log(data);
           self.setState({
              categories: data.data,
              isLoading: false
            })
         })
         .catch(function (error) {
            console.log(error);
         })
  }

  render(){
    const cat = this.state.categories.map(e => ({value: e.id, label: e.description}));

    var pList;
    if (this.state.selectValue){
      pList = this.state.portfolioItems.filter( item => item.category_id === this.state.selectValue );
    } else if(this.state.selectValue == null){
      pList = this.state.portfolioItems.filter( item => item.category_id !== 4);
    } else {
      pList = this.state.portfolioItems;
    }

    if (this.state.isLoading) {
         return <Loading/>
    }

    let menuFilterItems = this.state.categories.map((item, index) => (
      <NavItem eventKey={index} key={item.id} href="#">
          <p className='' onClick={this.updateValue.bind(this, index)}>{item.description}</p>
      </NavItem>
    ))

    return(
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto inner-wrapper">
          <h2 className="mb-5">Projects</h2>
          <div className="row">
            <div className="btn-group col-6 col-xs-12 col-md-10 col-lg-10 col-lg-offset-2">
                <Nav bsStyle="pills" onSelect={k => this.updateValue(k)}>
                  {menuFilterItems}
                </Nav>
            </div>
          </div>
              <PortfolioItem portfolioItems={pList}/>
        </div>
      </section>
    )
  }
}

export default Portfolio;
