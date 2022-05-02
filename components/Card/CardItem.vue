<template>
<div
  :class="[
    isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12'
  ]"
  v-show="!task.isDone">
  <div
    :class="[
      'item-task d-flex align-items-start border-bottom pt-3 pb-4',
      isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12'
    ]"
    >
      <input
      type="checkbox"
      name="status"
      id="task"
      class="me-2 mt-2"
      :checked="task.isDone"
      @change="checkedTask(task)"
      >
      <div
        :class="['d-flex flex-column', task.isDone ?
        'text-decoration-line-through fst-italic' : '']"
        >
        <div class="title-task mb-1">
          {{ task.title }}
        </div>
        <div class="description-task small text-muted">
          {{ task.description }}
        </div>
        <!-- <div class="ml-auto category-task small text-muted">
            {{ task.category }}
        </div> -->
        <input class="form-control form-control-sm" type="date" />
      </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'CardItem',
  props: {
    task: {
      type: Object,
      default: {
        title: 'Untitled',
        description: 'Undescribe',
        category: 'Uncategory',
        isDone: false
      },
    },
    isGrid: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    checkedTask(task) {
      this.$store.dispatch('tasks/checkedTask', task)
    },
  }
}

</script>
