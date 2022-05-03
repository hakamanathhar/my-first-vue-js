export const state = () => ({
  tasks: [
    // {
    //   id: 1,
    //   title: 'Task 1',
    //   description: 'ini deskripsi 1',
    //   category: 'Category A',
    //   isDone: false,
    // },
    // {
    //   id:2,
    //   title: 'Task 2',
    //   description: 'ini deskripsi 2',
    //   category: 'Category B',
    //   isDone: false,
    // },
    // {
    //   id:3,
    //   title: 'Task 3',
    //   description: ' ini deskripsi 3',
    //   category: 'Category B',
    //   isDone: false,
    // }
  ]
})

export const mutations = {
  LOAD_TASK(state){
    if(window.localStorage.getItem('tasks')){
      try {
        state.tasks = JSON.parse(localStorage.getItem('tasks'))
        return state.tasks
      } catch (error) {
        console.log(error)
        localStorage.removeItem('tasks')
        return []
      }
    }
  },
  ADD_TASK(state, task){
    state.tasks.push(task)
    const parsed = JSON.stringify(state.tasks)
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tasks',parsed)
    }

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
  },
}

export const actions = {
  loadTask(context) {
    context.commit('LOAD_TASK')
  },
  addTask(context, task) {
    context.commit('ADD_TASK',task)
  },
  shuffle(context) {
    context.commit('SHUFFLE')
  },
  checkedTask(context, task){
    context.commit('CHECKED_TASK',task)
  },
}

export const getters = {
  getTasks: (state) => {
    return state.tasks
  },
  getTasksById: (state) => (id) => {
    return state.tasks.find(task => task.id == id)
  },
}
