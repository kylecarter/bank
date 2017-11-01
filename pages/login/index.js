import React from 'react'
import jQuery from 'jquery'
import Head from 'next/head'
import { Button } from 'react-bootstrap'

const $ = jQuery;

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      username: 'client.tester@email.com',
      password: 'password'
    }
  }

  render() {
    return (<div>
      <style global jsx>{`
        body { background-color: rgba( 0, 255, 0, 0.06 ) }
      `}</style>
      <style jsx>{`
        .input-group { margin: 0 0 21px }
        label.fa { margin: 0 }
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
                <div className="input-group">
                  <span className="input-group-addon"><label htmlFor="username" className="fa fa-user"><span className="sr-only">Username</span></label></span>
                  <input type="input" className="form-control" name="username" id="username" defaultValue={ this.state.username }/>
                </div>
                <div className="input-group">
                  <span className="input-group-addon"><label htmlFor="password" className="fa fa-lock"><span className="sr-only">Password</span></label></span>
                  <input type="password" className="form-control" id="password" name="password" defaultValue={ this.state.password }/>
                </div>
                <Button bsStyle="primary" type="submit" role="button">Submit</Button>
              </div>
            </section>
          </div>
        </div>
      </form>
    </div>)
  }
}
