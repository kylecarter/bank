import React from 'react'
import jQuery from 'jquery'
import Head from 'next/head'
import { Button } from 'react-bootstrap'

const $ = jQuery;

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      first_name: 'Client',
      last_name: 'Tester',
      email: 'client.tester@email.com',
      phone: 'xxx-xxx-xxxx',
      address: '123 Some Street',
      address2: '',
      city: 'City',
      state: 'ST',
      postal_code: 'xxxxx'
    }
  }

  render() {
    return (<div>
      <style global jsx>{`
        body { background-color: rgba( 0, 255, 0, 0.06 ) }
      `}</style>
      <style jsx>{`
        .row { margin-bottom:   21px }
        .panel {
          max-width: 600px;
          margin: 5% auto 0;
        }
      `}
      </style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <title>Login | DUF Online</title>
      </Head>
      <form action="/me/accounts" method="get" className="container">
        <div className="row">
          <div className="col-xs-12">
            <section className="panel panel-default">
              <header className="panel-heading">
                <h1 className="panel-title">Login</h1>
              </header>
              <div className="panel-body">
                <fieldset className="row">
                  <div className="col-md-6">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" className="form-control" id="first_name" name="first_name" defaultValue={ this.state.first_name }/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" className="form-control" id="last_name" name="last_name" defaultValue={ this.state.last_name }/>
                  </div>
                </fieldset>
                <fieldset className="row">
                  <div className="col-md-12">
                    <label htmlFor="address">Street Address</label>
                    <input type="text" className="form-control" id="address" name="address" defaultValue={ this.state.address }/>
                  </div>
                </fieldset>
                <fieldset className="row">
                  <div className="col-md-12">
                    <label htmlFor="">Apartment, Suite, Building, etc.</label>
                    <input type="text" className="form-control" id="address2" name="address2" defaultValue={ this.state.address2 }/>
                  </div>
                </fieldset>
                <fieldset className="row">
                  <div className="col-md-4">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" name="city" defaultValue={ this.state.city }/>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="state">State</label>
                    <input type="text" className="form-control" id="state" name="state" defaultValue={ this.state.state }/>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="postal_code">Postal Code</label>
                    <input type="text" className="form-control" id="postal_code" name="postal_code" defaultValue={ this.state.postal_code }/>
                  </div>
                </fieldset>
                <fieldset className="row">
                  <div className="col-md-12">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" name="phone" defaultValue={ this.state.phone }/>
                  </div>
                </fieldset>
                <fieldset className="row">
                  <div className="col-md-12">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" defaultValue={ this.state.email }/>
                  </div>
                </fieldset>
                <Button bsStyle="primary" type="submit" role="button">Update</Button>
              </div>
            </section>
          </div>
        </div>
      </form>
    </div>)
  }
}
