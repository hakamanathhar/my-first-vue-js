<template>
  <section class="section py-5">
    <div class="container">
      <div class="row">
        <div class="offset-md-4 col-md-4">
          <Notification :message="error" v-if="error"/>
          <form method="post" @submit.prevent="register">
            <div class="mb-3">
              <label for="username-input" class="form-label">Username</label>
              <input type="text" class="form-control" id="username-input"
                  name="username"
                  v-model="username"
                  required
              >
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1"
                  name="email"
                  v-model="email"
                  required
              >
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"
                name="password"
                v-model="password"
              >
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'
export default {
  components: {
    Notification,
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register() {
      console.log(this.username)
      try {
        await this.$axios.post('register', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          },
        })
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
