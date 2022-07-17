import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Experience = () => {
      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
      return (
            <div className='experience' id='Experience'>

                  <div className="achievement">
                        <div className="circle">8+</div>
                        <span style={{color : darkMode ? 'white' : 'black'}}>Years</span>
                        <span>Experience</span>
                  </div>

                  <div className="achievement">
                        <div className="circle">10+</div>
                        <span style={{color : darkMode ? 'white' : 'black'}}>Completed</span>
                        <span>Projects</span>
                  </div>

                  <div className="achievement">
                        <div className="circle">5+</div>
                        <span style={{color : darkMode ? 'white' : 'black'}}>Companies</span>
                        <span>Work</span>
                  </div>

            </div>
      )
}

export default Experience