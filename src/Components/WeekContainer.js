import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

const apikey = "981d17d8ab6675623768afe5449de485";

class WeekContainer extends Component {
    
    state = {
        name: 'New York',
        country: '',
        temp: '',
        description: ''
    }
    
     
    fetchData =(name)=>{
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                name: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                description: data.weather[0].description
                        }) 
            console.log(data)
        })
    }

    componentDidMount= () => {
        this.fetchData(this.state.name) 
    }

    handleClick=(e)=>{
        e.preventDefault();
        this.setState({ 
            name : e.target.parentElement.firstChild.value
        })
        this.fetchData(e.target.parentElement.firstChild.value)
    }

    


    render() {
        return (
            <div>
                <div class="md-form active-cyan-2 mb-3">
                    <input class="search-bar" type="text" placeholder="Search.." aria-label="Search" style={{margin:'20px'}}/> 
                    <button class="submit" onClick={this.handleClick}> Enter</button>   
                </div>
                <div>
                <WeatherCard info={this.state}/>
                </div>
            </div>
        );
    }
}

export default WeekContainer;
