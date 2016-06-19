<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>Date</label>
        <input type="date"
          class="form-control" 
          v-model="timeEntry.date"
          placeholder="Date" 
        />
      </div>
      <div class="col-sm-6">
        <label>Hours</label>
        <input type="number"
          class="form-control" 
          v-model="timeEntry.totalTime"
          placeholder="Hours" 
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>Comment</label>
        <input type="text"
          class="form-control" 
          v-model="timeEntry.comment"
          placeholder="Comment" 
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">Save</button>
    <button v-link="'/time-entries'" class="btn btn-danger">Cancel</button>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeEntry: {
        user: {
          firstName: 'Ryan',
          lastName: 'Chenkie',
          email: 'ryanchenkie@gmail.com',
          image: 'https://avatars3.githubusercontent.com/u/8489343?v=3&s=460',
        },
      },
    };
  },
  methods: {
    save() {
      // const timeEntry = this.timeEntry;
      // 派发一个事件，触发父级的timeUpdate事件
      this.$dispatch('timeUpdate', this.timeEntry);
      this.timeEntry = {};
    },
  },
};
</script>