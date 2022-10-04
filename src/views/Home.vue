<script setup>
// import HelloWorld from '../components/HelloWorld.vue'
import PublicTemplate from './PublicTemplate.vue'
// import useCompany from '../composable/Companies'
// import { reactive, ref, onMounted } from 'vue'
// import { useRouter} from 'vue-router'

const publicEnvVar = import.meta.env.VITE_APP_API;
const publicEnvVar2 = import.meta.env.VITE_API_LOGIN;
// const props = defineProps(['foo'])
// defineProps({
//     msg: String,
// })
// props: {
//     id: {
//         required: true,
//         type: String
//     }
// }

// onMounted(getCompany(props.id))
// const saveCompany = async() => {
//     await updateCompany(props.id)
// }
</script>


<template>
    <!-- <HelloWorld msg="Remlex + Tech" /> -->
    <div>
        <PublicTemplate>
            <h1>Home Page </h1>
            <p>Public Var: {{ publicEnvVar }}</p>
            <p>Public endpoint: {{ publicEnvVar2 }}</p>
            <div class="row">

                <div class="card">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <router-link to="/login" class="btn btn-primary">Go somewhere</router-link>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
                        <input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
                        <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
                    </div>
                </div>
            </div>
        </PublicTemplate>
    </div>
</template>