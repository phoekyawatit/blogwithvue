<template>
  <form-group label="Caregory : ">
    <select name="category_id" class="form-control">
      <option v-for="category in categories" :selected="value == category.id? true : false" :key="category.id" :value="category.id">{{category.name}}</option>
    </select>
  </form-group>
</template>
<script>
export default {
  props : ['value'],
  data() {
    return {
      categories: []
    };
  },
  created() {
    const url = `/api/v1/category`
    axios.get(url).then(response => {
      this.categories = response.data;
    });
  }
};
</script>