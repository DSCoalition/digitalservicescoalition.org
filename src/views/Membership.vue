<template>
    <section>
        
        <div class="bg-parallax-photo">
            <parallax :speed-factor="0.8" sectionClass="parallax-outside" containerClass="parallax-inside">
                <img src="@/assets/bg-triangle-pink3.png" class="float-right" />
            </parallax>
        </div>
        
        <div class="container py-5">
            <div class="row justify-content-md-between">
                <div class="col-md-6 py-md-5">
                    <h1 class="text-magenta my-md-5">Join the coalition</h1>
                    
                    <h3 class="text-gray mt-5">Membership Benefits</h3>
                    <ul>
                        <li>Access to DSC network.</li>
                        <li>Internal teaming.</li>
                        <li>Large businesses = access to database of small DSC firms for teaming.</li>
                        <li>Inclusion in a list of “approved vendors” for Government and Large Business. </li>
                        <li>Inherit engines of growth to leverage inherent motivation</li>
                        <li>Marketing/Press around wins.</li>
                        <li>Ability to bring up issues for advocacy by the DSC.</li>
                        <li>GovCon education.</li>
                    </ul>
                    
                    <h3 class="text-gray mt-5">Who can join</h3>
                    <p>We have a phased approach to membership, starting with small-sized or mid-tier businesses. Large firms may be considered starting in 2020.</p>
                    <ul>
                        <li>Small-sized (revenue less than $27.5M for a 3 year running average) or mid-tier (revenue less than $55M for a 3 year running average) businesses who perform Digital Services work. Digital Services work is defined as a service that is delivered via the internet or electronic network, and automated to require little to no human intervention.</li>
                        <li>Small-sized or mid-tier businesses who provide services for the public sector or have a desire to do work in the public sector.</li>
                        <li>Organizations outside of digital services and the public sector that align with DSC values. What alternative services qualify? You tell us! Articulate how your service fits with our mission and outline a pitch of how you would like to get involved.</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="bg-parallax">
            <parallax :speed-factor=".15" sectionClass="parallax-outside-cover" containerClass="parallax-inside">
                <img src="@/assets/bg-rectangle-purple.png" />
            </parallax>
        </div>
        
        <div class="bg-gray">
            <div class="container py-5">
                <div class="row justify-content-md-between">
                    <div class="col-md-6 py-5">
                        <h3 class="text-gray mt-5">How to join</h3>
                        <p>Each existing charter member firm can evaluate and agree to sponsor one prospective new member firm per year. The charter member firm is responsible for mentoring and guiding the sponsored firm in the mission and values of the coalition. Sponsored firms must provide at least two references, and pass a review by the coalition onboarding panel.</p>
                    </div>
                    <div class="col-md-6 py-5">
                        <h3 class="text-gray mt-5">Criteria for Membership</h3>
                        <ul>
                            <li>Proof of Digital Services Work/Work Sample (at least two)</li>
                            <li>Contribution to Thought Leadership (blogging, speaking, meet-ups, etc)</li>
                            <li>Must actively support two initiatives as a member firm that map into the current DSC yearly priorities.</li>
                            <li>One Customer reference. </li>
                            <li>Commitment to attendance at a monthly meeting with all DSC members.</li>
                        </ul>
                    </div>
                </div>
            </div>
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

