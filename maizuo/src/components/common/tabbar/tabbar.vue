<template id="tabbar">
    <div>
        <!--这里就是分为3个部分  这里算是html 部分  
        下面就是script 部分 
        在下面就是style部分
         -->
    <ul>
        <!-- :{}这样的方式就是对象的方式传入  -->
        <li v-for="item in list" :key="item.name" :class="{'active':item.name==nowItem}"
        @click="showView(item)">
           <i :class="item.i"></i><span>{{item.name|fn}}</span>
        </li>
    </ul>

    </div>
</template>


<script>
// 然后就是在这里写东西 就是数据放这里
export default {
    name:"tabbar",
    data:function(){
        return {
            list:[
                {path:"./film",name:"film",i:"iconfont icon-me2"},
                {path:"./cinema",name:"cinema",i:"iconfont icon-cinema"},     
                {path:"./discount",name:"discount",i:"iconfont icon-youhui"},     
                {path:"./me",name:"me",i:"iconfont icon-dianying"},     
            ],
            nowItem:"film"
            // 其实就是根据nowItem 改变active 的样子
        }
    },methods: {
        showView:function(item){
            this.nowItem =item.name;
            // 这个就是跳转路由
            this.$router.push({path:item.path});
            // 就是点击的时候把这个那么赋值个nowItem 从而达到切换的目的
        }

    },
    filters:{
        // 这个就是val 默认和case 里面的值相等的 所以就不需要==等于号了
        fn:val=>{
            switch (val){
                case "film" :
                    console.log(val);
                    return "电影";
                    break;
                case "cinema":
                    return "影院";
                    break;
                 case "discount":
                    return "优惠";
                    break;
                 case "me":
                    return "我的";
                    break;
                
            }
        }
    }
}
</script>

<style lang="scss" scoped>
// 这个表示这个私有化的意思 就是这个样式不会影响到别人
    // 然后这个就是说明语言是啥 

    ul{
        list-style:none;
        position: fixed;
        left: 0px;
        bottom: 0px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 50px; 
        color: #aaa;   
            li{
                height: 49px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                i{
                    font-size: 24px;
                }
                span{
                    font-size: 12px;
                }
                 &.active{
                color:orange
            } 
            } 
                 
    }



</style>