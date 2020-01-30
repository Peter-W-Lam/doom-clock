import React from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";
import './Form.css'

class Form extends React.Component {

    constructor(props) {
        super(props)  
        this.state = {
            start: new Date((new Date()).getFullYear(), (new Date()).getMonth(), 1),
            end: new Date((new Date()).getFullYear(), (new Date()).getMonth() + 1, 0), 
            wordCount: 50000, 
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({wordCount: event.target.value })
    }

    handleDateChange(date) {
        date.setHours(23,59,59,999)
        this.setState({end: date})
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.state.wordCount > 999999 || this.state.wordCount < 0) {
            alert("Word count must be between 1 and 999,999")
        } else {
            this.props.updateFunction(this.state.start, this.state.end, this.state.wordCount)
        }
        
    }

    

    render() {

        return(
            <div className="Form">
                <form onSubmit={this.handleSubmit}>
                    <div className="col">
                        <p className="label">Target Word Count</p>
                        <input 
                            type="number" 
                            value={this.state.wordCount} 
                            onChange={this.handleChange}
                            pattern="[0-9]*"
                        />
                    </div>
                    <div className="col">
                        <p className="label">Start Date</p>
                        <DatePicker 
                            className="date-picker"
                            selected={this.state.start} 
                            onChange={(date) => {
                                date.setHours(0,0,0,0)
                                this.setState({start: date})
                            }}
                        />
                    </div>
                    <div className="col">
                        <p className="label">End Date</p>
                        <DatePicker 
                            selected={this.state.end} 
                            onChange={this.handleDateChange}
                            minDate={this.state.start}
                        />    
                    </div>
                    
                    
                    
                    <input className="update-btn" type="submit" value="Update Clock" />
                </form>
                
            </div>
        )
    }
}

export default Form