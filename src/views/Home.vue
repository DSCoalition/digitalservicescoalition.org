<template>
    <section>
        
        <div class="bg-parallax">
            <parallax :speed-factor="0.8" sectionClass="parallax-outside" containerClass="parallax-inside">
                <img src="@/assets/bg-triangle-gray.png" />
            </parallax>
        </div>
        
        <div class="container py-5 bg-illustration">
            <div class="row justify-content-md-end">
                <div class="col-md-6 py-5">
                    <h1 class="text-blue my-md-5">Redefining how the government does digital.</h1>
                    <h3 class="text-gray">We’re a collection of agile technology and design firms that serve—or aspire to serve—the government.</h3>
                    <p>Change is hard. Systematic change is even harder. That’s why 16 design and development firms have teamed up to bring the innovation and agility that’s become the backbone of commercial digital services to the government.</p>
                    <p>This kind of digital transformation uses technology as a means to a goal—to dramatically improve the performance, reach, and customer experience of government services.</p>
                </div>
            </div>
        </div>
        
        <div class="bg-blue text-white">
            <div class="container py-5">
                <div class="row justify-content-md-center">
                    <div class="col-md-10">
                        <h2 class="text-center py-5">It’s the difference between <i>having to work to interact</i> with government services and <i>having those services work for you.</i></h2>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-parallax-photo">
            <parallax :speed-factor="0.2" sectionClass="parallax-outside" containerClass="parallax-inside">
                <img src="@/assets/bg-triangle-pink.png" class="float-right" />
            </parallax>
        </div>
        
        <div class="container py-5">
            <div class="row justify-content-md-start">
                <div class="col-md-6 py-md-5">
                    <h3 class="text-red">What does digital transformation look like?</h3>
                    <p>True digital transformation within the government has meaningful, tangible benefits for the public.</p>
                    <p>It means that the hundreds of millions of people who interact with our government could do so easily, efficiently, and dare we say, even enthusiastically through their phones, tablets, and computers. </p>
                    <p>It means that analog, paper-based processes are modernized into integrated, online workflows to speed up how the government works and save taxpayer dollars. </p>
                    <p>It means that technology infrastructure becomes more scalable, flexible, and secure, allowing services to work faster and more reliably.</p>
                </div>
            </div>
        </div>
        
        <div class="bg-gray">
            <div class="container py-5">
                <h1 class="text-blue pt-4">Stronger together.</h1>
                <p>The current “big box” contractor model is failing to deliver the kinds of collaboration, transparency, and efficiency that smaller, more forward-thinking firms excel at. Our goal is to collaborate, not compete by bringing like-minded small to midsize companies together to work toward the common mission of serving the American public by improving how government works.</p>
                <h3 class="text-gray mt-5">Our manifesto to do just that.</h3>

                <div class="row">
                    <div class="col-md-4">
                        <h6 class="text-blue mt-5 mb-1">Community over credit</h6>
                        <p>Each win moves us all closer to digital transformation</p> 	

                        <h6 class="text-blue mt-5 mb-1">Purpose over profit</h6>
                        <p>We’re mission-driven, not money-driven</p>
                    </div>
                    <div class="col-md-4">
                        <h6 class="text-blue mt-5 mb-1">Users over stakeholders</h6>
                        <p>If we don’t meet user needs, business goals will never truly be met </p>

                        <h6 class="text-blue mt-5 mb-1">Innovation over risk management</h6>
                        <p>Change comes from taking chances</p>
                    </div>
                    <div class="col-md-4">
                        <h6 class="text-blue mt-5 mb-1">Outcomes over activities</h6>
                        <p>Success is what you accomplish, not how much you did to get there</p>

                        <h6 class="text-blue mt-5 mb-1">Delivery over deliberation</h6>
                        <p>Perfection only exists once users tell you it’s perfect</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-parallax">
            <parallax :speed-factor=".1" sectionClass="parallax-outside-cover" containerClass="parallax-inside">
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