<template>
    <transition name="fade">
    <div id="list">
        <div class="topBar">
            知乎日报-VUE
        </div>
<!--stories-->
        <ul class="stories">
            <li v-for="item in listData.stories" class="card" @click="showDetail(item.id)">
                <div class="card-img">
                    <img :src="item.images[0] | imgWeserv" alt="">

                </div>
                <div class="card-title">
                    <p>{{item.title}}<span class="card-tip" v-if="item.multipic">多图</span></p>
                </div>
                <div></div>
            </li>
        </ul>
    </div>
    </transition>
</template>

<script>
    /* eslint-disable */
    import version from '../components/version.vue'
    import loading from '../components/loading-lang.vue'

    export default {
        name: 'test',
        data () {
            return {
                isLoading: false,
                listData: {}
            }
        },
        components: {
            version,loading
        },
        // define methods under the `methods` object
        watch: {
            '$route': 'fetchData'
        },
        filters: {
//            解决 403问题
//            https://images.weserv.nl/
            imgWeserv: function(value){
                value = value.split('https://')[1];
                return '//images.weserv.nl/?url=' + value
            }

        },
        methods: {
            fetchData: function () {
                console.log('test!')
            },
            about: function () {
                console.log('about!');
                this.$router.push({
                    name: 'about',
//          query:{
//            id:'1'
//          }
                })
            },
            showDetail: function (id) {
                console.log('about!');
                this.$router.push({
                    name: 'content',
                      query:{
                        id: id
                      }
                })
            },
            getListData: function () {
//        显示加载
                let oriUrl = '/api/4/news/latest';
                let requestUrl = oriUrl;
                this.isLoading = true;
                this.$http.get(requestUrl).then(function (resp) {
                    if (!resp.error) {
                        this.listData = resp.data;
                        console.log(resp.data)

                    }
                }, function (resp) {
                    console.log("网络链接有问题");
                });
            },

        },
        mounted: function () {
            var that = this;
            this.getListData();
        }
    }
</script>

<style src="../assets/css/list.scss"  lang="scss" scoped>

</style>
