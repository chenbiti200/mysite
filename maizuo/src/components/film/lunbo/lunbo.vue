<template>
  <swiper :options="swiperOption" ref="mySwiper"  >
    <!-- slides -->
    <swiper-slide v-for='item in banner[0]' :key="item.bannerId"><img :src="item.imgUrl" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  
  </swiper>
</template>



<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'carrousel',
    data() {
      return {
          banner:[],
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        //   loop:true,
          
            autoplay: {
            
            delay: 1500,
            
            stopOnLastSlide: false,
            
            disableOnInteraction: false
            
            }
        }
      }
    },
    created:function(){
        this.getData()
        // 方法也可以这里调用
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      list:function(){
          
      }
    },
    methods:{
           getData: function () {
            //    这个就是全局那里写了 然后就是可以拿到 this.$http 拿到axios
               this.$http.get('https://www.easy-mock.com/mock/5cb68e18e3926e3006389012/example/banner5.25')
                    .then((response)=> {
                        // 这里的this指向就不是vue 了
                    this.banner.push(response.data.data);
                    console.log(response.data.data);
                    console.log(this.banner);
         })
        .catch(function (error) {
                console.log(error);
  });
            }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
    },
     components: {
    swiper,
    swiperSlide
  }
  }
</script>


<style lang="scss" scoped>
   div.swiper-container{
       height: 210px;
       img{
           width: 100%;
       }
   }
</style>