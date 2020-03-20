<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或名字" >
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" 
                v-for="item of list"
                :key="item.id"
                @click="handleCityClick(item.name)"
                >
                {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNodata">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import { mapMutations } from 'vuex' 
import Bscroll from 'better-scroll'
    export default {
        name: 'CitySearch',
        props: {
            cities: Object
        },
        data() {
            return {
                keyword: '',
                list: [],
                tiemr: null
            }
        },
        methods: {
            handleCityClick (city) {
                // this.$store.dispatch('changeCity', city)  由于没有异步操作 所以暂时不用actions，所以不需要dispatch 操作
                // this.$store.commit('changeCity', city) 使用mapMutations映射所以不需要写法如此冗余
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        computed: {
            hasNodata () {
                return !this.list.length
            }
        },
        watch: {
            keyword () {
                if (this.tiemr) {
                    clearTimeout(this.tiemr)
                }
                if (!this.keyword) {
                    this.list = []
                    return
                }
                this.tiemr = setTimeout(() => {
                    const result = []
                    for ( let i in this.cities) {
                        this.cities[i].forEach((value) => {
                            if (value.spell.indexOf(this.keyword) > -1 ||
                            value.name.indexOf(this.keyword) > -1) {
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                }, 100)
            }
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.search)
        },
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height: .72rem
        padding: 0 .1rem
        background: $bgColor
        .search-input
            width:100%
            height: .62rem
            line-height: .62rem
            padding: 0 .1rem
            box-sizing : border-box
            text-align :center
            border-radius : .06rem
            color:#666666
    .search-content
        position : absolute
        overflow : hidden
        z-index :1
        top: 1.58rem
        left: 0
        right:0
        bottom: 0
        background: #eeeeee
        .search-item
            line-height : .62rem
            color:#666666
            padding-left: .2rem
            background : #ffffff


</style>