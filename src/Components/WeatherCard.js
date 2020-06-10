import React, { Component } from 'react';

class WeatherCard extends Component {
    render() {
        return (
        <div>
            <div class="container align-center">
                {/* <h5 className="display-3 jumbotron"> Forcast For Day </h5> */}
                <h5 className="display-5 text-muted"> {this.props.info.name}, {this.props.info.country} </h5>
                <h5 className="date" > Today </h5>
                </div>
            <div class="row justify-content-md-center">
            <div class="card bg-light mb-1" style={{width: 280, height: 200, margin: 100, backgroundcolor: 'gray'}}>
                <div class="card-header"> {this.props.info.name}, {this.props.info.country}</div>
            <div class="card-body">
              {/* <h5 class="card-title"> city: {this.props.info.name}</h5> */}
              <h5 class="card-content"> {Math.round(this.props.info.temp)}°F</h5>
              <p class="card-text"> {this.props.info.description}</p>
            </div>
            </div>
            </div>
        </div>

        // <div class="card weather-card">

        // {/* Card content */}
        // <div class="card-body pb-3">
        // <h4 class="card-title font-weight-bold"> city: {this.props.info.name}</h4>

        // <div class="d-flex justify-content-between">
        // <p class="display-1 degree">temp: {this.props.info.temp}</p>
        //     <i class="fas fa-sun-o fa-5x pt-3 amber-text"></i>
        // </div>
        // <div class="d-flex justify-content-between mb-4">
        // <p><i class="fas fa-tint fa-lg text-info pr-2"></i> description: {this.props.info.description}</p>
        // </div>
        

        // </div>
        // </div>
        );
    }
}

export default WeatherCard;