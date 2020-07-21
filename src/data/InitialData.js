export const Data = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: 'Take out the garbage',
      priority: 'Urgent',
      owner: 'Tony',
      duedate: 'Aug 09 2020',
      status: 'Working on it',
    },
    'task-2': {
      id: 'task-2',
      content: 'Watch my favorite show',
      priority: 'Low',
      owner: 'John',
      duedate: 'Aug 10 2020',
      status: 'Stuck',
    },
    'task-3': {
      id: 'task-3',
      content: 'Charge my phone',
      priority: 'High',
      owner: 'Steve',
      duedate: 'Aug 15 2020',
      status: 'Done',
    },
    'task-4': {
      id: 'task-4',
      content: 'Cook dinner',
      priority: 'Medium',
      owner: 'Peter',
      duedate: 'Aug 09 2020',
      status: 'Waiting for review',
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Things to do',
    },
    'column-2': {
      id: 'column-2',
      title: 'Status',
    },
    'column-3': {
      id: 'column-3',
      title: 'Due Date',
    },
    'column-4': {
      id: 'column-4',
      title: 'Priority',
    },
    'column-5': {
      id: 'column-5',
      title: 'Owner',
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
  taskOrder: ['task-1', 'task-2', 'task-3', 'task-4'],
};
