import React from "react";

class UseCardsClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location } = this.props;
    return (
      <div className="userCard">
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Portfolio : Sk3l3dor</h2>
      </div>
    );
  }
}
export default UseCardsClass;
