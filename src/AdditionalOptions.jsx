import React, { Component } from 'react';
import './PlanYourTripTab.css'

class AdditionalOptions extends Component {
    constructor() {
        super();
        this.state = {
            showAddOptions: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }


    toggleMenu(){
        this.setState({
            showAddOptions: !this.state.showAddOptions
        });
    }

    render(){
        return(
            <div>{ !this.state.showAddOptions ? (
                <button className="OptionsButton" onClick={this.toggleMenu}>Show Additional Options</button>
            ) : (<button className="OptionsButton" onClick={this.toggleMenu}>Hide Additional Options</button>)}
                { this.state.showAddOptions ? (
                <div id="AddOptionsMenu">
                    <label>
                     <input type="radio" id="min_walking" name="add_options" value="min_walking"/>
                        Minimize Walking</label><br/>
                        <label><input type="radio" id="min_transfers" name="add_options" value="min_transfers"/>
                        Minimize Transfers</label><br/>
                </div>
                ) : (null)

            }
            </div>
        )
    }
}

export default AdditionalOptions;