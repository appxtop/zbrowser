<template>
    <div class="tabs">
        <template v-for="(tab, index) in tabs" :key="tab.id">
            <div class="row tab" :class="{
                active: state.tabIndex === index,
                pre: state.tabIndex - 1 === index,
                next: state.tabIndex + 1 === index
            }" @click="changeTab(tab.id)">
                <div class="title">{{ tab.title }}</div>
                <div class="close zcenter" @click="removeTab(tab.id)">
                    <span class="iconfont icon-close"></span>
                </div>
            </div>
        </template>
        <div class="row btn_add zcenter" @click="addTab()">
            <span class="iconfont icon-add-bold"></span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import state from '@/store/state';
import mutations from '@/store/mutations'

const {
    tabs,
} = state;

const {
    addTab,
    changeTab,
    removeTab
} = mutations;



addTab();

</script>

<style scoped lang="less">
.tabs {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 190px;
    margin-left: 5px;
    user-select: none;
    box-sizing: border-box;

    .row {

        &.tab {
            position: relative;

            background-color: #e8eaed;
            flex: 1;
            max-width: 230px;
            padding: 8px;
            display: flex;
            flex-direction: row;
            align-items: center;
            overflow: hidden;

            &.active {
                background-color: white;
                // border-radius: 8px 8px 0 0;
                border-left: 20px blue solid;
                padding-left: 0px;

                &::before{
                    content: '';
                    position: absolute;
                    bottom: 0px;
                    left: -4px;
                    width: 8px;
                    height: 60px;
                    background: red;
                    opacity: 0.5;
                    z-index: 999999;
                }
            }


            &>.title {
                flex: 1;
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
            }

            &>.close {
                padding: 1px;
                border-radius: 50%;

                &>.iconfont {
                    transform: scale(0.8);
                    font-weight: bold;
                    color: #383b3e;
                }

                &:hover {
                    background: #cfd1d4;
                }
            }


        }

        &.btn_add {
            margin-left: 6px;
            margin-bottom: 2px;
            border-radius: 50%;
            padding: 3px;
            transition: background-color 0.3s ease;

            &>.iconfont {
                transform: scale(0.8);
                font-weight: bold;
                color: #383b3e;
                font-size: larger;
            }

            &:hover {
                background-color: #c9cace;
            }

        }

    }


}
</style>