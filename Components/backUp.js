<div>
<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
  <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
      <Image src='/logo.png' /> Log-in to your account
    </Header>
    <Form size='large'>
      <Segment stacked>
        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          type='password'
        />

        <Button color='teal' fluid size='large'>
          Login
        </Button>
      </Segment>
    </Form>
    <Message>
      New to us? <a href='#'>Sign Up</a>
    </Message>
  </Grid.Column>
</Grid>
</div>





<Form onSubmit={this.onSubmit.bind(this)}>
  <Form.Field>
    <Input
      label="Email"
      value={this.state.email}
      onChange={event =>
        this.setState({ email: event.target.value })
      }
    />
    <Input
      label="Password"
      value={this.state.password}
      onChange={event =>
        this.setState({ password: event.target.value })
      }
    />
    <Input
      label="Something"
      value={this.state.password}
      onChange={event =>
        this.setState({ password: event.target.value })
      }
    />
  </Form.Field>
  <Button primary>Register</Button>
</Form>
<p>Sign In</p>
<Button onClick={this.onSignInFromRegModal.bind(this)}>
  Old!!!
</Button>








<Form onSubmit={this.onSubmit.bind(this)}>
  <Form.Field>
    <Input
      label="Email"
      value={this.state.email}
      onChange={event =>
        this.setState({ email: event.target.value })
      }
    />
    <Input
      label="Password"
      value={this.state.password}
      onChange={event =>
        this.setState({ password: event.target.value })
      }
    />
  </Form.Field>
  <Button primary>Sign In</Button>
</Form>
<p>Register</p>
<Button onClick={this.onRegFromSignInModal.bind(this)}>
  New!!!!!!!!!!!!!!!!
</Button>


Dropdown

<Dropdown
  text="Women"
  className="link item"
  onMouseOver={this.handleMouseOver.bind(this)}
  onMouseOut={this.onCloseDropDown.bind(this)}
  open={this.state.show}
>
  <Dropdown.Menu style={{ width: 500 }}>
    <Link route={`/Women/Shoes`}>
      <Dropdown.Item>
        <a color="black">Shoes</a>
      </Dropdown.Item>
    </Link>
    <Dropdown.Item>Dresses</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>





{props.trigger ? (
  <Container
    className="cont animated fadeIn delay-1s"
    style={{ backgroundColor: 'grey', width: 200 }}
  >
    <p>{props.children}</p>
  </Container>
) : null}




onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}
