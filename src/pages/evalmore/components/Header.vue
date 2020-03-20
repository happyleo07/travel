<template>
    <div class="header border-bottom">
        <router-link to="./">
            <div class="header-left">
                <div class="iconfont header-back">&#xe624;</div>
            </div>
        </router-link>
        查看更多评论
    </div>
</template>

<script>
    export default {
        name : 'EvalMoreHeader'
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-bottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .header
        overflow hidden
        position : relative
        height: $headerHeight
        line-height : $headerHeight
        text-align :center
        color:$bgColor
        background: #ffffff
        font-size: .32rem
        .header-back
            width: .64rem
            text-align : center
            font-size: .4rem
            position:absolute
            top:0
            left: 0
            color:#000000
</style>