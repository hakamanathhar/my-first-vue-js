export const state = () => ({
  tasks: [
    {
      id: 1,
      title: 'Task 1',
      description: 'ini deskripsi 1',
      category: 'Category A',
      isDone: false,
    },
    {
      id:2,
      title: 'Task 2',
      description: 'ini deskripsi 2',
      category: 'Category B',
      isDone: false,
    },
    {
      id:3,
      title: 'Task 3',
      description: ' ini deskripsi 3',
      category: 'Category B',
      isDone: false,
    }
  ]
})

export const mutations = {
  ADD_TASK(state, task){
    state.tasks.push(task)
  },
  SHUFFLE(state, tasks){
    state.tasks = _.shuffle(state.tasks)
  },
  CHECKED_TASK(state, task){
    for (let index = 0; index < state.tasks.length; index++) {
        if(state.tasks[index].id === task.id){
          state.tasks[index].isDone = !task.isDone
        }
    }
  }
}

export const actions = {
  addTask(context, task) {
    context.commit('ADD_TASK',task)
  },
  shuffle(context) {
    context.commit('SHUFFLE')
  },
  checkedTask(context, task){
    context.commit('CHECKED_TASK',task)
  }
}

export const getters = {
  getTasks: (state) => {
    return state.tasks
  },
  getTasksById: (state) => (id) => {
    return state.tasks.find(task => task.id == id)
  },
}
