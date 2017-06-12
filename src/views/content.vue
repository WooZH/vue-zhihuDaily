<template>
    <div id="content">
        <div class="content-img"  :style="{backgroundImage: 'url('+ contentData.image + ')'}">
        </div>
        <div class="mask">
            <p class="mask-title">
                {{contentData.title}}
            </p>
            <p class="mask-tip">
                图片: {{contentData.image_source}}
            </p>
            <div @click="back()" class="back"><< back</div>

        </div>
        <div class="" v-html="contentData.body"></div>
    </div>
</template>

<script>
    /* eslint-disable */

    export default {
        name: 'test',
        data () {
            return {
                isLoading: false,
                contentData: {},
                contentId: '',

            }
        },
        components: {
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
            back: function (id) {
                this.$router.go(-1)
//                this.$router.push({
//                    name: 'content',
//                    query:{
//                        id: id
//                    }
//                })
            },
            getDetail: function () {
//        显示加载
                let oriUrl = '/api/4/news/';
                let requestUrl = oriUrl + this.contentId ;
                this.isLoading = true;
                this.$http.get(requestUrl).then(function (resp) {
                    if (!resp.error) {
                        this.contentData = resp.data;

//                        转换头图url
                        var value = this.contentData.image.split('https://')[1];
                        this.contentData.image =  '//images.weserv.nl/?url=' + value;

//                        转换正文图片url
                        var subStr=new RegExp('src="http://','ig')
                        this.contentData.body =this.contentData.body .replace(subStr,'src="//images.weserv.nl/?url=');
                        console.log(resp.data)

//                          增加正文css
                        var head = document.getElementsByTagName('HEAD').item(0);
                        var style = document.createElement('link');
                        style.href = this.contentData.css[0];
                        style.rel = 'stylesheet';
                        style.type = 'text/css';
                        head.appendChild(style);

                    }
                }, function (resp) {
                    console.log("网络链接有问题");
                });
            },

        },
        mounted: function () {
            var that = this;
            this.contentId = this.$route.query.id;
            this.getDetail();
        }
    }
</script>

<style src="../assets/css/content.scss"  lang="scss" scoped>

</style>
