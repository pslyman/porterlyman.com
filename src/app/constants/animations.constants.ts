import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

export const staggerAnimation = trigger('stagger', [
  transition('* => *', [
    // this hides everything right away
    query(':enter', style({ opacity: 0 }), { optional: true }),

    // starts to animate things with a stagger in between
    query(':enter', stagger(50, [animate(250, style({ opacity: 1 }))]), {
      delay: 0,
      optional: true,
    }),
  ]),
]);
