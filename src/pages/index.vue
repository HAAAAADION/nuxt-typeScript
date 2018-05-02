<template>
    <div class="container">
        <div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from "nuxt-property-decorator"
import {
    Breadcrumb as ElBreadcrumb,
    BreadcrumbItem as ElBreadcrumbItem,
} from 'element-ui';

@Component({
    components: {
        ElBreadcrumb,
        ElBreadcrumbItem
    }
})
export default class extends Vue {
    public msg: string = 'qwe'
    get asd (): string {
        return 'qwe'
    }
    async mounted() {
    }
}
</script>

<style>
    .container {
    }
</style>
