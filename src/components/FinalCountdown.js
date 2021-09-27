import React, { Component } from "react";
import "./FinalCountdown.css";

class FinalCountdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      running: false,
      times: [],
    };
    this.idCounter = 0;
  }

  getNewID() {
    return this.idCounter++;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    if (!this.state.running) {
      return;
    }
    if (this.state.counter == 0) {
      this.setState((state) => {
        return {
          running: !state.running,
        };
      });
      return;
    }
    this.setState((state) => {
      return {
        counter: state.counter - 1000,
      };
    });
  }

  playPause = () => {
    if (this.state.counter == 0) {
      return;
    }
    this.setState((state) => {
      return {
        running: !state.running,
      };
    });
  };

  stop = () => {
    this.setState({
      running: false,
      counter: 0,
    });
  };

  save = () => {
    if (this.state.counter == 0) {
      return;
    }
    this.setState((state) => {
      let element = {};
      element.time = state.counter;
      element.id = this.getNewID();

      return {
        times: state.times.concat(element), //spaja dva niza i vraca spojeni niz sto je potrebno za setState
      };
    });
  };

  delete = (id) => {
    this.setState((state) => {
      return {
        times: state.times.filter((x) => x.id !== id),
      };
    });
  };

  load = (id) => {
    if (!this.state.running) {
      this.setState((state) => {
        let newTime = state.times.filter((x) => x.id == id);
        return {
          counter: newTime[0].time,
        };
      });
    }
  };

  adjust = (input) => {
    if (input === "incrementSeconds" && this.state.counter + 1000 < 360000000) {
      this.setState((state) => {
        return {
          counter: state.counter + 1000,
        };
      });
    } else if (
      input === "incrementSecondsDec" &&
      this.state.counter + 10000 < 360000000
    ) {
      this.setState((state) => {
        return {
          counter: state.counter + 10000,
        };
      });
    } else if (
      input === "incrementMinutes" &&
      this.state.counter + 60000 < 360000000
    ) {
      this.setState((state) => {
        return {
          counter: state.counter + 60000,
        };
      });
    } else if (
      input === "incrementMinutesDec" &&
      this.state.counter + 600000 < 360000000
    ) {
      this.setState((state) => {
        return {
          counter: state.counter + 600000,
        };
      });
    } else if (
      input === "incrementHours" &&
      this.state.counter + 3600000 < 360000000
    ) {
      this.setState((state) => {
        return {
          counter: state.counter + 3600000,
        };
      });
    } else if (
      input === "incrementHoursDec" &&
      this.state.counter + 36000000 < 360000000
    ) {
      this.setState((state) => {
        return {
          counter: state.counter + 36000000,
        };
      });
    } else if (input === "decrementSeconds" && this.state.counter - 1000 >= 0) {
      this.setState((state) => {
        return {
          counter: state.counter - 1000,
        };
      });
    } else if (
      input === "decrementSecondsDec" &&
      this.state.counter - 10000 >= 0
    ) {
      this.setState((state) => {
        return {
          counter: state.counter - 10000,
        };
      });
    } else if (
      input === "decrementMinutes" &&
      this.state.counter - 60000 >= 0
    ) {
      this.setState((state) => {
        return {
          counter: state.counter - 60000,
        };
      });
    } else if (
      input === "decrementMinutesDec" &&
      this.state.counter - 600000 >= 0
    ) {
      this.setState((state) => {
        return {
          counter: state.counter - 600000,
        };
      });
    } else if (
      input === "decrementHours" &&
      this.state.counter - 3600000 >= 0
    ) {
      this.setState((state) => {
        return {
          counter: state.counter - 3600000,
        };
      });
    } else if (
      input === "decrementHoursDec" &&
      this.state.counter - 36000000 >= 0
    ) {
      this.setState((state) => {
        return {
          counter: state.counter - 36000000,
        };
      });
    }
  };

  formatTime = (cc) => {
    let c = cc;
    let h = Math.floor(c / (60 * 60 * 1000));
    c = c - 60 * 60 * 1000 * h;
    let m = Math.floor(c / (60 * 1000));
    c = c - 60 * 1000 * m;
    let s = Math.floor(c / 1000);
    let hs = `${h < 10 ? "0" : ""}${h}`;
    let ms = `${m < 10 ? "0" : ""}${m}`;
    let ss = `${s < 10 ? "0" : ""}${s}`;
    let th = Math.floor(cc / (60 * 60 * 1000));
    let tm = Math.floor(cc / (60 * 1000));
    let ts = Math.floor(cc / 1000);
    let f = this.props.format;
    f = f.replace("%H", hs);
    f = f.replace("%h", th.toString());
    f = f.replace("%M", ms);
    f = f.replace("%m", tm.toString());
    f = f.replace("%S", ss);
    f = f.replace("%s", ts.toString());
    // console.log(f);
    return f;
  };

  render() {
    let f = this.formatTime(this.state.counter);

    return (
      <div className="countdown">
        <div className="buttonIncrementSeconds">
          <button
            className="toggleButton"
            onClick={() => this.adjust("incrementSecondsDec")}
          >
            ▲
          </button>
          <button
            className="toggleButton"
            onClick={() => this.adjust("incrementSeconds")}
          >
            ▲
          </button>
        </div>
        <div className="buttonIncrementMinutes">
          <button
            className="toggleButton"
            onClick={() => this.adjust("incrementMinutesDec")}
          >
            ▲
          </button>
          <button
            className="toggleButton"
            onClick={() => this.adjust("incrementMinutes")}
          >
            ▲
          </button>
        </div>
        <div className="buttonIncrementHours">
          <button
            className="toggleButton"
            onClick={() => this.adjust("incrementHoursDec")}
          >
            ▲
          </button>
          <button
            className="toggleButton"
            onClick={() => this.adjust("incrementHours")}
          >
            ▲
          </button>
        </div>
        <div className="buttonDecrementSeconds">
          <button
            className="toggleButton"
            onClick={() => this.adjust("decrementSecondsDec")}
          >
            ▼
          </button>
          <button
            className="toggleButton"
            onClick={() => this.adjust("decrementSeconds")}
          >
            ▼
          </button>
        </div>
        <div className="buttonDecrementMinutes">
          <button
            className="toggleButton"
            onClick={() => this.adjust("decrementMinutesDec")}
          >
            ▼
          </button>
          <button
            className="toggleButton"
            onClick={() => this.adjust("decrementMinutes")}
          >
            ▼
          </button>
        </div>
        <div className="buttonDecrementHours">
          <button
            className="toggleButton"
            onClick={() => this.adjust("decrementHoursDec")}
          >
            ▼
          </button>
          <button
            className="toggleButton"
            onClick={() => this.adjust("decrementHours")}
          >
            ▼
          </button>
        </div>
        <div className="numberDisplay">
          <span className="displayDigits">{f}</span>
        </div>
        <div className="buttonLeft">
          <button className="controlButton" onClick={this.playPause}>
            {this.state.running ? "⏸️" : "▶️"}
          </button>
        </div>
        <div className="buttonCenter">
          <button className="controlButton" onClick={this.save}>
            ✏️
          </button>
        </div>
        <div className="buttonRight">
          <button className="controlButton" onClick={this.stop}>
            ⏹️
          </button>
        </div>
        <div className={this.state.times.length === 0 ? "" : "displayTimes"}>
          <table>
            {this.state.times.map((x) => {
              return (
                <tr key={x.id}>
                  <td className="timeData">{this.formatTime(x.time)}</td>
                  <td>
                    <button
                      className="buttonTimeData"
                      onClick={() => this.load(x.id)}
                    >
                      🔄
                    </button>
                    <button
                      className="buttonTimeData"
                      onClick={() => this.delete(x.id)}
                    >
                      ✂️
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

FinalCountdown.defaultProps = {
  resolution: 10,
  timeout: 0,
  format: "%H:%M:%S",
};

export default FinalCountdown;
