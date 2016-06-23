<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          Vue Time Tracker
        </a>
        <ul class="nav navbar-nav">
          <li><a v-link="'/home'">Home</a></li>
          <li><a v-link="'/time-entries'">Time Entries</a></li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue';
  import store from './vuex/store';

  export default {
    components: {
      sidebar: Sidebar
    },
    vuex: {
      getters: {
        totalTime: state => state.total
      }
    },
    // data() {
    //   return {
    //     // 设置默认值
    //     totalTime: 1.5
    //   };
    // },
    // events: {
    //   timeUpdate(timeEntry) {
    //     this.totalTime += parseFloat(timeEntry.totalTime);
    //   },
    //   deleteTime(timeEntry) {
    //     this.totalTime -= parseFloat(timeEntry.totalTime);
    //   }
    // },
    // 在根组件加入 store ，让它的子组件和 store 连接
    store
  };
</script>
