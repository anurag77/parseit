import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentMeta from 'react-document-meta';

import { Items } from 'components/Items';
import { AddItem } from 'components/AddItem';

/* actions */
import * as actionCreators from 'actions/items';

const metaData = {
  title: 'Parse focument',
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
