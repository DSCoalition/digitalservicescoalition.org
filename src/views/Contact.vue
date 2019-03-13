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

                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfOo7ss8JtJ1mWCNdXoUNB3F-pj6OSabhmt9ZBeE6PcVQ1dDA/viewform?embedded=true" width="100%" height="1020" frameborder="0" marginheight="0" marginwidth="0"></iframe>
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

