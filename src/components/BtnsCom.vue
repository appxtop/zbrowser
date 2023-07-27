<template>
    <div class="btns">
        <a class="item min" @click="min()">
            <svg t="1690443944988" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="9551" width="200" height="200">
                <path
                    d="M930.355 551.424H94.218c-23.987 0-43.975-17.408-43.975-39.424 0-21.504 19.42-39.424 43.975-39.424h835.564c23.987 0 43.975 17.408 43.975 39.424 0.006 22.016-19.415 39.424-43.402 39.424z"
                    p-id="9552">
                </path>
            </svg>
        </a>
        <a class="item max" @click="max()">
            <svg t="1690443865901" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="7561" width="200" height="200">
                <path
                    d="M800 128h-576C172.8 128 128 172.8 128 224v576c0 51.2 44.8 96 96 96h576c51.2 0 96-44.8 96-96v-576c0-51.2-44.8-96-96-96z m32 672c0 19.2-12.8 32-32 32h-576c-19.2 0-32-12.8-32-32v-576c0-19.2 12.8-32 32-32h576c19.2 0 32 12.8 32 32v576z"
                    p-id="7562">
                </path>
            </svg>
        </a>
        <a class="item close" @click="close()">
            <svg t="1690444543659" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="10519" width="200" height="200">
                <path
                    d="M556.8 512L832 236.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L512 467.2l-275.2-277.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l275.2 277.333333-277.333333 275.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L512 556.8 787.2 832c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L556.8 512z"
                    p-id="10520"></path>
            </svg>
        </a>
    </div>
</template>

<script lang="ts" setup>

function min() {

}
function max() {

}
function close() {

}


</script>

<style scoped lang="less">
.btns {
    user-select: none;
    /* 允许拖动窗口 */
    background-color: transparent;
    width: 138px;
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    justify-content: space-between;

    .item {
        flex: 1;
        text-align: center;

        svg {
            width: 15px;
            height: 15px;
            fill: #000000;
        }

        &:hover {
            background: #d0d2d5;
            color: white;
        }

        &:active {
            background: #c3c6cb;
        }

        &.min {
            svg {
                width: 11px;
            }
        }

        &.max {
            svg {
                width: 14px;
                height: 14px;
                fill: #000000;
            }
        }

        &.close {


            &:hover {
                svg {
                    fill: white;
                }

                background-color: red;
            }

            &:active {
                background-color: #e36571;
                transition: background-color .1s;
            }
        }
    }
}
</style>