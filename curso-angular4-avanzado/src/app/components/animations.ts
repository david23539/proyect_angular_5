import {animate, state, trigger, transition, style} from "@angular/animations";

export const fundido =
  trigger('fadeIn', [
    /*state('*', style({
      'opacity': 1
    })),*/
    transition(':enter', [
      style({
        'opacity':0,
        'transform': 'rotate(0deg)'//translateY(-15%),


      }),
      animate('500ms linear', style({
        'opacity': 1,
        'transform': ' rotate(360deg)'//translateY(0%),
      }))
    ])/*,
      transition(':leave',[

        animate('500ms linear', style({
          'opacity': 0
        }))
      ])*/

  ])

