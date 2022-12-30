<template>
  <div class="contactme">
    <div class="contactme-part1">
      <section class="contactme-part1-section1">
        <article>
          <p>🗣️ Si deseas comunicarte conmigo puedes contactarme a través de los sigientes medios 🤗.</p>
          <br>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/cerciber/" target="_blank">https://www.linkedin.com/in/cerciber</a>.</p>
          <p>GitHub: <a href="https://github.com/cerciber" target="_blank">https://github.com/cerciber</a>.</p>
          <p>Twitter: <a href="https://twitter.com/cerciber" target="_blank">https://twitter.com/cerciber</a>.</p>
          <p>Mail: <a href="mailto:contact@cerciber.com">contact@cerciber.com</a>.</p>
          <br>
          <p>📩 También puedes dejarme un mensaje y yo me comunicaré contigo 👉🏻.</p>
        </article>
      </section>
    </div>
    <div class="contactme-part2">
      <form ref="form" class="contactme-part2-form">
        <input type="text" v-model="name" name="name" class="contactme-part2-form-input">
        <p>Escribe tu nombre.</p>
        <br>
        <input type="text" v-model="email" name="email" class="contactme-part2-form-input">
        <p>Escribe tu e-mail.</p>
        <br>
        <input type="text" v-model="phone" name="phone" class="contactme-part2-form-input">
        <p>Escribe tu teléfono.</p>
        <br>
        <br>
        <textarea  v-model="message" name="message" class="contactme-part2-form-textarea"></textarea>
        <p>Escribe tu mensaje.</p>
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
          email: 'contact@cerciber.com',
          message: 'name: ' + this.name +  '\nemail: ' + this.email + '\nphone: ' + this.phone + '\n\n' + this.message
        }).finally(() => {
          alert('Tu mensaje fue enviado correctamente!. Te contactaré tan pronto me sea posible 🤗.')
          this.name = ''
          this.email = ''
          this.phone = ''
          this.message = ''
        })
      } catch(error) {
        alert('Lo sentimos!!. Ocurrió un error al enviar tu mensaje.')
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


</style>