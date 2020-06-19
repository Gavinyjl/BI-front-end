<template>

  <div>



    <!--发现新品-->
    <a-card
      class="project-list"
      style="margin-bottom: 12px; padding: 20px"
      :bordered="false"
      title=""
      :body-style="{ padding: 0 }">


      <!--商品区-->
      <a-row>
        <!--商品分类-->
        <a-col :span="6" style="margin-top: 10px">
          <a-affix :offsetTop="30"><!--固钉-->
            <a-tabs type="card">
              <a-tab-pane tab="秒杀活动" key="1">
                <!--搜索可秒杀商品活动-->
                <a-input-search
                  placeholder="跳楼价格，等你秒杀！"
                  @search="searchName"
                  enterButton="搜索"
                  size="large"
                  v-model="name_search"
                />
                <p>搜索内容：{{name_search}}</p>
              </a-tab-pane>
              <a-tab-pane tab="秒杀时间" key="2">
                <!--秒杀时间搜索-->
                <a-range-picker
                  style="width: 100%"
                  :showTime="{ format: 'HH:mm' }"
                  format="YYYY-MM-DD HH:mm"
                  :placeholder="['开始秒杀', '结束秒杀']"
                  @change="timeSelect"
                  @ok="onOk"
                  v-model="time_search"
                />
                <p>选择时间：{{time_search}}</p>
              </a-tab-pane>
              <a-tab-pane tab="商品名称" key="3">
                <!--商品名称搜索-->
                <a-input-search
                  placeholder="心仪商品，应有尽有！"
                  @search="searchProduct"
                  enterButton="搜索"
                  size="large"
                  v-model="product_search"
                />
                <p>搜索内容：{{product_search}}</p>
              </a-tab-pane>

            </a-tabs>
          </a-affix>
        </a-col>

        <!--商品列表-->

        <!--商品名称列表-->
        <div v-if="this.flag===3">
          <a-col :span="18" style="margin-top: 10px">
            <div class="ant-pro-pages-list-projects-cardList">
              <p class="tip-style">为您搜索到以下优质宝贝</p>
              <a-list :data-source="productList" :grid="{ gutter: 12,column: 3 }">
                <a-list-item slot="renderItem" slot-scope="item">
                  <router-link :to="{ name: 'ProductDetail', params:{ id: item.productId} }">
                    <a-card class="ant-pro-pages-list-projects-card" hoverable
                            style="margin: 0 5px 0 5px">
                      <img slot="cover" :src="item.imageUrl" :alt="item.name" style="height: 250px;"/>
                      <a-row :gutter="24">
                        <a-col :span="12">
                          <a-card-meta :title="item.name" style="text-align: left">
                            <template slot="description">
                              商品品牌：{{ item.brand }}
                              <!--                              <ellipsis :length="16">商品品牌：{{ item.brand | ellipsis }}</ellipsis>-->
                            </template>
                          </a-card-meta>
                        </a-col>
                        <a-col :span="12">
                          <div class="price-style">￥{{ item.price }}</div>

                        </a-col>
                      </a-row>
                    </a-card>
                  </router-link>

                </a-list-item>
              </a-list>
              <a-pagination @change="onChange" :current="current" :total="totalPage*10" style="text-align: right"/>

            </div>
          </a-col>
        </div>

        <!--秒杀信息列表-->
        <div v-else>
          <a-col :span="18" style="margin-top: 10px">
            <div class="ant-pro-pages-list-projects-cardList">
              <p v-if="flag===0" class="tip-style">亲，这是为您推荐的热销宝贝~</p>
              <p v-else class="tip-style">为您搜索到以下劲爆秒杀宝贝</p>
              <a-list :data-source="seckillList" :grid="{ gutter: 12,column: 3 }">
                <a-list-item slot="renderItem" slot-scope="item">
                  <router-link :to="{ name: 'GoodsDetail', params:{ id: item.seckillID} }">
                    <a-card class="ant-pro-pages-list-projects-card" hoverable
                            style="margin: 0 5px 0 5px">

                      <img slot="cover" :src="item.imageUrl" :alt="item.name" style="height: 250px;"/>
                      <a-row :gutter="24">
                        <a-col :span="12">
                          <a-card-meta :title="item.name" style="text-align: left">
                            <template slot="description">
                              商品品牌：{{ item.brand }}
                              <!--                              <ellipsis :length="16">商品品牌：{{ item.brand | ellipsis }}</ellipsis>-->
                            </template>
                          </a-card-meta>
                        </a-col>
                        <a-col :span="12">
                          <div class="price-style">￥{{ item.seckillPrice }}</div>

                        </a-col>
                      </a-row>
                    </a-card>
                  </router-link>

                </a-list-item>
              </a-list>
              <a-pagination @change="onChange" :current="current" :total="totalPage*10" style="text-align: right"/>

            </div>
          </a-col>

        </div>
      </a-row>
    </a-card>


    <!--
          </a-col>
        </a-row>
    -->
  </div>

