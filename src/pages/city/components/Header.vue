<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left">
                <div class="iconfont header-back">&#xe624;</div>
            </div>
        </router-link>
        城市选择
    </div>
</template>

<script>
    export default {
        name: 'CityHeader'
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        overflow hidden
        position : relative
        height: $headerHeight
        line-height : $headerHeight
        text-align :center
        color:#ffffff
        background: $bgColor
        font-size: .32rem
        .header-back
            width: .64rem
            text-align : center
            font-size: .4rem
            position:absolute
            top:0
            left: 0
            color:#ffffff
</style>