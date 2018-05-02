<template>
    <div class="topbar">
        <div class="topbar__logo">
            <img src="//24haowan-cdn.shanyougame.com/public/24HaoWan/web/logo-white.png" />
            <span class="topbar__title">| 代理商管理后台</span>
        </div>
        <div class="topbar__user-info">
            <div class="topbar__user-icon">
                <span class="u-icon u-icon--personal-center"></span>
                <span class="topbar__user-name">Penn</span>
            </div>
            <a>注销</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .topbar {
        background: #1AB899;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        color: #fff;

        &__logo {
            display: flex;
            align-items: center;

            img {
                height: 34px;
            }
        }

        &__title {
            margin-left: 5px;
        }

        &__user-info {
            display: flex;
        }

        &__user-icon img{
            width: 14px;
            height: 14px;
            margin-right: 10px;
        }

        &__user-name {
            margin-left: 10px;
        }

        a {
            display: inline-block;
            margin-left: 20px;
        }
    }
</style>
