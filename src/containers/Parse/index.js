import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentMeta from 'react-document-meta';

import { Items } from 'components/Items';
import { AddItem } from 'components/AddItem';

var SpreadsheetComponent = require('react-spreadsheet-component');

/* global styles for app */
import './styles/parse.css';

/* actions */
import * as actionCreators from 'actions/items';

const metaData = {
  title: 'Parse document',
  description: 'Parse an SEC filing document',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

@connect(
  state => state.items,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Parse extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var config = {
        // Initial number of row
        rows: 5,
        // Initial number of columns
        columns: 8,
        // True if the first column in each row is a header (th)
        hasHeadColumn: true,
        // True if the data for the first column is just a string.
        // Set to false if you want to pass custom DOM elements.
        isHeadColumnString: true,
        // True if the first row is a header (th)
        hasHeadRow: true,
        // True if the data for the cells in the first row contains strings.
        // Set to false if you want to pass custom DOM elements.
        isHeadRowString: true,
        // True if the user can add rows (by navigating down from the last row)
        canAddRow: true,
        // True if the user can add columns (by navigating right from the last column)
        canAddColumn: true,
        // Override the display value for an empty cell
        emptyValueSymbol: '-',
        // Fills the first column with index numbers (1...n) and the first row with index letters (A...ZZZ)
        hasLetterNumberHeads: true
    };

    var data = {
        rows: [
            ['Key', 'AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG'],
            ['COM', '0,0', '0,1', '0,2', '0,3', '0,4', '0,5', '0,6'],
            ['DIV', '1,0', '1,1', '1,2', '1,3', '1,4', '1,5', '1,6'],
            ['DEV', '2,0', '2,1', '2,2', '2,3', '2,4', '2,5', '2,6'],
            ['ACC', '3,0', '3,1', '3,2', '3,3', '3,4', '3,5', '3,6']
        ]
    };

    var classes = {
        rows: [
            ['', 'specialHead', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', 'error', '', '', '', '', '', ''],
            ['', 'error changed', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '']
        ]
    };
    return (
      <section>
        <DocumentMeta {...metaData} />
        <div className="container">
          <div className="row">
            <div id="loginbox" style={{marginTop: '100px'}} className="mainbox ">
              <div className="panel panel-info" >
                <div className="panel-heading">
                  <div className="panel-title">Parse document</div>
                </div>

                <div className="col-md-10 col-md-offset-3">
                  {this.props.error ? (
                    <div className="form-group has-error">
                      <label className="control-label" ref="emailError">Unable to fetch URL!</label>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>

                <div style={{paddingTop:'30px'}} className="panel-body" >
                  <div style={{display: 'none'}} id="login-alert" className="alert alert-danger col-sm-12"></div>
                  <form onSubmit={this.handleLogin} id="loginform" className="form-signin" role="form">

                    <div style={{marginBottom: '25px'}} className={'input-group'}>
                      <span className="input-group-addon"><i className="glyphicon glyphicon-cloud-download"></i></span>
                      <input type="url" className="form-control" ref="url" placeholder="Enter URL" required />

                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit">Go!</button>
                      </span>
                    </div>

                  </form>
                  <SpreadsheetComponent initialData={data} config={config} spreadsheetId="1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
