import React, { Component } from "react";

class HandleEvent extends Component {
  handleClick = () => {
    alert("hello BC01");
  };

  showMessage = (name) => {
    alert("hello " + name);
  };

  render() {
    return (
      <div className="container">
        {/*Cách 1 truyền callback trực tiếp */}
        <button
          id="btnClickMe"
          className="btn btn-success"
          onClick={this.handleClick}
        >
          Click me!
        </button>
        <button
          id="btnClickMe"
          className="btn btn-success"
          onClick={this.showMessage.bind(this, "Sĩ")}
        >
          showMessage!
        </button>
        <br /> <br />
        {/*Cách 2 truyền hàm nặc danh */}
        <button
          onClick={(event) => {
            this.showMessage("Phú");
            // this.handleClick();
          }}
        >
          show mess
        </button>
      </div>
    );
  }
}

export default HandleEvent;
