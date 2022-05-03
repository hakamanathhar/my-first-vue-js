<template>
  <section class="section py-5">
    <div class="container">
      <div class="row">
        <div class="offset-md-4 col-md-4">
          <Notification :message="error" v-if="error"/>
          <form method="post" @submit.prevent="login">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  name="email"
                  v-model="email"
              >
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
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
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login() {
      console.log({
            email: this.email,
            password: this.password
      })
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  },
  middleware: 'guest'
}
</script>
