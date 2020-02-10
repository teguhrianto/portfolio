<template>
    <section class="experiences" id="experiences">
        <b-container>
            <h3 class="text-center font-weight-bold mb-5">My Experiences</h3>
            <b-row align-h="center">
                <b-col lg="10">
                    <ul class="timeline">
                        <li v-for="experience in experiences" :key="experience.id">
                            <b-row align-h="between">
                                <b-col md="6">
                                    <p class="date small mb-2">
                                        {{experience.date_start}} &mdash; {{experience.date_end}}
                                    </p>
                                </b-col>
                                <b-col md="6">
                                    <div class="description">
                                        <h6 class="font-weight-bold">{{experience.company}} &middot; <span class="text-primary">{{experience.title}}</span></h6>
                                        <p>{{experience.description}}</p>
                                    </div>
                                </b-col>
                            </b-row>
                        </li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    name: 'Experiences',
    data: function() {
        return {
            experiences:[
                {
                    id: '0',
                    date_start: 'Aug 2012',
                    date_end: 'Oct 2014',
                    company: 'CV. Diginiq Asia',
                    title: 'Frontend Developer',
                    description: 'CV. Diginiq Asia is a Digital Agency based in Japan. Some of my tasks are slicing and coverting PSD design to HTML, also customing Wordpress themes.'
                },

                {
                    id: '1',
                    date_start: 'Nov 2014',
                    date_end: 'Mar 2018',
                    company: 'PT. Yukbisnis Indonesia',
                    title: 'Frontend Developer',
                    description: 'PT. Yukbisnis Indonesia (yukbisnis.com) is a company which builds online business ecosystem that provide infrastructures to create online store. Some of my tasks are creating templates and themes for online store, landing page, admin panel and also slicing PSD to HTML.'
                },

                {
                    id: '2',
                    date_start: 'Mar 2018',
                    date_end: 'Present',
                    company: 'PT. Lingkar Kreasi (Circle Creative)',
                    title: 'Project Manager & Lead Frontend Developer',
                    description: 'PT. Lingkar Kreasi is a Digital Agency based in Bandung. Some of my tasks are creating '
                },
            ]
        };
    }
}
</script>
