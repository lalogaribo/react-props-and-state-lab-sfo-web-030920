import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  renderDogs = () => {
    return this.props.pets.map((dog) => (
      <Pet pet={{ ...dog }} key={dog.id} onAdoptPet={this.props.onAdoptPet} />
    ));
  };
  render() {
    return <div className="ui cards">{this.renderDogs()}</div>;
  }
}

export default PetBrowser;