</template>

<script>
  import {PageView} from '@/layouts'
  // import {getGoods, searchByName, searchByProduct, searchByTime} from "../../api/goods";

  const DataSet = require('@antv/data-set')

  export default {
    name: 'Searching',
    components: {
      PageView,
    },
    data() {
      return {
        avatar: '',
        user: {},

        seckillList: [],
        productList: [],
        loading: false,
        current: 1,
        totalPage: '',

        flag: 0,

        name_search: '',
        time_search: [],
        time1: '',
        time2: '',
        product_search: '',

      }
    },
    computed: {
      userInfo() {
        return this.$store.getters.userInfo
      }
    },

    created() {
      this.user = this.userInfo
      this.avatar = this.userInfo.avatar
      this.firstGet();
      console.log('当前页数:', this.current);
    },

    filters: {
      /*省略多余描述*/
      ellipsis(value) {
        if (!value) return ''
        if (value.length > 16) {
          return value.slice(0, 16) + '······'
        }
        return value
      },

    },
    methods: {

      /*请求数据*/
      firstGet() {
        console.log('开始初始化请求')
        getGoods({'pageNum': this.current}).then(response => {
          console.log('初始化：', response)
          this.seckillList = response.seckillList
          this.totalPage = response.totalPage
          console.log('初始化获取数据', this.seckillList, this.totalPage)
        })
      },
      nameGet() {
        searchByName({'keyword': this.name_search, 'pageNum': this.current}).then(response => {
          this.seckillList = response.seckillList
          this.totalPage = response.totalPage
          console.log('按名称搜索获取数据：', this.seckillList)
        })
      },
      timeGet() {
        searchByTime({
          'seckillTimeStart': this.time1,
          'seckillTimeEnd': this.time2,
          'pageNum': this.current
        }).then(response => {
          this.seckillList = response.seckillList
          this.totalPage = response.totalPage
          console.log('按时间搜索获取数据：', this.seckillList)
        })
      },
      productGet() {
        searchByProduct({'keyword': this.product_search, 'pageNum': this.current}).then(response => {
          this.productList = response.productList
          this.totalPage = response.totalPage
          console.log('按商品搜索获取数据：', this.productList)
        })
      },

      searchName() {
        this.current = 1;
        this.flag = 1;
        this.nameGet();
      },

      timeSelect(value, dateString) {
        this.time1 = dateString[0];
        this.time2 = dateString[1];
        console.log('选择的时间： ', value);
        console.log('格式化的时间: ', dateString);
        console.log('显示两个时间：', this.time_search);
        console.log('time1,2：', this.time1, this.time2);
      },
      onOk(value) {
        console.log('onOk: ', value);
        this.current = 1;
        this.flag = 2;
        this.timeGet();
      },

      searchProduct() {
        this.current = 1;
        this.flag = 3;
        this.productGet();
      },


      onChange(current) {
        this.current = current;
        console.log('页码：', this.current);
        if (this.flag === 0) {
          this.firstGet();
        } else if (this.flag === 1) {
          this.nameGet();
        } else if (this.flag === 2) {
          this.timeGet();
        } else if (this.flag === 3) {
          this.productGet();
        }
      },

      /*
            getProjects() {
              this.$http.get('/list/search/projects')
                .then(res => {
                  this.projects = res.result && res.result.data
                  this.loading = false
                })
            },
      */


    }
  }
