import React from "react"
import Rocket from './assets/start-up.png'
import Flag from './assets/racing-flag.png'
import Typewriter from './assets/typewriter.png'
import Trophy from './assets/award.png'
import './Cards.css'

function Cards(props) {
    return(
        <div className="Cards">
          <div className="row">
            <div className="small card">
              <img src={Rocket} alt="Icon of rocket ship" />
              <h3>Start Date</h3>
              <div className="value">
                <p>{props.start.formatMMDDYYYY()}</p>
              </div>
            </div>
            <div className="small card">
              <img src={Flag} alt="Icon of racing flag" />
              <h3>End Date</h3>
              <div className="value">
                <p>{props.end.formatMMDDYYYY()}</p>
              </div>
            </div>
            <div className="small card">
              <img src={Trophy} alt="Icon of trophy" />
              <h3>Word Goal</h3>
              <div className="value">
                <p>{props.wordGoal}</p>
              </div>
            </div>

          </div>
          <div className="large card" id="current-words">
            <img src={Typewriter} alt="Icon of a typewriter" />
            <h2><span className="words">{props.currentWords}</span>  words</h2>
          </div>
        </div>
    )
}

export default Cards