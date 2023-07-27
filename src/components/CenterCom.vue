<!-- eslint-disable @typescript-eslint/no-empty-function -->
<template>
    <div class="center">
        <a @click="back()">
            <svg style="margin-left: 0" viewBox="0 0 24 24">
                <path fill="#7A7A7A" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
            </svg>
        </a>
        <a @click="forward()">
            <svg viewBox="0 0 24 24">
                <path fill="#7A7A7A" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
        </a>
        <a @click="reload()">

            <svg t="1690440387837" class="reload" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="5440" width="200" height="200">
                <path
                    d="M672.911 226.447A326.697 326.697 0 0 0 512 184.32c-180.982 0-327.68 146.698-327.68 327.68S331.018 839.68 512 839.68 839.68 692.982 839.68 512a61.44 61.44 0 0 1 122.88 0c0 248.832-201.728 450.56-450.56 450.56S61.44 760.832 61.44 512 263.168 61.44 512 61.44c90.87 0 177.377 27.095 250.163 75.756l69.694-69.694c8.355-8.356 22.22-8.028 30.965 0.717 4.055 4.075 6.472 9.462 6.759 15.094l11.018 231.956a31.068 31.068 0 0 1-32.85 32.85L615.793 337.08a23.142 23.142 0 0 1-21.873-22.917c0-5.611 2.17-10.916 6.062-14.786l72.909-72.91z"
                    fill="#5f6368" p-id="5441"></path>
            </svg>

        </a>
        <input type="text" class="url" @focusout="placeholder = placeholder_init" @focus="placeholder = ''"
            :placeholder="placeholder">
        <a @click="showMenu()">
            <svg viewBox="0 0 24 24">
                <path fill="#5f6368"
                    d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
            </svg>
        </a>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const placeholder_init = ref('在Google中搜索,或者输入一个网址')
const placeholder = ref(placeholder_init.value);

function back() {

}
function forward() {

}
function reload() {

}

function stopLoad() {

}

function showMenu() {

}




</script>

<style scoped lang="less">
.center {
    background-color: white;
    padding: 4px 8px 0px 8px;
    display: flex;

    .url {
        flex: 1;
        background: #e9ebec;
        border: none;
        padding: 5px 15px;
        font-family: sans-serif;
        outline: none;
        height: 14px;
        border-radius: 30px;
        border: 2px solid transparent;

        &:focus {
            background: white;
            border-color: rgb(26, 115, 232);
        }
    }


    svg {
        width: 28px;
        height: 28px;
        position: relative;
        margin: 0 3px;
        padding: 4px;
        border-radius: 50%;
        transition: .2s ease;
        overflow: visible;

        &:hover {
            background: #eeeeee;
        }

        &:active {
            background: #e2e2e2;
            transition: background-color 0.1s;
        }

        box-sizing: border-box;

        &.reload {
            padding: 6px;
            margin-right: 4px;
        }
    }
}
</style>
