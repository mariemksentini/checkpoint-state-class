import React, { Component } from 'react'
import Counter from './Components/Counter'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Software Developer and React Enthusiast',
        imgSrc: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
        profession: 'Software Engineer',
      },
      shows: false,
    }
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }))
  }

  render() {
    const { person, shows } = this.state

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt="Profile" />
            <h1>{person.fullName}</h1>
            <h3>{person.profession}</h3>
            <p>{person.bio}</p>
            
            <Counter />
          </div>
        )}
      </div>
    )
  }
}

export default App
