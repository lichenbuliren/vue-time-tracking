<template>
  <div>
    <button
      v-if="$route.path !== '/time-entries/log-time'"
      v-link="'/time-entries/log-time'"
      class="btn btn-primary">
      Log Time
    </button>

    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>Log Time</h3>
    </div>

    <hr>

    <router-view></router-view>

    <div class="time-entries">
      <p v-if="!timeEntries.length"><strong>No time entries yet</strong></p>

      <div class="list-group">
        <a class="list-group-item" v-for="timeEntry in timeEntries">
          <div class="row">

            <div class="col-sm-2 user-details">
              <img :src="timeEntry.user.image" class="avatar img-circle img-responsive">
              <p class="text-center">
                <strong>
                  {{timeEntry.user.firstName}}
                  {{timeEntry.user.lastName}}
                </strong>
              </p>
            </div>

            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{timeEntry.totalTime}}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{timeEntry.date}}
              </p>
            </div>

            <div class="col-sm-7 comment-section">
              <p>{{timeEntry.comment}}</p>
            </div>

            <div class="col-sm-1">
              <button
                class="btn btn-xs btn-danger delete-button"
                @click="deleteTimeEntry(timeEntry)">
                X
              </button>
            </div>

          </div>
        </a>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  // es5 写法
  // data: function(){
  //   return {
  //     xxxx
  //   }
  // }
  // 这里代表vue的data对象，通过动态获取的
  data() {
    const existingEntry = {
      user: {
        firstName: 'Ryan',
        lastName: 'Chenkie',
        email: 'ryanchenkie@gmail.com',
        image: 'https://avatars3.githubusercontent.com/u/8489343?v=3&s=460'
      },
      comment: 'First time entry',
      totalTime: 1.5,
      date: '2016-04-08'
    };

    return {
      // 初始化返回一个数组，里面为一个timeEntries对象
      timeEntries: [existingEntry]
    };
  },
  methods: {
    deleteTimeEntry(timeEntry) {
      // 获取点击的时间对象的索引值
      const index = this.timeEntries.indexOf(timeEntry);
      if (window.confirm('Are you sure you want to delete this time entry?')) {
        this.timeEntries.splice(index, 1);
        // 派发一个deleteTime事件，首先在实例上触发它，然后沿着父链向上冒泡在触发一个监听器后停止，除非它返回 true。附加参数都会传给监听器回调。
        this.$dispatch('deleteTime', timeEntry);
      }
    }
  },
  events: {
    timeUpdate(timeEntry) {
      this.timeEntries.push(timeEntry);
      return true;
    }
  }
};
</script>

<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>
