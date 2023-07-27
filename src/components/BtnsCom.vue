<template>
    <div class="btns">
        <span class="item min" @click="min()">—</span>
        <span class="item max" @click="max()">□</span>
        <span class="item close" @click="close()">✕</span>
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

        &:hover {
            background: #d0d2d5;
            color: white;
        }

        &.min {
            font-size: 8px;
            font-weight: bold;
        }

        &.max {
            font-size: 18px;
            line-height: 26px;
        }

        &.close {
            font-size: 15px;

            &:hover {
                background-color: red;
            }
        }
    }
}
</style>