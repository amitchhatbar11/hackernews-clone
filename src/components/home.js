import { Component } from "react";
import api from "../api/api";
import { pagination } from "../utils/common";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayData: [],
      pageNumber: 1,
      pageSize: 20,
      storiesData: [],
    };
  }

  componentDidMount() {
    api
      .getNewStories()
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          arrayData: data,
        });
        this.getCurrentPageStories(data);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageNumber !== this.state.pageNumber) {
      this.getCurrentPageStories(this.state.arrayData);
    }
  }

  getCurrentPageStories = (dataArray) => {
    const { pageSize, pageNumber } = this.state;
    const currentPageArr = pagination(dataArray, pageSize, pageNumber);
    let promises = currentPageArr.map((item) => {
      return api.getStoriesData(item).then((response) => response.json());
    });
    Promise.all(promises).then((response) => {
      this.setState({
        storiesData: response,
      });
    });
  };

  nextOrPreviousPage = (pageDirection) => {
    if (pageDirection === "next") {
      this.setState((prevState) => ({
        pageNumber: prevState.pageNumber + 1,
      }));
    } else {
      this.setState((prevState) => ({
        pageNumber: prevState.pageNumber - 1,
      }));
    }
  };

  render() {
    const { storiesData, pageNumber } = this.state;

    return (
      <div className="col-xs-12">
        {storiesData !== [] &&
          storiesData.map((story, index) => {
            return <div key={`${story.id}_${index}`}>{story.title}</div>;
          })}
        <div className="d-flex">
          {pageNumber !== 1 && (
            <button onClick={() => this.nextOrPreviousPage("previous")}>
              Previous
            </button>
          )}
          <button onClick={() => this.nextOrPreviousPage("next")}>Next</button>
        </div>
      </div>
    );
  }
}

export { Home };
