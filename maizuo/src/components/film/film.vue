<template>
<div>
<lunbo></lunbo> 
<tabs></tabs>  
</div>
</template>




<script>
// 因为这个默认就是把整个都导出来 所以的话设置name 其实也可以 
import lunbo from "@/components/film/lunbo/lunbo"
import tabs from "@/components/film/tabs/tabs"
export default {
    name:"film",
    components:{
        lunbo,tabs
    }


}
</script>






