<script>
export default {
  name: "user-profile",
  title: "User Profile",
}
</script>


<template>
  <div class="items">

    <div id="c1">
      <h2>Payment details</h2>
      <div class="container">
        <pv-icon-field>
          <i class="pi pi-pencil"></i>
          <h3>Numero de tarjeta:</h3>
          <h3>Apodo:</h3>
        </pv-icon-field>
      </div>
    </div>
    <h1></h1>

    <div id="c2">
      <h2>Bio</h2>
      <div class="container2">
        <pv-icon-field>
          <i class="pi pi-pencil"></i>
          <h3></h3>
        </pv-icon-field>
      </div>
    </div>
    <h1></h1>

    <div id="c3">
      <div class="container3">
        <h1 id="txt">Welcome back</h1>
        <pv-icon-field>
          <i class="pi pi-user"></i>
          <h3></h3>
        </pv-icon-field>
      </div>
    </div>

  </div>

  <div id="items2">
    <h2>Personal information</h2>
    <div class="container4" id="container-right">
      <pv-icon-field>
        <i class="pi pi-pencil"></i>
        <h3>First Name:</h3>
        <h3>Last Name:</h3>
        <h3>Email:</h3>
        <h3>Password:</h3>
      </pv-icon-field>
    </div>
  </div>
</template>

<style>
.items {
  display: flex;
  margin-left: 300px;
}
#items2 {
  margin-left: 300px;
  margin-bottom: 300px;
}
.container {
  width: 300px;
  height: 170px;
  background-color: #6cb2ce;
  border-radius: 10px;
  position: relative;
  color: white;
  padding: 20px;
}
.container2 {
  width: 300px;
  height: 250px;
  background-color: #6cb2ce;
  border-radius: 10px;
  position: absolute;
  color: white;
  padding: 20px;
}
.container3 {
  position: absolute;
  color: black;
  margin-bottom: 100px;
  margin-left: 400px;
}
.container4 {
  width: 300px;
  height: 250px;
  background-color: #6cb2ce;
  border-radius: 10px;
  position: absolute;
  color: white;
  padding: 20px;
  float: right;
  margin-bottom: 100px;
}
.pi.pi-pencil {
  margin-left: 230px;
  top: 10px;
  right: 10px;
  font-size: 24px;
}
.pi.pi-user {
  font-size: 400px;
}
#c2 {
  margin-left: 100px;
  margin-top: 100px;
}
#c3 {
  margin-left: 100px;
  margin-top: 50px;
}
#txt{
  text-align: center;
}
</style>