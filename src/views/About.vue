<template>
    <div id="about-view">
        <div class="wrapper-header">
            <h1>ABOUT ME</h1>
            <div class="settings">
                <button id="btn-edit"  v-bind:class="[{ active : editing }]" @click="changeEdit">{{editVar}}</button>
                <button id="btn-save" v-if="editing" @click="changeUserData, changeEdit">Save Form</button>
            </div>
        </div>
        <form>
            <div class="wrapper-input">
                <label>NAME</label>
                <input id="input-name" v-model="inName" v-if="editing"/>
                <p id="txt-name" v-if="!editing">{{auth.user.name}}</p>
            </div>
            <div class="wrapper-input">
                <label>SURNAME</label>
                <input id="input-surname" v-model="inSurname" v-if="editing"/>
                <p id="txt-surname" v-if="!editing">{{auth.user.surname}}</p>
            </div>
            <div class="wrapper-input">
                <label>STUDENT CODE</label>
                <input id="input-code" v-model="inCode" v-if="editing"/>
                <p id="txt-code" v-if="!editing">{{auth.user.code}}</p>
            </div>
            <div class="wrapper-songs">
                <label>FAVORITE SONGS</label>
                <ul>
                    <li>
                        <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
                        <div class="song-info">
                            <p id="txt-song" class="song-name">DEEP (feat. Nonô)</p>
                            <p id="txt-artist" class="song-artists">Example</p>
                        </div>
                    </li>
                </ul>
                <div id="txt-empty" class="empty">NO SONGS FOUND</div>
            </div>
        </form>
    </div>
</template>

<script>
    import { auth } from '/src/stores/auth'
    export default {
        data(){
            return{
                editing: false,
                editVar: 'Edit Form',
                inName: '',
                inSurname: '',
                inCode: '',
                auth
            }
        },
        methods: {
            changeEdit(){
                if (this.editing){
                    this.editVar = 'Edit Form'
                }else{
                    this.editVar = 'Cancel'
                }
                this.editing = !this.editing;
            },
            changeUserData(){
                if(this.inName != ''){
                    auth.user.name = this.inName;
                }
                if(this.inSurname != ''){
                    auth.user.surname = this.inSurname;
                }
                if (this.inCode != ''){
                    auth.user.code = this.inCode;
                }               
            }
        }
    }
</script>