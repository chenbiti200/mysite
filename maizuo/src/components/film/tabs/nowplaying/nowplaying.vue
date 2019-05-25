<template>
    <ol>
        <li v-for="item in list[0]" :key="item.filmId">1</li>
    </ol>
</template>

<script>
export default {
    name:"nowplaying",
    data:function(){
        return {
            list:[],
        }
    },
    created() {
        this.getData();
    },
    methods: {
              getData: function () {
            //    这个就是全局那里写了 然后就是可以拿到 this.$http 拿到axios
               this.$http.get('https://www.easy-mock.com/mock/5cb68e18e3926e3006389012/example/list5.25')
                    .then((response)=> {
                        // 这里的this指向就不是vue 了
                    this.list.push(response.data.data.films);
                    console.log(this.list);
         })
        .catch(function (error) {
                console.log(error);
  });
            }
    },
    
}

</script>