</script>

<style scoped>
  .price-style {
    color: orangered;
    text-align: center;
    font-size: 250%;
  }

  .tip-style{
    font-weight: bold;
    font-family: serif、sans-serif、cursive、fantasy、monospace;
    font-size: 20px;
  }

  .image-item {
    width: 100%;
    height: 100%;
    float: left;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }

  .button {
    margin-top: 1rem
  }

  .ant-pro-components-tag-select {
    /deep/ .ant-pro-tag-select .ant-tag {
      margin-right: 24px;
      padding: 0 8px;
      font-size: 14px;
    }
  }

  .ant-pro-pages-list-projects-cardList {
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 10px;

    /deep/ .ant-card-meta-title {
      margin-bottom: 4px;
    }

    /deep/ .ant-card-meta-description {
      height: 66px;
      overflow: hidden;
      line-height: 22px;
    }

    .cardItemContent {
      display: flex;
      height: 20px;
      margin-top: 16px;
      margin-bottom: -4px;
      line-height: 20px;

      > span {
        flex: 1 1;
        color: rgba(0, 0, 0, .45);
        font-size: 12px;
      }

      /deep/ .ant-pro-avatar-list {
        flex: 0 1 auto;
      }
    }

  }


  /*图片居中*/
  .picCon {
    overflow: hidden; /*防止div被图片撑大*/
  }

  .adPic {
    position: relative; /*改成相对div的定位*/
  }

  /*横幅图片格式*/
  .carousel-img {
    align: middle;
    margin: 0 auto;
  }


  /* 首页横幅 */
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 480px;
    line-height: 320px;
    background: firebrick;
    overflow: hidden;
  }

  .ant-carousel >>> .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
  }

  .ant-carousel >>> .custom-slick-arrow:before {
    display: none;
  }

  .ant-carousel >>> .custom-slick-arrow:hover {
    opacity: 0.5;
  }

  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }


  .project-list {

    .card-title {
      font-size: 0;

      a {
        color: rgba(0, 0, 0, 0.85);
        margin-left: 12px;
        line-height: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: top;
        font-size: 14px;

        &:hover {
          color: #1890ff;
        }
      }
    }

    .card-description {
      color: rgba(0, 0, 0, 0.45);
      height: 44px;
      line-height: 22px;
      overflow: hidden;
    }

    .project-item {
      display: flex;
      margin-top: 8px;
      overflow: hidden;
      font-size: 12px;
      height: 20px;
      line-height: 20px;

      a {
        color: rgba(0, 0, 0, 0.45);
        display: inline-block;
        flex: 1 1 0;

        &:hover {
          color: #1890ff;
        }
      }

      .datetime {
        color: rgba(0, 0, 0, 0.25);
        flex: 0 0 auto;
        float: right;
      }
    }

    .ant-card-meta-description {
      color: rgba(0, 0, 0, 0.45);
      height: 44px;
      line-height: 22px;
      overflow: hidden;
    }
  }

  .item-group {
    padding: 20px 0 8px 24px;
    font-size: 0;

    a {
      color: rgba(0, 0, 0, 0.65);
      display: inline-block;
      font-size: 14px;
      margin-bottom: 13px;
      width: 25%;
    }
  }

  .members {
    a {
      display: block;
      margin: 12px 0;
      line-height: 24px;
      height: 24px;

      .member {
        font-size: 14px;
        color: rgba(0, 0, 0, .65);
        line-height: 24px;
        max-width: 100px;
        vertical-align: top;
        margin-left: 12px;
        transition: all 0.3s;
        display: inline-block;
      }

      &:hover {
        span {
          color: #1890ff;
        }
      }
    }
  }

  .mobile {

    .project-list {

      .project-card-grid {
        width: 100%;
      }
    }

    .more-info {
      border: 0;
      padding-top: 16px;
      margin: 16px 0 16px;
    }

    .headerContent .title .welcome-text {
      display: none;
    }
  }

</style>
