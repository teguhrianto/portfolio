<template>
    <section class="skills bg-gray" id="skills">
        <b-container>
            <h3 class="text-center font-weight-bold mb-5">My Skills &amp; <span class="text-primary">Services</span></h3>
            <b-row align-h="center">
                <b-col lg="3" md="4" sm="6" v-for="skill in skills" :key="skill.id" data-aos="fade-up" data-aos-duration="300">
                    <b-card class="item-skill">
                        <div class="icon">
                            <img :src="skill.icon" alt="">
                        </div>
                        <h5 class="mb-0">
                            {{skill.title}}
                        </h5>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    name: 'Skills',
    data: function() {
        return {
            skills:[
                {
                    id: '0',
                    title:'HTML5', 
                    icon: require('./../assets/img/skills/html5.png'), 
                    text:'',
                },
                {
                    id: '1',
                    title:'CSS3', 
                    icon: require('./../assets/img/skills/css3.png'), 
                    text:'',
                },
                {
                    id: '2',
                    title:'Javascript', 
                    icon: require('./../assets/img/skills/js.png'), 
                    text:'',
                },
                {
                    id: '3',
                    title:'SASS/SCSS', 
                    icon: require('./../assets/img/skills/sass.png'), 
                    text:'',
                },
                {
                    id: '4',
                    title:'Bootstrap', 
                    icon: require('./../assets/img/skills/bootstrap.png'), 
                    text:'',
                },
                {
                    id: '5',
                    title:'jQuery', 
                    icon: require('./../assets/img/skills/jquery.png'), 
                    text:'',
                },
                {
                    id: '6',
                    title:'VueJs', 
                    icon: require('./../assets/img/skills/vue.png'), 
                    text:'',
                },
                {
                    id: '7',
                    title:'Photoshop', 
                    icon: require('./../assets/img/skills/psd.png'), 
                    text:'',
                },
                {
                    id: '8',
                    title:'Illustrator', 
                    icon: require('./../assets/img/skills/ai.png'), 
                    text:'',
                },
                {
                    id: '9',
                    title:'PSD to HTML', 
                    icon: require('./../assets/img/skills/convert.png'), 
                    text:'',
                },
                {
                    id: '10',
                    title:'Clean Code', 
                    icon: require('./../assets/img/skills/clean-code.png'), 
                    text:'',
                },
                {
                    id: '11',
                    title:'Responsive Layout', 
                    icon: require('./../assets/img/skills/responsive.png'), 
                    text:'',
                },
                {
                    id: '12',
                    title:'Cross Browser', 
                    icon: require('./../assets/img/skills/cross-browser.png'), 
                    text:'',
                },
                {
                    id: '13',
                    title:'Open Source', 
                    icon: require('./../assets/img/skills/open-source.png'), 
                    text:'',
                },
            ]
        };
    }
}
</script>
