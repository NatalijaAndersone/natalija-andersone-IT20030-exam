<template>
    
    <div v-if="is_a"><Header></Header></div>
    <div id="section-body">
            <div v-if="is_a == true">
            <Navigation></Navigation>
            </div>

        <router-view class="section-router"></router-view>
        
        <div v-if="is_a">
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
           is_a: auth.is_authenticated
        }
    }
}
</script>
