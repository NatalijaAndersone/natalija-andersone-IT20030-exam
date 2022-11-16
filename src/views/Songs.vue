<template>
    <div id="songs-view" @scroll="handleScroll">
        <div class="wrapper-header">
            <h1>SONGS</h1>
            <div class="wrapper-search">
                <input id="input-search" placeholder="Search by title..." />
            </div>
            <div class="wrapper-settings">
                <button id="btn-show-favorites" :class="{ active: active }" @click="active = !active">Show Favorites</button>
            </div>
        </div>

        <div class="wrapper-songs">
            <table cellspacing="0" cellpadding="0">
                <tr ref="header">
                    <th id="th-id" >#</th>
                    <th id="th-title" v-bind:class ="{active: sortByName}" @click = 'click += 1, sortNames()'>
                        Title
                        <IconCaretUp />
                    </th>
                    <th id="th-artist">Artist</th>
                    <th id="th-album">Album</th>
                    <th id="th-duration" v-bind:class="{active:sortByDuration}" @click = 'click += 1, sortDuration()'>
                        Duration
                        <IconCaretUp />
                    </th>
                </tr>
                <!-- Loop goes on this <tr> element -->
                <tr class="song" v-for="(songs, index) in songs">
                    <td id="td-index">
                        <IconPlay />
                        <span id="txt-index">{{index}}</span>
                    </td>
                    <td id="td-title">
                        <img :src='songs.album.images[0].url' />
                        {{songs.name}}
                    </td>
                    <td id="td-artist">{{getArtists(songs)}}</td>
                    <td id="td-album">{{songs.album.name}}</td>
                    <td id="td-duration">
                        {{convertMStoS(songs.duration_ms)}}
                        <IconHeart />
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import songs from '../data/songs';
    import IconCaretUp from '../components/icons/IconCaretUp.vue'
    import IconHeart from '../components/icons/IconHeart.vue'
    import IconPlay from '../components/icons/IconPlay.vue'
    export default {
        data(){
            return{
                songs: songs,
                active: false,
                click: 0,
                sortByName : false,
                sortByDuration : false,
                unsortedNames : [],
                unsortedDuration : []
            }
        },

        components:{
            IconCaretUp,
            IconHeart,
            IconPlay
        },

        methods: {
            handleScroll(event) {
                this.$refs.header.classList.value = event.target.scrollTop > 100 ? 'scrolled' : '';
            },
            getArtists(songs){
                return songs.artists[1] === undefined ? songs.artists[0].name 
                : songs.artists[2] === undefined ? songs.artists[0].name + " , "+ songs.artists[1].name
                : songs.artists[0].name + " , "+ songs.artists[1].name + " , " +songs.artists[2].name;
            },
            
            sortNames(){
                if(!this.sortByName){
                    this.unsortedNames = songs.concat();
                    this.sortByName = true;
                };
                if(this.click == 1){
                    return this.songs.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                    });
                }else if(this.click == 2){
                    return this.songs.sort((b, a) => {
                    return a.name.localeCompare(b.name);
                    });
                }else if(this.click == 3){
                    this.sortByName = false;
                    this.click = 0;
                    this.songs = this.unsortedNames.concat();
                }},

            sortDuration(){
                if(!this.sortByDuration){
                    this.unsortedDuration = songs.concat();
                    this.sortByDuration = true;
                };
                if(this.click == 1){
                    return this.songs.sort((a, b) => {
                    return a.duration_ms.toString().localeCompare(b.duration_ms.toString());
                    });
                }else if(this.click == 2){
                    return this.songs.sort((b, a) => {
                    return a.duration_ms.toString().localeCompare(b.duration_ms.toString());
                    });
                }else if(this.click == 3){
                    this.sortByDuration = false;
                    this.click = 0;
                    this.songs = this.unsortedDuration.concat();
                }},

            convertMStoS(millis) {
                var minutes = Math.floor(millis / 60000);
                var seconds = ((millis % 60000) / 1000).toFixed(0);
                return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
            }
        


            
        }
    }
</script>