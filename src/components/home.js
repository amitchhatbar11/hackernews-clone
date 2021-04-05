import { Component } from "react";
import api from "../api/api";
import { pagination, getDomainUrl, getTimeFromNow } from "../utils/common";
import LoaderComponent from "../utils/LoaderComponent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayData: [],
      pageNumber: 1,
      pageSize: 20,
      storiesData: [],
      loading: true,
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
        loading: false,
      });
    });
  };

  nextOrPreviousPage = (pageDirection) => {
    if (pageDirection === "next") {
      this.setState((prevState) => ({
        pageNumber: prevState.pageNumber + 1,
        loading: true,
      }));
    } else {
      this.setState((prevState) => ({
        pageNumber: prevState.pageNumber - 1,
        loading: true,
      }));
    }
  };

  render() {
    const { storiesData, pageNumber, pageSize, loading } = this.state;

    return (
      <div className="col-xs-12">
        {!loading ? (
          <div>
            {storiesData !== [] &&
              storiesData.map((story, index) => {
                return (
                  <div className="pb-2" key={`${story.id}_${index}`}>
                    <div>
                      <span>
                        {`${
                          pageNumber === 1
                            ? index + 1
                            : pageNumber === 2
                            ? pageSize + index + 1
                            : pageSize * pageNumber + index + 1
                        }. `}
                      </span>
                      <span>
                        <a
                          href={story.url}
                          target="_blank"
                          className="text-decoration-none text-dark fs-14"
                        >
                          {story.title}
                        </a>
                      </span>
                      <span className="meta-data">
                        {story.url && ` (${getDomainUrl(story.url)})`}
                      </span>
                    </div>
                    <div className="user-story-info">
                      <span className="meta-data">{`${story.score} point by ${
                        story.by
                      } ${getTimeFromNow(story.time)}.`}</span>
                    </div>
                  </div>
                );
              })}
            <div className="d-flex">
              {pageNumber !== 1 && (
                <button
                  className=""
                  onClick={() => this.nextOrPreviousPage("previous")}
                >
                  Previous
                </button>
              )}
              <button
                className="next-btn"
                onClick={() => this.nextOrPreviousPage("next")}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="loader">
            <LoaderComponent />
          </div>
        )}
      </div>
    );
  }
}

export { Home };
