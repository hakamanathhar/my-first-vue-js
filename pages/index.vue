<template>
<div class="container">
  <div class="title border-bottom d-flex align-items-center py-2">
    <h5>Task</h5>
    <div class="d-flex align-items-center ms-auto">
      <button class="btn btn-primary" v-on:click="show">Show</button>
      <select  class="form-control mx-3" v-model="searchCategory">
          <option value="all" :selected="true">ALL</option>
          <option v-for="(category, i) in getCategory" :key="i"
            :value="category">{{category.toUpperCase()}}</option>
      </select>
      <input type="text" class="form-control" placeholder="Search" v-model="searchQuery">
      <div class="d-flex align-items-center justify-content-end w-100">
        <span class="me-2">View As</span>
        <button
          class="btn btn-outline-secondary py-1 px-3"
          @click="isGrid = !isGrid"
        >
          {{ isGrid ? 'Grid' : 'List' }}
        </button>
      </div>
    </div>
  </div>
  <div class="list-task row" v-show="ok">
    <CardItem
    v-for="(task, i) in resultQuery"
    :key="i"
    :task="task"
    :isGrid="isGrid"
    />
  </div>
</div>
</template>

<script>
import CardItem from "@/components/Card/CardItem.vue"
export default {
  components: {
      CardItem
  },
  data() {
    return {
      ok:true,
      searchQuery: '',
      searchCategory: 'all',
      isCreating: false,
      isGrid: false,
      tasks: [
        {
        title: 'Task 1',
        description: 'ini deskripsi 1',
        category: 'category a',
        isDone: false,
        },
        {
        title: 'Task 2',
        description: 'ini deskripsi 2',
        category: 'category b',
        isDone: false,
        },
        {
        title: 'Task 3',
        description: ' ini deskripsi 3',
        category: 'category b',
        isDone: false,
        }
      ],
      isGrid: false,
    }
  },
  methods: {
    show: function (event) {
      this.tasks.forEach(element => {
        element.isDone = false
      });
    }
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.tasks.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else if(this.searchCategory && this.searchCategory != 'all') {
        return this.tasks.filter((item) => {
          return this.searchCategory
            .toLowerCase()
            .includes(item.category.toLowerCase())
        });
      }else {
        console.log(this.tasks);
        return this.tasks
      }
    },
    getCategory() {
      const arrTask = []
      for (let i = 0; i < this.tasks.length; i++) {
        if (
          !arrTask.includes(this.tasks[i].category)
        ) {
          arrTask.push(this.tasks[i].category);
        }
      }
      return arrTask
    }
  }
}
</script>
