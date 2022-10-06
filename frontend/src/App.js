import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {HomePage} from './components/Home';

class Parent extends Component{
	constructor(props) {
		super(props);
        this.state = {
            
        }
	}

    render(){
        return(
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
				</BrowserRouter>
			</div>
        )
    }
}

export default Parent;