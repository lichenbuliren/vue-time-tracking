import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initEntries = {
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

const initTotalTime = initEntries.totalTime;

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // TODO: 放置我们的状态变更函数
  ADD(state, timeEntry) {
    state.totalTime += parseFloat(timeEntry.totalTime);
    state.timeEntries.push(timeEntry);
  },
  DELETE(state, timeEntry) {
    state.totalTime -= parseFloat(timeEntry.totalTime);
    state.timeEntries.splice(timeEntry, 1);
  }
};

// 整合初始状态和变更函数，就得到了我们所需的 store
export default new Vuex.Store({
  state: {
    // TODO : 放置初始状态
    timeEntries: [initEntries],

    totalTime: initTotalTime
  },
  mutations
});
