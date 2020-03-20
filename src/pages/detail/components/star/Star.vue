<template>
    <div>
        <ul class="star">
            <li v-for="item in chance" :class="item" class="iconfont">&#xe61d;</li> <!--根据数据循环创建li标签-->
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Star",
        data() {
            return {
                // num: "",
                // stor: "",
                // star: ["on", "on", "on", "on", "off"]
            }
        },
        props: {
            num: String,
            stor: String
        },
        computed: {
            chance() {
                //创造一个数组,让数组里的值都是off,好进行下面的比较。
                let arr = [];
                while (this.num>arr.length){
                    arr.push("off")
                }
                //向下取整数,数组中的Array.map() 方法返回一个新数组, 此方法可以以一个函数为参数,循环数组的每一个元素,函数将数组中的元素接收为单个参数
                //判断整数大于下标值,大于的话返回on，因为数组的下表从0开始
                // 多出来的小时(res)乘10，大于等于5,使定义的新数组的num变成half，因为数组的下表从0开始
                let num = Math.floor(this.stor)
                let tes = (this.stor-num)*10
                let newstar = arr.map((item,index)=> {
                    if (num>index) {
                        return "on"
                    }else {
                        return "off"
                    }
                })
                if (tes>= 5){
                    newstar[num]="half"
                }
                return newstar //返回newstar数组
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .star li 
        width: 20px;
        height: 20px;
        float: left;
        list-style: none;
        font-size: 0.24rem
    .on
        color: #ffb436;
</style>