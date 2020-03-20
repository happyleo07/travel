<template>
    <div class="hedaer">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点游玩
        </div>
        <router-link to='/city'>
            <div class="header-right">{{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
        </router-link>
        
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city'])
    },
}
</script>

<style scoped lang="stylus">
// 在css中用@表示src目录前 要加~ 这样才能引用
 @import '~styles/varibles.styl'
    .hedaer
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color:#fff
        .header-left
            width: .64rem
            float:left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            background:#fff
            border-radius: 5px
            margin-top:.12rem
            margin-left: .2rem
            padding-left: .2rem
            line-height:.64rem
            height:.64rem
            color:#ccc
        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float:right
            text-align:center
            color:#ffffff
            .arrow-icon
                font-size:.24rem
                margin-left: -0.04rem
</style>