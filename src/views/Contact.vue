<template>
    <section>
        
        <div class="container py-5">
            <div class="row justify-content-md-between">
                <div class="col-md-5 py-5">
                    <h1 class="text-blue my-md-5">Contact us.</h1>
                    <p>Have a question about what we’re up to? Want to know more about working with us? Drop us a note!</p>
                </div>
                <div class="col-md-6 py-5">
                    <form>
                        <div class="form-group">
                            <label for="">Name</label>
                            <input type="text" class="form-control" id="" placeholder="Your name">
                        </div>
                        <div class="form-group">
                            <label for="">Email address</label>
                            <input type="email" class="form-control" id="" placeholder="name@example.com">
                        </div>
                        <div class="form-group">
                            <label for="">What's on your mind?</label>
                            <textarea class="form-control" id="" rows="5"></textarea>
                        </div>
                        <a href="" class="btn btn-primary">Send message</a>
                    </form>
                </div>
            </div>
        </div>
        
        <div class="bg-parallax">
            <parallax :speed-factor="0.8" sectionClass="parallax-outside-cover" containerClass="parallax-inside">
                <img src="@/assets/bg-rectangle-blue.png" />
            </parallax>
        </div>
        
    </section>
</template>



<script>
    import Parallax from 'vue-parallaxy'

    export default {
      components: {
        Parallax
      }
    }
</script>

