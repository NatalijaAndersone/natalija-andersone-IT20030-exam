<template>
    <div v-if="auth.is_authenticated"><Header></Header></div>
    <div id="section-body">
            <div v-if="auth.is_authenticated">
                <Navigation></Navigation>
            </div>

        <router-view class="section-router"></router-view>
        
        <div v-if="auth.is_authenticated">
            <div id="section-player">
                <AudioPlayer />
            </div>
        </div>
    </div>
</template>

<script>
import { auth } from '../src/stores/auth'

export default {
    data() {
        return {
           auth
        }
    }
}
</script>
