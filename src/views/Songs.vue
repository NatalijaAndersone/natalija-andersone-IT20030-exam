<template>
    <div id="songs-view" @scroll="handleScroll">
        <div class="wrapper-header">
            <h1>SONGS</h1>
            <div class="wrapper-search">
                <input id="input-search" placeholder="Search by title..." />
            </div>
            <div class="wrapper-settings">
                <button id="btn-show-favorites">Show Favorites</button>
            </div>
        </div>
        <div class="wrapper-songs">
            <table cellspacing="0" cellpadding="0">
                <tr ref="header">
                    <th id="th-id" >#</th>
                    <th id="th-title">
                        Title
                        <IconCaretUp />
                    </th>
                    <th id="th-artist">Artist</th>
                    <th id="th-album">Album</th>
                    <th id="th-duration">
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
                    <td id="td-album">We May Grow Old But We Never Grow Up</td>
                    <td id="td-duration">
                        3:07
                        <IconHeart />
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import songs from '../data/songs';
    export default {
        data(){
            return{
                songs: songs
            }
        },
        methods: {
            handleScroll(event) {
                this.$refs.header.classList.value = event.target.scrollTop > 100 ? 'scrolled' : '';
            },
            getArtists(songs){
                return songs.artists[1] === undefined ? songs.artists[0].name 
                : songs.artists[2] === undefined ? songs.artists[0].name + " , "+ songs.artists[1].name
                : songs.artists[0].name + " , "+ songs.artists[1].name + " , " +songs.artists[2].name;
            }
        }
    }
</script>