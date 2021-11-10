<template>
   <div>
        <div>你好我是list</div>
        <Content />
   </div>
</template>
<script>

export default {
    name:'list',
    mounted(){
        console.log('$site',this.$site);
    }
}
</script>