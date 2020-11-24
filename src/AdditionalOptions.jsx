import React, { Component } from 'react';

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
            <div>
                <button onClick={this.toggleMenu}> Show Additional Optinos </button>
                { this.state.showAddOptions ? (
                <div id="AddOptionsMenu">
                     <input type="radio" id="min_walking" name="add_options" value="min_walking"/>
                        <label for="min_walking">Minimize Walking</label><br/>
                        <input type="radio" id="min_transfers" name="add_options" value="min_transfers"/>
                        <label for="min_transfers">Minimize Transfers</label><br/>
                </div>
                ) : (null)

            }
            </div>
        )
    }
}

export default AdditionalOptions;