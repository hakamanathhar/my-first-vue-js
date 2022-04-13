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

  <div class="action py-2">
    <a href="#" class="add-button"
      v-if="!isCreating" @click="isCreating = !isCreating">
      Add Task
    </a>

    <div class="add-card" v-else>
      <form v-on:submit.prevent="handleSubmit()">
        <div class="card mb-2">
          <div class="card-header d-flex justify-content-between">
            <h5 class="my-auto">Add New Task</h5>
            <button @click="isCreating = !isCreating" class="btn btn-danger ml-auto d-flex justify-content-end">Cancel</button>
          </div>
          <div class="card-body row">
            <div class="form-group col-md-4">
                <input class="form-control" v-model="form.title" placeholder="Title"/>
            </div>
            <div class="form-group col-md-4">
                <select class="form-control" v-model="form.category">
                  <option selected>Category</option>
                  <option value="Category A">Category A</option>
                  <option value="Category B">Category B</option>
                  <option value="Category C">Category C</option>
                </select>
            </div>
            <div class="form-group col-md-4">
                <textarea class="form-control" v-model="form.description" placeholder="Description"></textarea>
            </div>
            <div class="col-md-12">
              <button type="submit" class="btn btn-primary mt-2 w-100">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
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
      isCreating:false,
      showHide: 'Show/Hide',
      searchQuery: '',
      searchCategory: 'all',
      isCreating: false,
      isGrid: false,
      form: {
        title: '',
        category: '',
        description: '',
      },
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
    },
    handleSubmit: function(event) {
      if(this.form.title =='' || this.form.category =='' || this.form.description ==''){
        alert('Masih ada form yang kosong')
        return;
      }
      this.tasks.push({
        title: this.form.title,
        category: this.form.category,
        description: this.form.description
      })
      this.form.title =''
      this.form.category =''
      this.form.description =''
      this.isCreating = !this.isCreating
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
