import React from 'react'
import Head from 'next/head'
import underscore from 'underscore'

const _ = underscore;

export default class Transaction extends React.Component {

  constructor( props ) {
    super();
    this.state = _.extend( {}, props );
  }

  render() {
    return (<li className="panel panel-primary">
      <style jsx>{`
        .panel-body h4 { margin-top: 0 }
        date { display: block }
      `}</style>
      <div className="panel-body">
        <div className="row">
          <div className="col-xs-6">
            <h4>{ this.state.merchant }</h4>
            <date datetime={ this.state.date.toISOString() }>{ this.state.date.toLocaleDateString( 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } ) }</date>
            <strong>Transaction Amount: { this.state.amount }</strong>
          </div>
          <div className="col-xs-6">
            <em style={{ color: this.state.type == 'Credit' ? 'green' : 'red' }}>Current Balance: { this.state.current }</em>
          </div>
        </div>
      </div>
    </li>)
  }
}
