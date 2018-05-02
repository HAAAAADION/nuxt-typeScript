<template>
    <div class="sidebar">
        <span @click="checkCollapse" class="sidebar__collapser u-icon u-icon--sidebar-show"></span>
        <el-menu
            default-active="2"
            class="sidebar__nav"
            style="border-color: #deeceb;"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="u-icon u-icon--activity-center"></i>
                    <span>平台信息</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item class="sidebar__item" index="1-1">用户信息</el-menu-item>
                    <el-menu-item class="sidebar__item" index="1-2">游戏信息</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="u-icon u-icon--money"></i>
                    <span>企业账号</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item class="sidebar__item" index="2-1">企业余额</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="u-icon u-icon--pause"></i>
                    <span>平台配置</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item class="sidebar__item" index="3-1">配置信息</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import {
    Menu as ElMenu,
    Submenu as ElSubmenu,
    MenuItem as ElMenuItem,
    MenuItemGroup as ElMenuItemGroup
} from 'element-ui';

@Component({
    components: {
        ElMenu,
        ElSubmenu,
        ElMenuItem,
        ElMenuItemGroup,
    }
})
export default class extends Vue {
    private isCollapse: boolean = false

    handleOpen(key: any, keyPath: any): any {
        console.log(key, keyPath);
    }
    handleClose(key: any, keyPath: any): any {
        console.log(key, keyPath);
    }

    checkCollapse(): void {
        console.log(this.isCollapse)
        this.isCollapse = !this.isCollapse;
    }
}
</script>

<style scoped lang="scss">
    .sidebar {
        position: relative;

        &__collapser {
            position: absolute;
            top: 24px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
            color: #666;
            cursor: pointer;
        }

        &__nav {
            padding-top: 48px;
            height: 100%;
            box-sizing: border-box;

            &:not(.el-menu--collapse) {
                width: 220px;
                min-height: 400px;
            }

            .u-icon {
                display: inline-block;
                text-align: center;
                margin: 0 8px;
            }
        }

        &__item {
            min-width: auto;
        }
    }
</style>
