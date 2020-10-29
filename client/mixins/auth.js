import {SET_AUTH, UNSET_AUTH} from '@store/auth/actions';
export default {
    computed: {
        auth() {
            return !!this.$store.state.auth.user
        },

        user(){
            return this.$store.state.auth.user
        }
    },
    methods: {
        setAuth(payload){
            localStorage.setItem('auth', JSON.stringify(payload))
            this.$store.commit(SET_AUTH, payload)
            

            if(payload.user.type=='Candidate'){
                this.$router.push('/candidate')
            }else{
                this.$router.push('/employer')
            }
            // this.$router.push('/')
        },
        unsetAuth() {
            localStorage.removeItem('auth')
            this.$store.commit(UNSET_AUTH)
            this.flash('Successfully logged out.')
             this.$router.push('/')
        }
    }

}