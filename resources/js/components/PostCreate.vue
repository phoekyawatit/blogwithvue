<template>
    <div>
            <text-input name="title" placeholder="Enter Title" label="Title :"></text-input>
            <textarea-input name="content" placeholder="Awesome Content Here" label="Content :"> </textarea-input>        
            <form-group label="Publish Post : ">
                <radio-item name="is_published" checked="true" label="Yes" id="is_published_yes" value="1"></radio-item>
                <radio-item name="is_published" id="is_published_no" label="No" value="0"></radio-item>
            </form-group>              
            <categories-select></categories-select>
            <button class="btn btn-success">Save</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title : null,
            content : null,
            is_publish : null
        }

    },
    methods : {
        
    }
}
</script>