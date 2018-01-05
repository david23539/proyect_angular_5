import {animate, state, trigger, transition, style} from "@angular/animations";

export const fadeLateral =
    trigger('fadeLateral', [
        /*state('*', style({
          'opacity': 1
        })),*/
        transition(':enter', [
            style({
                'opacity':0,
                'transform': 'translateX(-100%)'
            }),
            animate('300ms ease-in', style({
                'opacity': 1,
                'transform': 'translateY(0%)'
            }))
        ])

    ]);