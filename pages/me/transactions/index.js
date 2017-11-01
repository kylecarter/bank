import React from 'react'
import Head from 'next/head'
import { Button } from 'react-bootstrap'

import Transaction from '../../../components/accounts/transaction'

export default class Transactions extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {
        name: 'Client Tester',
        address: '123 Some Street City, ST 00000'
      },
      account: {
        number: 'xxx xxxxx xxxxx xxx',
        balance: '$1,763.21',
        type: 'Checking'
      },
      transactions: [
        {
          type: 'Deduction',
          date: new Date(),
          amount: '$50.00',
          merchant: 'Addidas',
          current: '$1,763.21',
          previous: '$1,923.57'
        },
        {
          type: 'Credit',
          date: new Date(),
          amount: '$150.00',
          merchant: 'Deposit',
          current: '$1,763.21',
          previous: '$1,923.57'
        }
      ]
    };
  }

  render() {
    return (<div>
      <style global jsx>{`
        body { background-color: rgba( 0, 255, 0, 0.06 ) }
        #sidebar { background-color: #fff; padding: 15px; }
        #content { padding-top: 5% }
        @media (min-width: 992px ) {
          #sidebar { padding-top: 5%; padding-bottom: 50%; }
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <title>My Transactions| { this.state.account.type } | DUF Online</title>
      </Head>
      <article className="container">
        <div className="row">
          <aside className="col-md-3" id="sidebar">
            <h2>{ this.state.user.name }</h2>
            <address>{ this.state.user.address }</address>
            <Button bsStyle="primary" href="/me/edit">Edit</Button>
          </aside>
          <section className="col-md-9" id="content">
            <div className="panel panel-primary">
              <header className="panel-heading">
                <h3>{ this.state.account.type }</h3>
                <em>{ this.state.account.number }</em>
              </header>
            </div>
            <div className="panel-body" style={{ padding: 0 }}>
              <ul className="list-unstyled">
                { this.state.transactions.map( (transaction, index)=> <Transaction key={ index } type={ transaction.type } date={ transaction.date } previous={ transaction.previous } current={ transaction.current } amount={ transaction.amount } merchant={ transaction.merchant }/> ) }
              </ul>
              <a href="/me/accounts">Back to Accounts</a>
            </div>
          </section>
        </div>
      </article>
    </div>)
  }
}
