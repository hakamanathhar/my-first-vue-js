<!-- Please remove this file from your project -->
<template>
<div class="container">
  <div class="list-task row">
    <div class="title border-bottom d-flex align-items-center justify-content-between py-2">
      <h5>Task</h5>
      <div class="d-flex align-items-center">
        <span class="me-2">View As</span>
        <button class="btn btn-outline-secondary py-1 px-3"
          @click="isGrid = !isGrid">
            {{ isGrid ? 'Grid' : 'List' }}
        </button>
      </div>
    </div>

    <div
      :class="[
        'item-task d-flex align-items-start border-bottom pt-3 pb-4',
        isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12'
      ]">
        <input
        type="checkbox"
        name="status"
        id="task"
        class="me-2 mt-2"
        :checked="tasks[0].isDone"
        v-model="tasks[0].isDone"
        >
        <div
          :class="['d-flex flex-column', tasks[0].isDone ?
          'text-decoration-line-through fst-italic' : '']">
          <div class="title-task mb-1">
            {{ tasks[0].title }}
          </div>
          <div class="description-task small text-muted">
            {{ tasks[0].description }}
          </div>
        </div>
    </div>

    <div
      :class="[
      'item-task d-flex align-items-start border-bottom pt-3 pb-4',
      isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12'
      ]">
      <input
      type="checkbox"
      name="status"
      id="task"
      class="me-2 mt-2"
      :checked="tasks[1].isDone"
      v-model="tasks[1].isDone"
      >
        <div
        :class="['d-flex flex-column', tasks[1].isDone ?
        'text-decoration-line-through fst-italic' : '']">
          <div class="title-task mb-1">{{ tasks[1].title }}</div>
          <div class="description-task small text-muted">{{ tasks[1].description}}</div>
        </div>
    </div>
    <div
      :class="[
      'item-task d-flex align-items-start border-bottom pt-3 pb-4',
      isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12'
      ]">
        <input
        type="checkbox"
        name="status"
        id="task"
        class="me-2 mt-2"
        :checked="tasks[2].isDone"
        v-model="tasks[2].isDone"
        >
        <div
        :class="['d-flex flex-column', tasks[2].isDone ?
        'text-decoration-line-through fst-italic' : '']">
          <div class="title-task mb-1">{{ tasks[2].title }}</div>
          <div class="description-task small text-muted">{{ tasks[2].description}}</div>
        </div>
    </div>
</div>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    tasks: [
      {
      title: 'Task 1',
      description: 'ini deskripsi 1',
      isDone: false,
      },
      {
      title: 'Task 2',
      description: 'ini deskripsi 2',
      isDone: false,
      },
      {
      title: 'Task 3',
      description: ' ini deskripsi 3',
      isDone: false,
      }
    ],
    isGrid: false,
    }

  }
}
</script>
