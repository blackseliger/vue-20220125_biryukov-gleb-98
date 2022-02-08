import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    'agenda-item': {
      type: Object,
    },
  },

  computed: {
    filterIcon() {
      let filter;
      for (let type in agendaItemIcons) {
        if (type.includes(this.agendaItem.type)) filter = agendaItemIcons[type];
      }
      return filter;
    },

    defaultTitle() {
      let filter;
      for (let type in agendaItemDefaultTitles) {
        if (type.includes(this.agendaItem.type)) filter = agendaItemDefaultTitles[type];
      }
      return filter;
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="\`/assets/icons/icon-\${filterIcon}.svg\`" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title" v-if="agendaItem.title" >{{ agendaItem.title }}</h3>
        <h3 class="agenda-item__title" v-else>{{ defaultTitle }}</h3>
        <p class="agenda-item__talk" v-if="agendaItem.type === 'talk'">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
