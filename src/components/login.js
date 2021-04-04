import { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      usernameLogin: "",
      usernameRegister: "",
      passwordLogin: "",
      passwordRegister: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClickRegisterOrLogin = (methodName) => {
    const {
      usernameRegister,
      passwordRegister,
      usernameLogin,
      passwordLogin,
    } = this.state;
    if (methodName === "register" && usernameRegister && passwordRegister) {
      localStorage.setItem("loggedin", true);
      localStorage.setItem("username", usernameRegister);
      localStorage.setItem("password", passwordRegister);
      this.setState({
        usernameRegister: "",
        passwordRegister: "",
      });
      this.props.history.push("/");
    } else if (methodName === "login" && usernameLogin && passwordLogin) {
      if (
        localStorage.getItem("username") === usernameLogin &&
        localStorage.getItem("password") === passwordLogin
      ) {
        localStorage.setItem("loggedin", true);
        alert("Successfully Logged in.");
        this.setState({
          usernameLogin: "",
          passwordLogin: "",
        });
        this.props.history.push("/");
      } else {
        alert("Username and/or Password is incorrect.");
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form>
              <h1 className="h3 mb-3 font-weight-normal">Login</h1>
              <div>
                <label htmlFor="email">Username</label>
                <input
                  type="email"
                  className="form-control"
                  name="usernameLogin"
                  placeholder="Enter Username"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="passwordLogin"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
            </form>
            <button
              className="btn btn-lg btn-primary btn-block mt-2"
              onClick={() => this.onClickRegisterOrLogin("login")}
            >
              Login
            </button>
            <form className="pt-5">
              <h1 className="h3 mb-3 font-weight-normal">Create Account</h1>
              <div>
                <label htmlFor="email">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="usernameRegister"
                  placeholder="Enter Username"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="passwordRegister"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
            </form>
            <button
              className="btn btn-lg btn-primary btn-block mt-2"
              onClick={() => this.onClickRegisterOrLogin("register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
