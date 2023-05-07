<template>
  <div>
	  <!-- <p>{{aa.msg}}</p> -->
	    <!-- <el-button type="success">成功按钮</el-button> -->
		<!-- <svg-icon iconClass="order" class="aa"></svg-icon> -->
		<div class="maxdiv">
			<img src="../assets/bg.png"/>
		</div>
		<div class="minidiv">
			<div class="box">
				<div class="stripe"></div>
				<div class="form">
					<div class="icon"><svg-icon iconClass="login-mall"></svg-icon></div>
					<h2>mall-admin-web</h2>
					 <el-form
					     ref="ruleFormRef"
					     :model="ruleForm"
					     :rules="rules"
					     class="demo-ruleForm"
					     :size="formSize"
					   >
					     <el-form-item prop="name">
					       <el-input class="inp" v-model="ruleForm.name">
								<template #prefix>
									<svg-icon style="color: #409eff" iconClass="user"></svg-icon>
								</template>
						   </el-input>
					     </el-form-item>
						 
						<el-form-item prop="password">
						   <el-input :type="typp" class="inp" v-model="ruleForm.password">
								<template #prefix>
									<svg-icon style="color: #409eff" iconClass="password"></svg-icon>
								</template>
								<template #suffix>
									<svg-icon iconClass="eye" @click="sg"></svg-icon>
								</template>
						   </el-input>
						 </el-form-item>
						 
						 <el-form-item>
						       <el-button class="btn" type="primary" @click="submitForm(ruleFormRef)">
						         登录
						       </el-button>
						 </el-form-item>
					</el-form>
				</div>
			</div>
		</div>
		
		
  </div>
</template>

<script setup>
	import {ref,reactive,toRef,toRefs,computed,watch,onBeforeMount,onMounted,onBeforeUpdate,onUpdated} from "vue"
	import {useMainStore} from "@/store/pinia.js"
	let aa=useMainStore();
	
	let typp=ref("password")
	let sg=()=>{
		if(typp.value=="password"){
			typp.value="text"
			console.log(111);
		}else{
			typp.value="password"
		}
	}
	
	let formSize = ref('default')
	let ruleFormRef = ref()
	let ruleForm = reactive({
	  name: '',
	  password: '',
	})
	
	let rules = reactive({
	  name: [
	    { required: true, message: '值不能为空', trigger: 'blur' },
	    { min: 3, max: 5, message: '密码需要大于3位', trigger: 'blur' },
	  ],
	  password: [
	    { required: true, message: '值不能为空', trigger: 'blur' },
	    { min: 3, max: 5, message: '密码需要大于3位', trigger: 'blur' },
	  ],
	})
	
	let submitForm = async (formEl) => {
	  if (!formEl) return
	  await formEl.validate((valid, fields) => {
	    if (valid) {
	      console.log('成功!')
	    } else {
	      console.log('失败!，原因===》', fields)
	    }
	  })
	}
	
	

</script>
<style scoped>
	.icon{
		text-align: center;
		font-size: 56px;
		color: #409eff;
	}
	.maxdiv{
		width: auto;
		height:auto;
		position: absolute;
		top: calc(50% - 180px);
	}
	img{
		width: auto;
		height: auto;
		max-width: 100%;
		background-color: #409eff;
	}
	.minidiv{
		width: 360px;
		height:400px;
		position: fixed;
		left: calc(50% - 180px);
		top: calc(50% - 250px);
		float: left;
		border-radius: 5px;
	}
	.stripe{
		width: 100%;
		height: 10px;
		background-color:#409eff
	}
	.box{
		width: 100%;
		height: 100%;
		background-color: white;
	}
	
	.form{
		padding: 20px;
		background-color: #ffffff;
	}
	.inp{
		margin-top: 10px;
	}
	h2{
		text-align: center;
		color: #409eff;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.btn{
		width: 100%;
		margin-top: 10px;
	}
</style>
