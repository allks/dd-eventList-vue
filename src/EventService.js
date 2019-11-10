import Vue from 'vue';
import _ from 'lodash';

export default new Vue({
  data: {
    events: [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description: 'Tristique nulla aliquet enim tortor at auctor. Amet consectetur adipiscing elit ut aliquam purus sit amet.',
        data: '12.12.2321',
        comments: 'Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Euismod nisi porta lorem mollis aliquam ut porttitor. Volutpat sed cras ornare arcu dui vivamus arcu. Sapien eget mi proin sed libero enim sed.',
      },
      {
        id: 2,
        title: 'Mollis nunc sed id semper risus in hendrerit gravida rutrum.',
        description: 'Nunc sed id semper risus. At elementum eu facilisis sed odio morbi quis commodo odio. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Quam quisque id diam vel quam elementum.',
        data: '10.11.1999',
        comments: 'Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Ac tortor dignissim convallis aenean et tortor at risus viverra. Lobortis mattis aliquam faucibus purus in massa tempor nec. ',
      },
      {
        id: 3,
        title: 'Turpis egestas maecenas pharetra convallis posuere.',
        description: 'Diam sit amet nisl suscipit. Amet facilisis magna etiam tempor. Velit laoreet id donec ultrices tincidunt.',
        data: '06.09.1924',
        comments: 'Facilisis mauris sit amet massa vitae tortor. Consectetur adipiscing elit pellentesque habitant morbi tristique. Arcu ac tortor dignissim convallis aenean.',
      },
      {
        id: 4,
        title: 'Viverra suspendisse potenti nullam ac tortor vitae.',
        description: 'Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.',
        data: '04.10.1923',
        comments: 'Volutpat est velit egestas dui id ornare arcu odio ut. Neque volutpat ac tincidunt vitae semper quis lectus. Egestas quis ipsum suspendisse ultrices gravida dictum fusce.',
      },
    ],
  },
  methods: {
    viewDetails(id) {
      const eventToView = _.find(this.events, { id });
      this.$emit('viewDetails', eventToView);
    },
    addEvent(title, description, data) {
      const id = this.events[this.events.length - 1].id + 1;
      this.events.push({
        id,
        title,
        description,
        data,
      });
    },
  },
  // created() {
  //   this.$http.get('http://5db050f78087400014d37dc5.mockapi.io/api/users/8/events')
  //     .then((response) => {
  //       this.events = response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
});
