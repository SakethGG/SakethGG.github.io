// Edit this list directly — no need to touch any page code.
// status: 'done' | 'in-progress' | 'planned'

export interface Goal {
  goal: string;
  horizon: 'near' | 'long';
  status: 'done' | 'in-progress' | 'planned';
  date: string;
  note?: string;
}

export const goals: Goal[] = [
  {
    goal: 'Finish undergrad, VIT Vellore',
    horizon: 'near',
    status: 'done',
    date: '2026',
  },
  {
    goal: 'Transition from intern to Research Assistant, Stochastic Robotics Lab',
    horizon: 'near',
    status: 'in-progress',
    date: '2026',
    note: 'TODO: confirm exact timeline',
  },
  {
    goal: 'Ship a working contact-implicit MPC controller on real hardware',
    horizon: 'near',
    status: 'in-progress',
    date: '2026',
  },
  {
    goal: 'Publish first first-author paper',
    horizon: 'near',
    status: 'planned',
    date: 'TBD',
  },
  {
    goal: 'PhD in robotics / controls',
    horizon: 'long',
    status: 'planned',
    date: 'TBD',
    note: 'TODO: confirm if this is the plan',
  },
  {
    goal: 'Found an independent research institute for embodied intelligence',
    horizon: 'long',
    status: 'planned',
    date: 'TBD',
  },
];
