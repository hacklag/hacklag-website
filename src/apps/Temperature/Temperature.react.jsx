import React from 'react';
import Router from 'react-router-old';
import d3 from 'd3';

export default React.createClass({
  displayName: 'Temperature',

  mixins: [
    Router.State,
    Router.Navigation
  ],
  getInitialState() {
    let tmpDate = new Date();
    let temperatures = [
      {
        temp: 26.2,
        date: tmpDate.setHours(tmpDate.getHours() - 4)
      },
      {
        temp: 25.9,
        date: tmpDate.setHours(tmpDate.getHours() + 1)
      },
      {
        temp: 25.5,
        date: tmpDate.setHours(tmpDate.getHours() + 1)
      },
      {
        temp: 25.4,
        date: tmpDate.setHours(tmpDate.getHours() + 1)
      }
    ];

    return {
      temperature: temperatures
    };
  },
  componentDidMount() {
    d3.select('svg > *').remove();
    let data = this.state.temperature;
    let vis = d3.select('#visualisation');
    let WIDTH = 1000;
    let HEIGHT = 500;
    let MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50
    };
    let xDomainBegin = new Date();
    let xDomainEnd = xDomainBegin.setHours(xDomainBegin.getHours() + 1);
    let xScale = d3.time.scale.utc().range([MARGINS.left, WIDTH - MARGINS.right])
    .domain([xDomainBegin.setHours(xDomainBegin.getHours() - 5), xDomainEnd]);
    let yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([25, 26.5]);
    let xAxis = d3.svg.axis().scale(xScale);
    let yAxis = d3.svg.axis().scale(yScale).orient('left');

    vis.append('svg:g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
    .call(xAxis);
    vis.append('svg:g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
    .call(yAxis);
    let lineGen = d3.svg.line().x(function(lgd) {
      return xScale(lgd.date);
    }).y(function(lgd) {
      return yScale(lgd.temp);
    });

    vis.append('svg:path')
    .attr('d', lineGen(data))
    .attr('stroke', 'red')
    .attr('stroke-width', 2)
    .attr('fill', 'none');
  },
  componentDidUpdate() {
    d3.select('svg > path').remove();
    let vis = d3.select('#visualisation');
    let WIDTH = 1000;
    let HEIGHT = 500;
    let MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50
    };
    let xDomainBegin = new Date();
    let xDomainEnd = xDomainBegin.setHours(xDomainBegin.getHours() + 1);
    let xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right])
    .domain([xDomainBegin.setHours(xDomainBegin.getHours() - 5), xDomainEnd]);
    let yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([25, 26.5]);
    let lineGen = d3.svg.line().x(function(lgd) {
      return xScale(lgd.date);
    }).y(function(lgd) {
      return yScale(lgd.temp);
    });

    vis.append('svg:path')
    .attr('d', lineGen(this.state.temperature))
    .attr('stroke', 'red')
    .attr('stroke-width', 2)
    .attr('fill', 'none');
  },
  updateTemperature() {
    let data = this.state.temperature;
    let date = new Date();
    let tempObject = {
      temp: (Math.random() * (26.4 - 25.0) + 25.0).toFixed(1),
      date: Number(date)
    };

    data.push(tempObject);
    this.setState({
      temperature: data
    });
  },
  render() {
    return (
    <div>
      <div>
        <p>Temperature flow in room:</p>
        <svg id="visualisation" width="1000" height="500"/>
      </div>
      <div>
        <button type="button" onClick={this.updateTemperature}>Update Temperature</button>
      </div>
    </div>
    );
  }
});
