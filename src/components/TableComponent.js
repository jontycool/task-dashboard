import React, { Component } from 'react';
import { Data } from '../data/InitialData';
import ColumnComponent from './ColumnComponent';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

class TableComponent extends Component {
  state = Data;

  changeStatus = (value, id) => {
    const newTask = {
      ...this.state.tasks[id],
      status: value,
    };

    const newState = {
      ...this.state,
      tasks: {
        ...this.state.tasks,
        [id]: newTask,
      },
    };

    this.setState(newState);
  };

  changePriority = (value, id) => {
    const newTask = {
      ...this.state.tasks[id],
      priority: value,
    };

    const newState = {
      ...this.state,
      tasks: {
        ...this.state.tasks,
        [id]: newTask,
      },
    };

    this.setState(newState);
  };

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      };
      this.setState(newState);
      return;
    }

    const newTaskOrder = Array.from(this.state.taskOrder);
    newTaskOrder.splice(source.index, 1);
    newTaskOrder.splice(destination.index, 0, draggableId);

    const newState = {
      ...this.state,
      taskOrder: newTaskOrder,
    };

    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId='allColumn' direction='horizontal' type='column'>
          {(provided) => (
            <div
              className='table-container'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.state.columnOrder.map((columnId, index) => {
                const column = this.state.columns[columnId];
                const tasks = this.state.taskOrder.map(
                  (taskId) => this.state.tasks[taskId]
                );

                return (
                  <ColumnComponent
                    key={column.id}
                    index={index}
                    column={column}
                    tasks={tasks}
                    statusFunc={this.changeStatus}
                    priorityFunc={this.changePriority}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default TableComponent;
