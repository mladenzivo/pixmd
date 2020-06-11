import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"

// Route-based code splitting
const LandingPage = lazy(() =>
  import("./views/pages/LandingPage")
)

const SignIn = lazy(() =>
  import("./views/pages/authentication/login/Login")
)

const Register = lazy(() =>
  import("./views/pages/authentication/register/Register")
)

const Confirm = lazy(() =>
  import("./views/pages/authentication/ConfirmAccount")
)


const ForgotPassword = lazy(() =>
  import("./views/pages/authentication/ForgotPassword")
)

const ResetPassword = lazy(() =>
  import("./views/pages/authentication/ResetPassword")
)

const CreateSubscription = lazy(() =>
  import("./views/pages/CreateSubscription")
)

const Home = lazy(() =>
  import("./views/pages/Home")
)

const Page2 = lazy(() =>
  import("./views/pages/Page2")
)

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
              return (
                <LayoutTag {...props} permission={props.user}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute path="/sign-in" component={SignIn} />
          <AppRoute path="/register" component={Register}/>
          <AppRoute path="/email-verification" component={Confirm} />
          <AppRoute path="/forgot-password" component={ForgotPassword}/>
          <AppRoute path="/reset-password" component={ResetPassword}/>
          <AppRoute path="/create-subscription" component={CreateSubscription} />
          <AppRoute path="/pages/home" component={Home} />
          <AppRoute path="/pages2" component={Page2} />
          <AppRoute exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
