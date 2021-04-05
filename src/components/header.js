const { Link, withRouter } = require("react-router-dom");

const Header = ({ history }) => {
  const logoutUser = () => {
    localStorage.setItem("loggedin", false);
    history.push("/");
  };

  const submitNewArticle = () => {
    history.push("/submit");
  };
  return (
    <div className="header">
      <table border="0" cellpadding="0" cellspacing="0" className="w-100">
        <tbody>
          <tr>
            <td className="title">
              <Link className="text-decoration-none text-dark" to="/">
                <b class="hnname">Hacker News</b>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {localStorage.getItem("loggedin") === "true" && (
                <span
                  className="cursor-pointer"
                  onClick={() => submitNewArticle()}
                >
                  submit
                </span>
              )}
            </td>
            <td className="text-right">
              {localStorage.getItem("username") &&
              localStorage.getItem("loggedin") === "true" ? (
                localStorage.getItem("username")
              ) : (
                <Link className="text-decoration-none text-dark" to="login">
                  login
                </Link>
              )}
            </td>
            {localStorage.getItem("loggedin") === "true" && (
              <td className="cursor-pointer" onClick={() => logoutUser()}>
                logout
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(Header);
