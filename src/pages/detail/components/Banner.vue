<template>
<div>
    <div class="banner">
        <img class="banner-img" @click="handleBannerClick" :src="bannerImg" alt="">
        <div class="banner-info">
            <p class="banner-title">{{this.sightName}}</p>
            <p class="banner-number"><span class="iconfont banner-icon">&#xe623;</span>{{this.bannerImgs.length}}</p>
        </div>
    </div>
    <fade-animation>
        <common-gallery :imgs="bannerImgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
    </fade-animation>
</div>

</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
    export default {
        name: 'DetailBanner',
        components: {
            CommonGallery,
            FadeAnimation
        },
        props:{
            sightName: String,
            bannerImg: String,
            bannerImgs:Array
        },
        data() {
            return {
                showGallery: false,
                // imgs: ['http://img1.qunarzz.com/sight/p0/1904/81/817f78b0743f0ccaa3.img.jpg_600x330_9d7df7c8.jpg','http://img1.qunarzz.com/sight/p0/1904/53/53c20dbba0fd85c3a3.img.jpg_r_800x800_a6a5a84a.jpg'
                //     ]
            }
        },
        methods: {
            handleBannerClick() {
                this.showGallery = true
            },
            handleGalleryClose() {
                this.showGallery = false
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height :0 
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position:absolute
            left:0
            right:0
            bottom: 0
            line-height: .6rem
            color:#ffffff
            background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
            .banner-title
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                height: .32rem
                line-height : .32rem
                margin-top:.14rem
                padding: 0 .4rem
                border-radius: .2rem 
                font-size:.24rem
                background: rgba(0, 0, 0, 8)
                .banner-icon
                    font-size 0.24rem
</style>