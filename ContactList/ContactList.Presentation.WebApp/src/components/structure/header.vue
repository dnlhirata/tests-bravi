<template>
    <div class="header">
        <a class="logo" href="http://localhost:80/">Contact List</a>
        <nav>
            <div class="links-right">
                <a href="http://localhost:80/add-new-contact">Adicionar novo contato</a>
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
    
    .header a {
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