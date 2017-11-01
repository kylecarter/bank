import Head from 'next/head'

export default ()=> (<div>
  <style global jsx>{`
    body { background-color: rgba( 0, 255, 0, 0.06 ) }
  `}</style>
  <style jsx>{`
    .col-xs-12 { background-color: #fff; padding-top: 5%; padding-bottom: 5%; margin-top: 5%; }
  `}</style>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
    <title>DUF Online</title>
  </Head>
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <h1>Welcome to DUF!</h1>
        <a href="/login">Login to continue</a>
      </div>
    </div>
  </div>
  </div>)
