<template>
  <div>
    <button class="btn btn-md btn-success" @click="createPost">Create Post</button>
    <div v-for="post in posts" :key="post.id">
      <div class="card mb-3 mt-3">
        <div class="card-header">
           <h5><router-link :to="{ name: 'post_detail',params : {id:post.id} }">{{post.title}}</router-link></h5>
        </div>
        <div class="card-body">
          <p>{{post.excerpt}}</p>
           <b>Author : </b> {{post.author_name}} <br>
           <router-link :to="{ name : 'post_edit',params : {id:post.id} }">
            <button class="btn btn-sm btn-warning">Edit</button>
           </router-link>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>

// import api_token_header from './mixins/api_token_header_for_axios';

export default {
  // mixins : [api_token_header],
  data() {
    return {
      posts: [],
      meta: null,
      links: null,
      url : `/api/v1/post`
    };
  },
  created() {     
    axios.get(this.url).then(this.init_data_handler);
  },
  methods: {
    init_data_handler (response) {
      console.log(response);
      this.posts = response.data.data;
      this.meta = response.data.meta;
      this.links = response.data.links;
    },

    createPost(){
        this.$router.push('/vue/post/create')
    }
  }
};
</script>