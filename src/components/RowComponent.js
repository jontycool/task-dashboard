import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Draggable } from 'react-beautiful-dnd';

class RowComponent extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {(provided) => (
          <div
            className='eachRow'
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            {this.props.handle ? (
              <div className='handle' {...provided.dragHandleProps}></div>
            ) : (
              ''
            )}
            <button className='pop-button'>{this.props.content}</button>
          </div>
        )}
      </Draggable>
    );
  }
}

export default RowComponent;
