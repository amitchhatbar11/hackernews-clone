import { withRouter } from "react-router-dom";
import { Component } from "react";
import { getKeyValue } from "../utils/common";

class NewArticle extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      url: "",
      text: "",
    };
  }

  onChange = (e) => {
    this.setState(getKeyValue(e));
  };

  onSubmit = () => {
    const { title, url, text } = this.state;
    if (title && (url || text)) {
      const data = {
        title: title,
        url: url,
        text: text,
      };
      localStorage.setItem("article", JSON.stringify(data));
      alert("Article created successfully.");
      this.props.history.push("/");
    } else {
      alert("Fill up necessary inputs.");
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <form>
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                <div>
                  <label htmlFor="title">title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Enter Title"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <div>
                  <label htmlFor="url">url</label>
                  <input
                    type="text"
                    className="form-control"
                    name="url"
                    placeholder="Enter url"
                    value={this.state.url}
                    onChange={this.onChange}
                  />
                </div>
                <div className="py-3">OR</div>
                <div>
                  <label htmlFor="text">text</label>
                  <textarea
                    className="form-control"
                    name="text"
                    value={this.state.text}
                    onChange={this.onChange}
                  />
                </div>
              </form>
              <button
                className="btn btn-lg btn-primary btn-block mt-2"
                onClick={() => this.onSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewArticle);
