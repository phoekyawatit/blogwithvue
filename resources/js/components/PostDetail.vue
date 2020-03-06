<template>
    <div>
     <h5>{{post.title}}</h5>
     <p v-html="post.content"></p>
     <b>Author : </b> {{post.author_name}}
    </div>

</template>
<script>
export default {
    data(){
        return{
             post : [],
             url : `/api/v1/post/${this.$route.params.id}`
        }
    },
    created(){
        console.log(this.$route.params.id);
        axios.get(this.url).then(response => {
           this.post = response.data.data;
        });
    }
}
</script>