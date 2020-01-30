import React from 'react';
import Form from './Form'

import './App.css';
import Cards from './Cards'


class App extends React.Component {
  constructor() {
    var date = new Date()
    Date.prototype.formatMMDDYYYY = function(){
        return (this.getMonth() + 1) + 
        "/" +  this.getDate() +
        "/" +  this.getFullYear();
    }
    super()
    this.state = {
      displayedWordCount: 50000, 
      displayedStartDate: new Date(date.getFullYear(), date.getMonth(), 1), 
      displayedEndDate: new Date(date.getFullYear(), date.getMonth() + 1, 0), 
      currentWords: 0, 
      openNav: false
    }
    this.updateValues = this.updateValues.bind(this)
  }

  updateValues(start, end, words) {
    this.setState({displayedStartDate: start, 
    displayedEndDate: end, 
    displayedWordCount: words})
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const start = this.state.displayedStartDate
      const end = this.state.displayedEndDate
      const curr = new Date()

      // console.log("Current time", curr.toString())
      // console.log("End time: ", end.toString())
      if (curr > end) {
        // console.log("curent time is greater than end")
        this.setState({currentWords: this.state.displayedWordCount})
      } else {
        const timeDiff = end.getTime() - start.getTime()
        const currDiff = curr.getTime() - start.getTime()
        const currentWords = (currDiff / timeDiff) * this.state.displayedWordCount
        this.setState({currentWords: currentWords.toFixed(2)})
      }
      
    }, 1000);
  }


  render() {
    return (
      <div className="App">
        <h1>NaNoWriMo Doom Clock</h1>
        <h3>A project inspired by <a href="http://twitter.com/bluetshirt">@bluetshirt</a></h3>
        <div className="content">
          <Form updateFunction={this.updateValues}/>
          <Cards start={this.state.displayedStartDate}
                end={this.state.displayedEndDate}
                wordGoal={this.state.displayedWordCount}
                currentWords={this.state.currentWords}
            />
        </div>
        <h3 className="credit"><a href="http://bluetshirt.ca/nanoclock/">see the original</a></h3>
      </div>
    )
  }
  
}

export default App;
