<template>
<div>
    <ul>
        <li v-for="item in list" :key="item" @click="showView(item)" :class="{active:nowItem==item}">
              <span>{{item}}</span> 
        </li>
    </ul>
    <nowplaying></nowplaying>
    </div>
</template>
<script>
    import nowplaying from "@/components/film/tabs/nowplaying/nowplaying";
export default {
    name:"tabs",
    data:function(){
        return {
            list:["正在上映","即将上映"],
            nowItem:"正在上映"
        }
    },
    methods: {
        showView:function(item){
            this.nowItem=item
        }
    },
    components:{
        nowplaying
    }
  
}
</script>


<style lang="scss" scoped>
    ul{
        height: 49px;
        display:flex;
        align-items: center;
        width:100%;

        li{
         
            flex:1;
            height: 100%;
            font-size: 12px;
            text-align: center;
            &.active{
            color:orange;
              span{
                  border-bottom:2px solid orange;
              }
            }
              span{
                          line-height: 49px;
                          display:inline-block;
                }
        }
    }
</style>