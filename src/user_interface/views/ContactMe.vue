<template>
  <div class="contactme">
    <div class="contactme-part1">
      <section class="contactme-part1-section1">
        <article>
          <p>🗣️ If you want to communicate with me you can contact me through the following means 🤗.</p>
          <br>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/cerciber/" target="_blank">linkedin.com/in/cerciber</a>.</p>
          <p>GitHub: <a href="https://github.com/cerciber" target="_blank">github.com/cerciber</a>.</p>
          <p>Twitter: <a href="https://twitter.com/cerciber" target="_blank">twitter.com/cerciber</a>.</p>
          <p>TikTok: <a href="https://www.tiktok.com/@cerciber" target="_blank">tiktok.com/@cerciber</a>.</p>
          <p>Mail: <a href="mailto:cerciber@hotmail.com">cerciber@hotmail.com</a>.</p>
          <br>
          <p>📩 You can also leave me a message and I will contact you 👉🏻.</p>
        </article>
      </section>
    </div>
    <div class="contactme-part2">
      <form ref="form" class="contactme-part2-form">
        <input type="text" v-model="name" name="name" class="contactme-part2-form-input">
        <p>Write your name.</p>
        <br>
        <input type="text" v-model="email" name="email" class="contactme-part2-form-input">
        <p>Write your e-mail.</p>
        <br>
        <input type="text" v-model="phone" name="phone" class="contactme-part2-form-input">
        <p>Write your phone.</p>
        <br>
        <br>
        <textarea  v-model="message" name="message" class="contactme-part2-form-textarea"></textarea>
        <p>Write your menssage.</p>
        <br>
        <br>
        <Button1 :contentText = "'Enviar mensaje'" :setCustomEvent="true" v-on:customEvent="sendEmail"/>
      </form>
    </div>
    <div class="contactme-shape-back-curve">
    </div>
  </div>
</template>

<script>
import Button1 from '../components/Header/Button1.vue'
import emailjs from 'emailjs-com'

export default {
  name: 'contactMe',
  components: {
    Button1
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      console.log(e.target)
      try {
        emailjs.sendForm('service_3ltguwu', 'template_dkp8dwp', this.$refs.form, 'uJmUDUksDbymMx0mM', {
          name: 'Web Page Email from: ' + this.name,
          email: 'cerciber@hotmail.com',
          message: 'name: ' + this.name +  '\nemail: ' + this.email + '\nphone: ' + this.phone + '\n\n' + this.message
        }).then(() => {
          alert('Tu mensaje fue enviado correctamente!. Te contactaré tan pronto me sea posible 🤗.')
          this.name = ''
          this.email = ''
          this.phone = ''
          this.message = ''
        }).catch(() => {
          alert('Lo sentimos!!. Ocurrió un error al enviar tu mensaje.')
          this.name = ''
          this.email = ''
          this.phone = ''
          this.message = ''
        })
      } catch(error) {
        alert('Lo sentimos!!. Ocurrió un error al enviar tu mensaje.')
          this.name = ''
          this.email = ''
          this.phone = ''
          this.message = ''
      }
      
    }
  }
}
</script>

<style scoped>
.contactme{
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.contactme-part1 {
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 50%;
  height: 100%;
}

.contactme-part1-section1 {
  z-index: 100;
  padding: 20px;
  margin-top: 30%;
  margin-bottom: 30%;
  margin-left: 50px;
  margin-right: 50px;
  line-height : 35px;
  background-color: white;
  border: 3px solid var(--degrade3);    
  border-radius: 20px;
}

.contactme-part2 {
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 50%;
  height: 100%;
}

.contactme-shape-back-curve {
  position: absolute;
  min-width: 300%;
  max-width: 300%;
  mask-size: 40%;
  height: 200%;
  margin-top: 80%;
  margin-left: 80%;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center;
  
  background: var(--degrade1);
  background: linear-gradient(63deg, var(--degrade1) 0%, var(--degrade2) 70%);

  mask-image: url('~@/user_interface/assets/Curve.png');
  z-index: -1;

  shape-outside: url('~@/user_interface/assets/Curve.png');
  shape-image-threshold: 0.5;
  shape-margin: 20px;
  float: left;
}

.contactme-part2-form {
  width: 70%;
}

.contactme-part2-form-input {
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 2px solid var(--degrade3);
  background-color: transparent;
  font-family: 'Montserrat';
}

.contactme-part2-form-input:focus {
  outline: none;
}

.contactme-part2-form-textarea {
  width: calc(100% - 20px);
  height: 60px;
  border: none;
  border: 2px solid var(--degrade3);
  background-color: white;
  resize: none;
  padding: 10px;
  font-family: 'Montserrat';
}

.contactme-part2-form-textarea:focus {
  outline: none;
}

@media only screen and ((max-width: 700px) or (max-height: 600px)) {
  .contactme {
    display: grid;
  }

  .contactme-part1 {
    width: 100%;
    height: 600px;
  }

  .contactme-part2 {
    width: 100%;
    margin-top: -100px;
    padding-bottom: 100px;
  }

}


</style>