<template>
  <PublicTemplate>
    <section class="bg-light">
      <div class="container-lg col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">Sign In</h1>
            <p class="col-lg-10 fs-4">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing it.
            </p>
          </div>


          <div class="col-md-10 mx-auto col-lg-5">
            <p class="text-danger" v-if="errors">{{ errors }}</p>
            <form
              class="p-4 p-md-5 border rounded-3 bg-light"
              @submit.prevent="onSubmit"
            >
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control form-control-sm"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  v-model="form.email"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  v-model="form.password"
                />
                <!-- <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="form.password"
                /> -->
                <label for="floatingPassword">Password</label>
              </div>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Sign In
              </button>
              <hr class="my-4" />
              <small class="text-muted"
                >By clicking Sign up, you agree to the terms of use.</small
              >
            </form>
          </div>
        </div>
      </div>
    </section>

    <section className='py-5'>
      <div className="container-lg col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row">
          <div className="col-md-12 mb-5">
            <h3>GREAT SERVICES</h3>
            <div className="sub-underline mt-3"></div>
          </div>

          <div className="col-md-6 mb-2">
            <div className="card">
              <div className="card-body">
                <h4>Service MP 1</h4>
                <div className="mb-3"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente repellendus, dignissimos perspiciatis accusamus consectetur minima tenetur voluptate expedita quidem, est eaque recusandae aspernatur magni, vitae porro dolor natus unde?</p>
              </div>
            </div>
          </div>

          <div className="col-md-5 offset-md-1 mb-2">
              <div className="card shadow">
              <div className="card-header bg-primary"><h5 className='text-center text-white'>Sign Up</h5></div>
                  <div className="card-body py-2">
                      <p className='text-center mt-3'>Already register <Link to="/login"> Sign In </Link> </p>
                      <div className="mb-3"></div>

                      <p class="text-danger" v-if="errors">{{ errors }}</p>

                      <form>
                        <label>Full Name</label>
                        <input type="text" name="name" className="form-control mb-2" placeholder="e.g. John Doe" aria-label="Email" />
                        <label>Email</label>
                        <input type="email" name="email" className="form-control mb-2" placeholder="email@example.com" aria-label="Email" />
                        <label>Password</label>
                        <input type="password" name="password" className="form-control mb-2" placeholder="********" aria-label="Password" />
                        <button className="btn btn-sm btn-primary w-100" type="submit">Submit</button>
                        
                        <p className='text-center mt-3'>Forgot <Link to="/login"> Password? </Link> </p>
                      </form>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  </PublicTemplate>
</template>

<script setup>
import PublicTemplate from '../PublicTemplate.vue'
// import useCompany from '../../composable/Companies'
import { reactive, ref } from 'vue'
import { useRouter} from 'vue-router'

const router = useRouter()

const form = reactive({
  // name: '',
  email: '',
  password: ''
})

const errors = ref('')
const error = ref([])
// const { storeCompany } = useCompany()

const onSubmit = async(e) => {
  // console.log(form)
  await axios.post('login', form).then(res => {
    if(res.data.success){
      console.log(res.data.data)
      localStorage.setItem('token', JSON.stringify(res.data.data.token))
      localStorage.setItem('users', JSON.stringify(res.data.data))
      router.push({ name: 'Dashboard'})
    }else{
      // console.log(res.response.data.message)
      errors.value = res.data.response.data.message
    }
  })
  // .catch(err => {
  //   console.log(err)
  //   error.value = err.data.response.message
  // })
}

// const saveCompany = async() => {
//   await storeCompany({ ...form })
// }

// return { onSubmit }

</script>

<style scoped>
.text-danger{
  color: red;
}
</style>