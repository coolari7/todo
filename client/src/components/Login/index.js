import React from "react";
import { Redirect } from "react-router-dom";
import { Button, Grid, Header, Icon } from "semantic-ui-react";
import { useAuth } from "context/auth";

export function Login(props) {
  const [redirect, setRedirect] = React.useState(false);
  const [, signIn] = useAuth();

  const onClickSignIn = () => {
    signIn().then(() => {
      setRedirect(true);
    });
  };

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (redirect) {
    return <Redirect to={from} />;
  }

  return (
    <Grid
      verticalAlign="middle"
      className="center aligned"
      style={{ height: "100vh" }}
    >
      <Grid.Column style={{ maxWidth: "450px" }}>
        <Header size="huge" as="h2">
          <Icon name="list ul" />
          Todo App
        </Header>
        <Button primary onClick={onClickSignIn}>
          Sign In With Google
        </Button>
      </Grid.Column>
    </Grid>
  );
}
