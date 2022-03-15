<template>
    <section>
        
        <div class="bg-parallax-photo">
            <parallax :speed-factor="0.4" sectionClass="parallax-outside" containerClass="parallax-inside">
                <img src="@/assets/bg-triangle-blue.png" class="float-right" />
            </parallax>
        </div>
        
        <div class="container py-5">
            <div class="row justify-content-md-start">
                <div class="col-md-6 pt-md-5">
                    <h1 class="text-magenta my-md-5">We’re focused on the long game of changing government through digital transformation.</h1>
                </div>
            </div>
            <div class="row justify-content-md-start">
                <div class="col-lg-8 pb-5">
                    <p>There are organizations inside the government (USDS, 18F, Presidential Innovation Fellows) that are already spearheading efforts to improve how government delivers services to the American public. But they need support from commercial tech firms to make sweeping changes to how things are done. Nimble, forward-thinking firms are the ones who can make this a reality.</p>
                    <p>By working together, we can accelerate the government’s ability to implement services that focus on good usability, reliable technology, and accessibility for all—while also benefiting the individuals and firms that are part of the community.</p>
                    <a download :href="`${publicPath}DSCStrategicPlan.pdf`">
                      <div class="date-link bg-gray">
                        <div class="date-box" aria-label="March 12" role="text"><div class="date-box-inner"><span class="date" aria-hidden="true">Mar 12</span></div></div>
                        <div class="link-box"><span class="link">Read our 2022-2025 Strategic Plan (PDF, 2.5 MB, 22 pages)</span></div>
                      </div>
                    </a>
                </div>
            </div>
        </div>
    
        <div class="bg-parallax">
            <parallax :speed-factor="0.8" sectionClass="parallax-outside" containerClass="parallax-inside">
                <img src="@/assets/bg-triangle-lightblue.png" class="float-right"/>
            </parallax>
        </div>
        
        <div class="bg-gray">
            <div class="container py-5">
                <div class="row">
                    <div class="col-md-8">
                        <h3 class="text-gray mt-5">As thought leaders, advisors, and trusted partners in government digital services, we're driven by</h3>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <h6 class="text-blue mt-5 mb-1">Community</h6>
                        <p>Establish a collaborative community of innovative vendors to influence digital services in the government</p> 

                        <h6 class="text-blue mt-5 mb-1">Education</h6>
                        <p>Educate the civic tech ecosystem, including government agencies, other vendors, and users, on best practices in digital services</p>	
                    </div>
                    <div class="col-md-4">
                        <h6 class="text-blue mt-5 mb-1">Advocacy</h6>
                        <p>Promote policies that remove barriers to innovation in government while increasing adoption of best practices, methodologies, and processes, such as human-centered design and agile delivery</p>

                        <h6 class="text-blue mt-5 mb-1">Partnership</h6>
                        <p>Cultivate enduring relationships within our community of vendors and government partners to maintain long-term success in digital service delivery</p>
                    </div>
                    <div class="col-md-4">
                        <h6 class="text-blue mt-5 mb-1">Impact</h6>
                        <p>Make a meaningful difference in the daily lives of users through improved interactions with government, prioritizing equitable delivery to those who have traditionally been underserved</p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>



<script>
import Parallax from "vue-parallaxy";

export default {
  components: {
    Parallax,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style>
.date-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 60ch;
}

.date-link:hover .link {
  text-decoration: underline;
}

.date-box {
  text-align: center;
  word-break: break-word;
  line-height: 1.1em;
  background-color: #dedede;
}

.date-box-inner {
  width: 4ch;
  margin: 4px 8px;
}

.date {
  font-weight: 700;
  color: #444444;
}

.link-box {
  margin-left: 1rem;
}

.link {
  color: #444444;
}
</style>
