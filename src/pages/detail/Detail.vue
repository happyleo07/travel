<template>
    <div>
        <detail-banner 
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header ></detail-header>
        <detail-list :list="list"></detail-list>
        <evaluation :evalutionList="evalutionList"></evaluation>

        <!-- <div class="content"></div> -->
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import Evaluation from './components/Evaluation'
import axios from 'axios'
    export default {
        name: 'Detail',
        components: {
            DetailBanner,
            DetailHeader,
            DetailList,
            Evaluation
        },
        data() {
            return {
                sightName: '',
                bannerImg: '',
                gallaryImgs:[],
                list: [],
                evalutionList: [],
            }
        },
        methods: {
            getDetailInfo () {
                axios.get('/api/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then(this.handleGetDataSucc)
            },
            handleGetDataSucc (res) {
                res = res.data
                if(res.ret && res.data) {
                    const data = res.data
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImgs = data.gallaryImgs
                    this.list = data.categoryList
                    this.evalutionList = data.evalutionList
                }
            }
        },
        mounted() {
            this.getDetailInfo()
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        height:20rem
</style>