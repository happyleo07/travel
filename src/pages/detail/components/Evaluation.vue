<template>
    <div>
        <div class="ela-box">
            <div class="eli-title border-bottom">
                用户评价
            </div>
            <ul>
                <li class="eli-content border-bottom"
                    v-for="item of evalutionList"
                    :key="item.id"
                >
                    <div class="eli-ctop">
                        <span class="star-box">
                            <star :num="item.num" :stor="item.stor"></star>
                        </span>
                        <span class="name-detail">
                            <p class="username">
                                {{item.userName}}
                                <span class="time">{{item.evalTime}}</span>
                            </p>
                        </span>
                    </div>
                    <div class="eli-cbottom">
                        <p>{{item.evalContent}}</p>
                    </div>
                </li>
            </ul>
            <router-link to="/EvalMore" >
                <p class="seeMore">
                查看全部评论 >
                </p>
            </router-link>
        </div>
    </div>
</template>

<script>
import Star from  './star/Star'
    export default {
        name: 'Evaluation',
        props: {
            evalutionList : Array,
            
        },
        // data() {
        //     return {
        //         num: "",
        //     stor: ""
        //     }
        // },
        components:{
            Star,
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .ela-box
        overflow()
        background: #f5f5f5
        padding :.2rem 0
        .eli-title
            position: relative
            padding: 0 .2rem
            height: .88rem
            background: #fff
            color: #333
            font-size: .3rem
            line-height: .88rem
            text-indent: .2rem
        .eli-title:after 
            content: "\0020"
            position: absolute
            top: .33rem
            left: .2rem
            width: .06rem
            height: .25rem
            background: #1ba9ba
            -webkit-border-radius: .04rem
            -moz-border-radius: .04rem
            border-radius: .04rem
        .eli-content
            padding:.2rem
            overflow()
            background: #ffffff
            .eli-ctop
                width:100%
                margin: .1rem auto 
                overflow()
                .star-box
                    overflow()
                    
                .name-detail
                    float: right
                    .username
                        font-size: .24rem
                    .time
                        margin-left:.1rem
            .eli-cbottom
                font-size: .28rem
                line-height : .40rem
        .seeMore
            width:100%
            height : .8rem
            line-height : .8rem
            background:#ffffff
            border-top:1px dashed #e5e5e5
            font-size:.3rem
            text-align : center
            color:#000000
</style>