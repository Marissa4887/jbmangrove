import React, {Component} from 'react';
import BALineChart from './BALineChart';

class CompareBioData extends Component {

  render(){
    let graphs = this.props.results;
    let graph1 = graphs.graph1;
    let graph2 = graphs.graph2;

    return(
      <div>
        <h4>Comparing Bioacoustic Area Over Time</h4>
        <BALineChart results = {graph1}
                    xAxisLabel = {"Date"}
                    yAxisLabel = {"Area Value"}
                    />
        <h4>Comparing Bioacoustic Area By Site</h4>
        <BALineChart results = {graph2}
                    xAxisLabel = {"Site"}
                    yAxisLabel = {"Area Value"}
                    />
      </div>
    );
  }
}

export default CompareBioData;