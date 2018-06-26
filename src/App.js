import React, { Component } from 'react';
import ResultsList from './ResultsList';
import ResultsMap from './ResultsMap';
import * as SchoolsAPI from './SchoolsAPI';
import './App.css';

class App extends Component {
  state = {
    results: [],
    uniqueGradeRanges: [],
    selectedGradeRange: "all"
  }
  onFilterChange = (selected) => {
    console.log(selected);
    this.setState({ selectedGradeRange: selected });
  }
  openResult = (result) => {
    console.log("open", result);
    result.open = true;
    this.setState((currentState) => ({
      results: currentState.results.map(r => (result.name === r.name) ? result : r)
    }));
  }
  closeResult = (result) => {
    console.log("close", result);
    result.open = false;
    this.setState((currentState) => ({
      results: currentState.results.map(r => (result.name === r.name) ? result : r)
    }));
  }
  componentDidMount() {
    SchoolsAPI.getAllPublicElementary().then((results) => {
      const uniqueGradeRanges = [...new Set(results.map(result => result.gradeRange))].sort();
      this.setState({ results, uniqueGradeRanges });
    }).catch((error) => {
      console.log("Error fetching data from schools API", error);
    });
  }
  render() {

    const filteredResults = this.state.results.filter((result) => {
      if (this.state.selectedGradeRange === "all") {
        return true;
      } else {
        return result.gradeRange === this.state.selectedGradeRange;
      }
    });

    return (
      <div className="app">
        <ResultsList
          results={filteredResults}
          uniqueGradeRanges={this.state.uniqueGradeRanges}
          gradeRange={this.state.selectedGradeRange}
          onFilterChange={this.onFilterChange}
          onOpenResult={this.openResult}
          onCloseResult={this.closeResult}
        />
        <ResultsMap
          results={filteredResults}
          onOpenResult={this.openResult}
          onCloseResult={this.closeResult}
        />
      </div>
    );
  }
}

export default App;
