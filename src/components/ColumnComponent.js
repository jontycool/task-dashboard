import React, { Component } from 'react';
import RowComponent from './RowComponent';
import Popup from 'reactjs-popup';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import StatusPopup from './StatusPopup';
import PriorityPopup from './PriorityPopup';
import Collapsible from 'react-collapsible';

import ArrowWhite from '../img/arrow-white.svg';

function RowDataSelect({ index, task, column, statusFunc, priorityFunc }) {
  if (column === 'Things to do') {
    return (
      <RowComponent
        content={task.content}
        handle={true}
        id={task.id}
        index={index}
      />
    );
  } else if (column === 'Owner') {
    return <RowComponent content={task.owner} handle={false} />;
  } else if (column === 'Status') {
    return (
      <Popup
        trigger={
          <div className='eachRow'>
            <button className={`pop-button ${task.status}`}>
              {' '}
              {task.status}
            </button>
          </div>
        }
        position='bottom center'
      >
        {(close) => (
          <StatusPopup statusFunc={statusFunc} id={task.id} close={close} />
        )}
      </Popup>
    );
  } else if (column === 'Priority') {
    return (
      <Popup
        trigger={
          <div className='eachRow'>
            <button className={`pop-button ${task.priority}`}>
              {' '}
              {task.priority}
            </button>
          </div>
        }
        position='bottom center'
      >
        {(close) => (
          <PriorityPopup
            priorityFunc={priorityFunc}
            id={task.id}
            close={close}
          />
        )}
      </Popup>
    );
  } else {
    return <RowComponent content={task.duedate} handle={false} />;
  }
}

class ColumnComponent extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <div
            className={
              this.props.column.title === 'Things to do'
                ? 'first-column-container'
                : 'column-container'
            }
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <h4 className='row-header' {...provided.dragHandleProps}>
              <span className='collapse-icon'>
                {this.props.column.title === 'Things to do' ? (
                  <img src={ArrowWhite} width='20' height='20' />
                ) : (
                  ''
                )}
              </span>
              {this.props.column.title}
            </h4>
            <Droppable droppableId={this.props.column.id} type='row'>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {this.props.tasks.map((task, index) => {
                    return (
                      <RowDataSelect
                        index={index}
                        key={task.id}
                        task={task}
                        column={this.props.column.title}
                        statusFunc={this.props.statusFunc}
                        priorityFunc={this.props.priorityFunc}
                      />
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
    );
  }
}

export default ColumnComponent;
