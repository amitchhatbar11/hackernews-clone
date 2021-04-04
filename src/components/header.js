const { Link, withRouter } = require("react-router-dom");

const Header = ({ history }) => {
  const logoutUser = () => {
    localStorage.setItem("loggedin", false);
    history.push("/");
  };
  return (
    <div>
      <table border="0" cellpadding="0" cellspacing="0" className="w-100">
        <tbody>
          <tr>
            <td>
              <Link className="text-decoration-none text-dark" to="/">
                <b class="hnname">Hacker News</b>
              </Link>
            </td>
            <td>
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
