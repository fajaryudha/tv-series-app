import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro'

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }


    onSeriesInputChange = e => {
        this.setState({
            seriesName: e.target.value,
            isFetching: true
        });
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({
                series: json,
                isFetching: false
            }));
    }

    render() {
        const { series, seriesName, isFetching } = this.state;
        
        return (
            <div>
                <Intro massage="Here you can find all of your most loved series" />
                The length of the series : {this.state.series.length}
                <div>
                    <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
                </div>
                {
                    !isFetching && seriesName.length === 0 && seriesName.trim() === '' &&
                    <p>Please Input Series Name</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== '' &&
                    <p>No Tv Series Data</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </div>)
    }
}

export default Series;