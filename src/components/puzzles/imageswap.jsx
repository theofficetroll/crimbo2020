import React from 'react';
import './imageswap.css';

const randomArray = function() {
  let tilesArray = [];
  let numTiles = 25;
  let remaining = numTiles
  for (let i = 0; i < numTiles; i++) {
    let newTile = { id: i };
    tilesArray.push(newTile);
  }
  while (remaining) {
    remaining--;
    let index = Math.floor(Math.random() * remaining);
    let tile1 = tilesArray[remaining];
    let tile2 = tilesArray[index];
    tilesArray[index] = tile1;
    tilesArray[remaining] = tile2;
  }
  return tilesArray;
}

const newTileArray = randomArray();

class ImageSwap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tilesArray: newTileArray,
      tileSelected: false,
      selectedTileId: null,
    }
    this.handleSwap = this.handleSwap.bind(this);
    this.swapTile = this.swapTile.bind(this);

  }


  /*
    Failing on lines 56 & 57. Not finding .id
  */

  handleSwap(id) {
    if (this.state.tileSelected) {
      this.swapTile(this.state.selectedTileId, id)
    } else {
      this.setState({
        selectedTileId: id,
        tileSelected: true,
      })
    }
  }

  swapTile(id1, id2) {
    let newTiles = [this.state.tilesArray];
    let index1 = this.state.tilesArray.findIndex(tile => tile.id === id1);
    let index2 = this.state.tilesArray.findIndex(tile => tile.id === id2);
    let tile1 = newTiles[index1];
    let tile2 = newTiles[index2];
    newTiles[index2] = tile1;
    newTiles[index1] = tile2;
    this.setState({
      tilesArray: newTiles,
      tileSelected: false,
      selectedTileId: null,
    });
  }

  render() {
    return (
      <div className = "puzzle-container">
        {this.state.tilesArray.map((tile, i) => <div onClick = {() => this.handleSwap(tile.id)} key = { i } className = {this.state.selectedTileId === tile.id ? "tilewrap selected" : "tilewrap" }> { tile.id } </div>)}
      </div>
    )
  }
}

export default ImageSwap;
