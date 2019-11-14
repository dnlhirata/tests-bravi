<template>
    <div class="header">
        <router-link class="logo" :to="{name: 'Home'}">Contact List</router-link>
        <nav>
            <div class="links-right">
                <router-link :to="{name: 'AddNewContact'}">Add new contact</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
</script>

<style scoped>
    .header {
      overflow: hidden;
      background-color: #f1f1f1;
      padding: 20px 10px;
    }
    
    .header a.logo {
      font-size: 25px;
      font-weight: bold;
    }
    
    .header > nav > div > router-link {
      float: left;
      color: black;
      text-align: center;
      padding: 12px;
      text-decoration: none;
      font-size: 18px;
      line-height: 25px;
      border-radius: 4px;
    }
    
    .links-right {
      float: right;
    }
</style>