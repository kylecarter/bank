import React from 'react'
import Head from 'next/head'
import { Button } from 'react-bootstrap'

import Account from '../../../components/accounts/account'

export default class Accounts extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {
        name: 'Client Tester',
        address: '123 Some Street City, ST 00000'
      },
      accounts: [
        {
          number: 'xxx xxxxx xxxxx xxx',
          balance: '$1,763.21',
          type: 'Checking'
        },
        {
          number: 'xxx xxxxx xxxxx xxx',
          balance: '$1,763.21',
          type: 'Savings'
        },
        {
          number: 'xxx xxxxx xxxxx xxx',
          balance: '$1,763.21',
          type: 'Credit Card',
          limit: '$2,500.00'
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
        <title>My Accounts | DUF Online</title>
      </Head>
      <article className="container">
        <div className="row">
          <aside className="col-md-3" id="sidebar">
            <h2>{ this.state.user.name }</h2>
            <address>{ this.state.user.address }</address>
            <Button bsStyle="primary" href="/me/edit">Edit</Button>
          </aside>
          <section className="col-md-9" id="content">
            <ul className="list-unstyled">
              { this.state.accounts.map( (account, index)=> <Account key={ index } type={ account.type } number={ account.number } balance={ account.balance } limit={ account.limit ? account.limit : false }/> ) }
            </ul>
          </section>
        </div>
      </article>
    </div>)
  }
}
