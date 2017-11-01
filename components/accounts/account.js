import React from 'react'
import Head from 'next/head'
import underscore from 'underscore'

const _ = underscore;

export default class Account extends React.Component {

  constructor( props ) {
    super();
    this.state = _.extend( {}, props );
  }

  render() {
    return (<li className="panel panel-primary">
      <header className="panel-heading">
        <h3 className="panel-title">{ this.state.type }</h3>
        <strong>Accoung number: { this.state.number }</strong>
      </header>
      <div className="panel-body">
        { this.state.limit ? <p>Credit Limit: { this.state.limit }</p> : '' }
        <p>Balance: { this.state.balance }</p>
        <a href="/me/transactions">See Transactions</a>
      </div>
    </li>)
  }
}
