<template>
  <nav>
      <h1>Vuex Auth</h1>
      <template v-if="user">
        <!-- for all users -->
        <div>
          <router-link to="/">Home</router-link>
        </div>
        <!-- for logged in users -->
        <div>
          <span>Logged in as {{ user.email }}</span>
          <button @click="handleClick">Logout</button>
        </div>
        <!-- for logged out users -->
        
    </template>
    <div v-if="!user">
          <router-link to="/login">Login</router-link>
          <router-link to="/signup">Signup</router-link>
        </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  setup(){
    const store = useStore()
    const router = useRouter()

    const handleClick = () =>{
      store.dispatch('logout')
      router.push('/')
    }


    return{
      handleClick,
      user:computed(()=>store.state.user),
      authIsReady:computed(()=>store.state.authIsReady)
    }
  }
}
</script>