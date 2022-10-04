import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useCompanies(){
    const companies = ref([])
    const router = useRouter()
    const errors = ref([])

    const getCompanies = async() => {
        let res = await axios.get('/api/companies')
        companies.value = res.data
    }

    const storeCompany = async(data) => {
        try{
            await axios.get('/api/companies/', data)
            await router.push({ name: 'Dashbooard'})
        }catch(e){
            if(e.res.status === 422){
                for(const key in e.res.data.error){
                    errors.value += e.res.data.errors[key][0] + ' '
                }
            }
        }
    }

    const updateCompany = async(id) => {
        try{
            let res = await axios.get('/api/companies' + id, data)
            await router.push({ name: 'Dashbooard'})
        }catch(e){
            if(e.res.status === 422){
                for(const key in e.res.data.error){
                    errors.value += e.res.data.errors[key][0] + ' '
                }
            }
        }
    }

    const deleteCompany = async(id) => {
        await axios.delete('/api/companies/' + id)
    }    

    return {
        companies,
        getCompanies,
        storeCompany,
        updateCompany,
        deleteCompany
    }
}