<template>
  <div class="login">
    <div class="form-cls">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="70px"
        >
          <h2>欢迎登录青海巡</h2>
          <el-form-item label="用户名:" prop="username" >
            <el-input v-model="ruleForm.username" type="text" autocomplete="off" class="input" />
          </el-form-item>

          <el-form-item label="密码:" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off"/>
          </el-form-item>

          <el-form-item>
            <el-button class="login-btn" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
            <!-- <el-button class="login-btn" @click="resetForm(ruleFormRef)">重置</el-button> -->
          </el-form-item>

        </el-form>

      </div>
  </div>
</template>

<script lang="ts">
import { LoginData } from "@/type/login";
import  type{ FormInstance } from "element-plus";
import {defineComponent, reactive, ref, toRefs} from "vue";
import {login} from "@/request/api";
import {useRouter} from "vue-router";
import 'element-plus/dist/index.css'

export default defineComponent({
  setup () {
    const data = reactive(new LoginData())
    const router = useRouter()  //-->$router
    // 表单输入规则
    const rules = {
      username: [
        {
          required: true,  //是否必须字段
          message: "请输入用户名",   // 触发的提示信息
          trigger: "blur"   // 触发时机: 当失去焦点时（光标不显示的时候），触发此提示
        },
        {
          min: 3,   // 最小字符书
          max: 5,   // 最大字符数
          message: "用户名长度需要在3-5个字符之间",  // 触发的提示信息
          trigger: "blur"
        }
      ],
      password: [
        {
          required: true,  //是否必须字段
          message: "请输入密码",   // 触发的提示信息
          trigger: "blur"   // 触发时机: 当失去焦点时（光标不显示的时候），触发此提示
        },
        {
          min: 3,   // 最小字符书
          max: 6,   // 最大字符数
          message: "密码长度需要在3-5个字符之间",  // 触发的提示信息
          trigger: "blur"
        }
      ]
    }

    // 登录
    const ruleFormRef = ref<FormInstance>()

    // 重置
    const resetForm = () => {
      data.ruleForm.username = ""
      data.ruleForm.password = ""
    }

    const submitForm = (formEl: FormInstance | undefined) => {
      // 对表单内容进行验证
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          login(data.ruleForm).then((res) => {
            console.log(res)
            // 将token进行保存
            localStorage.setItem("token", res.data.token)
            // console.log(res.data.token);
            // 跳转页面
            router.push('/')
          })
        } else {
          console.log('error submit!')
          return false
        }
      })
    }

    return {
      ...toRefs(data),
      rules,
      resetForm,
      submitForm,
      ruleFormRef
    }
  }
 })
</script>

<style scoped>
  .input{
    margin-left: 0px;
  }
  .login{
    width: 100%;
    height: 100vh;
    background-image: url("../assets/bg.jpg");
    overflow: hidden;
  }

  .form-cls{
    padding: 50px;
    width: 350px;
    height: 200px;
    margin: 0 auto;
    background-color: white;
    position: relative;
    top:200px;
    border-radius: 14px;
  }

  .login-btn{
    width: 48%;
    margin-left: 55px;
  }

  h2{
    text-align: center;
    margin-bottom: 20px;
  }
</style>