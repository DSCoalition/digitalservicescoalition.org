<template>
    <section>

        <div class="bg-parallax-photo">
            <parallax :speed-factor="0.5" sectionClass="parallax-outside" containerClass="parallax-inside">
                <img src="@/assets/bg-triangle-blue2.png" class="float-right float-md-none" />
            </parallax>
        </div>

        <div class="container py-5">
            <div class="row justify-content-md-between">
                <div class="col-md-6 py-md-5">
                    <h1 class="text-blue my-lg-5">Contact us.</h1>
                </div>

                <div class="col-md-5 py-md-5">
                    <h5 class="text-gray">Have a question about what we’re up to? Want to know more about working with us? Drop us a note!</h5>
                    
                    <div v-if="isSent" id="contact-form-success" class="bg-gray">
                        <p>Your message was sent! Thanks for reaching out.</p>
                    </div>

                    <form v-if="!isSent" id="contact-form"  method="post" @submit.prevent="validateForm">
                        <div class="form-group">
                            <label for="first_name" :class="{'text-red': errors.has('first_name') }">First name <span class="text-red">*</span> <small v-show="errors.has('first_name')" class="text-gray">{{ errors.first('first_name') }}</small></label>
                            <input v-validate="'required'" :class="{'form-control': true, 'border-red': errors.has('first_name') }" id="first_name" maxlength="40" name="first_name" size="20" type="text" v-model="form.first_name" />
                        </div>
                        <div class="form-group">
                            <label for="last_name" :class="{'text-red': errors.has('last_name') }">Last name <span class="text-red">*</span> <small v-show="errors.has('last_name')" class="text-gray">{{ errors.first('last_name') }}</small></label>
                            <input v-validate="'required'" :class="{'form-control': true, 'border-red': errors.has('last_name') }" id="last_name" maxlength="80" name="last_name" size="20" type="text" v-model="form.last_name" />
                        </div>
                        <div class="form-group">
                            <label for="email" :class="{'text-red': errors.has('email') }">Email <span class="text-red">*</span> <small v-show="errors.has('email')" class="text-gray">{{ errors.first('email') }}</small></label>
                            <input v-validate="'required|email'" data-vv-delay="500" :class="{'form-control': true, 'border-red': errors.has('email') }" id="email" maxlength="80" name="email" size="20" type="text" v-model="form.email" />
                        </div>
                        <div class="form-group">
                            <label for="message" :class="{'text-red': errors.has('message') }">What's on your mind? <span class="text-red">*</span> <small v-show="errors.has('message')" class="text-gray">{{ errors.first('message') }}</small></label>
                            <textarea v-validate="'required'" :class="{'form-control': true, 'border-red': errors.has('message') }" id="message" name="message" rows="5" v-model="form.message"></textarea>
                        </div>
                        <input v-if="!isSending" class="btn btn-primary btn-block" type="submit" name="submit_btn" value="Send" />
                        <div v-if="isSending" class="btn btn-primary btn-block disabled">Sending</div>
                    </form>
                </div>
            </div>
        </div>
        
    </section>
</template>



<script>
  import Parallax from 'vue-parallaxy'
  import VeeValidate from 'vee-validate'
  import { Validator } from 'vee-validate'
  const dictionary = {
    en: {
      attributes: {
        'message': 'message',
        'first_name': 'first name',
        'last_name': 'last name'
      }
    }
  };
  Validator.localize(dictionary);
  export default {
    components: {
        Parallax
    },
    data() {
      return {
        form: {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        },
        isSending: false,
        isSent: false
      }
    },
    methods: {
      validateForm() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.sendMessage();
          }
        });
      },
      clearForm() {
        for (let field in this.contact) {
          this.contact[field] = ''
        }
      },
      sendMessage() {
        this.isSending = true;
        setTimeout(() => {
          // Send form to server    
          this.$http.post('/contact-fearless', JSON.stringify(this.form)).then((response) => {
            console.log(response);
            this.clearForm();
            this.isSending = false;
            this.isSent = true;
          }).catch((e) => {
            //console.log(e)
            this.isSent = false;
          });
        }, 1000);
      }
    }
  }
</script>

