<template>
<div class="container">
  <div class="spinner-border text-primary position-fixed" role="status" id="loading" v-show="isLoading">
  </div>
  <div class="title border-bottom d-flex align-items-center py-2">
    <h5>Task</h5>
    <div class="d-flex align-items-center ms-auto">
      <button class="btn btn-primary" v-on:click="show">{{showHide}}</button>
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
  <div class="list-task row">
    <h2 class="text-center mt-3" v-if="resultQuery.length == 0">
        Result not found
    </h2>
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
      isLoading:true,
      showHide: 'Show/Hide',
      searchQuery: '',
      searchCategory: 'all',
      isCreating: false,
      isGrid: false,
      tasks: [
        {
        title: 'Task 1',
        description: 'ini deskripsi 1',
        category: 'Category A',
        isDone: false,
        },
        {
        title: 'Task 2',
        description: 'ini deskripsi 2',
        category: 'Category B',
        isDone: false,
        },
        {
        title: 'Task 3',
        description: ' ini deskripsi 3',
        category: 'Category B',
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
  created(){
    setTimeout(() => {
      this.tasks.push({
        title: 'Task 4',
        description: ' ini deskripsi 4',
        category: 'Category C',
        isDone: false,
      })
    }, 2000);
  },
  updated() {
    this.isLoading = false
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
<style>
#loading {
  left: 50%;
  right: 50%;
  top: 50%;
  bottom: 50%;
  width: 3rem;
  height: 3rem;
}
</style>
