<template>
  <div>
   <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<van-nav-bar  left-text="历史记录" >
  <template #right>
    <van-icon name="delete" size="18" />
  </template>
</van-nav-bar>
  </div>
</template>
<script>
export default {
 data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch() {

    },
    onCancel() {
    ('取消');
     window.history.back();
    },
  },
}
</script>

<style>

</style>