import React, { Component } from "react"
import * as JsSearch from "js-search"

import IdeaListItem from "../components/idea-list-item"

class Search extends Component {

  state = {
    ideaList: this.props.ideas,
    search: [],
    searchResults: [],
    searchQuery: "",
  }

  // React lifecycle method to fetch the data
  async componentDidMount() {
    this.setState({ ideaList: this.props.ideas })
    this.rebuildIndex()
  }

  // rebuilds the overall index based on the options
  rebuildIndex = () => {
    const { ideaList } = this.state
    const dataToSearch = new JsSearch.Search("title")

    // defines a indexing strategy for the data
    // more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    
    // defines the sanitizer for the search
    // to prevent some of the words from being excluded
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()

    // defines the search index
    // read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("title")
    dataToSearch.addIndex("problem") // sets the index attribute for the data
    dataToSearch.addIndex("solution") // sets the index attribute for the data
    dataToSearch.addIndex("location") // sets the index attribute for the data
    dataToSearch.addDocuments(ideaList) // adds the data to be searched
    this.setState({ search: dataToSearch })
  }

  // handles the input change and perform a search with js-search
  // in which the results will be added to the state
  handlesearchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
    if(e.target.value.length > 0) {
      this.props.numResults(queryResult.length);
    } else {
      this.props.numResults(undefined);
    }
  }
  emptyQuery = e => {
    const { search } = this.state
    const queryResult = search.search('')
    this.setState({ searchQuery: '', searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  render() { 

    const { ideaList, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? ideaList : searchResults

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} style={{ position: 'relative', marginTop: 20 }}>
          <i className="ion ion-search u-pinned-topleft u-pl35 u-pt5 u-lineheight30 c-light" style={{ zIndex: 2 }} />
          <input
            className="form-input form-grey u-pl80 u-pr120"
            id="Search"
            value={searchQuery}
            onChange={this.handlesearchData}
            placeholder="Search..."
            type="text"
          />
          <div className="u-pinned-topright u-lineheight30">
            {searchQuery.length > 0 && (
              <a onClick={this.emptyQuery} className="u-inlineblock u-pv5 u-ph10 u-mr10" style={{ cursor: 'pointer' }}><i className="ion ion-close" /></a>
            )}
            <span className="u-inlineblock u-pv5 u-lineheight30 u-pr10 c-medium"><i className="u-inlineblock ion ion-lightbulb c-light u-mr5 u-lineheight20" /> <b>{queryResults.length}</b></span>
          </div>
        </form>
        <div>

          {this.props.numResults !== undefined && (
            <div className="list list-expanded list_block u-mt10 u-mb20" style={{ marginTop: '5rem', maxWidth: '60rem' }}>
              <ul className="list-content">
                {queryResults.length > 0 ? (
                  <React.Fragment>
                    {queryResults.map((item, i) => (
                      <React.Fragment key={i}>
                        {(i < 20) && (
                          <li>
                            <IdeaListItem idea={item} />
                          </li>
                        )}
                      </React.Fragment>
                    ))}
                    {(queryResults.length > 20) && (
                      <li><a className="u-pl80 c-light">...And {queryResults.length - 20} more</a></li>
                    )}  
                  </React.Fragment>
                ) : (
                  <li><a className="u-pl80 c-light">No results for <b>{searchQuery}</b></a></li>
                )}
              </ul>
            </div>
          )}

        </div>
      </React.Fragment>
    )
  }
}
export default Search
