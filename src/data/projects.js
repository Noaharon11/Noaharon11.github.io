export const projects = [
  {
    title: 'Per-client error anomaly model',
    where: 'Nuvei, self-initiated',
    tag: 'Running every 10 minutes',
    featured: true,
    problem:
      'Error spikes for a single client were easy to miss in global dashboards and were found by manual checks, often late.',
    approach:
      'For every client, the model builds an expected error level from the same hour of the day over the previous one to three weeks, then compares the live rate against it.',
    result:
      'Significant deviations trigger an automatic email alert, replacing manual checks with an early-warning system.',
    stack: ['Cortex XSOAR', 'REST APIs', 'SQL'],
  },
  {
    title: 'Error-filtering model',
    where: 'Nuvei',
    problem: 'Noisy, repeating errors buried the ones that actually needed attention.',
    approach: 'Rules that separate known noise from real signals before anything reaches the team.',
    result: 'Fewer false positives and less time spent investigating issues that were never issues.',
    stack: ['Cortex XSOAR', 'Dynatrace', 'Splunk'],
  },
  {
    title: 'Boarding, a team learning platform',
    where: 'Product',
    problem:
      'Onboarding new teammates lived in scattered docs, with no way for managers to see who learned what.',
    approach:
      'Training tracks, a knowledge base, quizzes, manager assignments, reminders and Confluence sync, with role-based access.',
    result: 'Progress and engagement are measurable, so managers can spot who needs help.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'CommuneCart, community commerce',
    where: 'Product',
    problem: 'Community orders needed efficient delivery and simple order management.',
    approach: 'Integrated NVIDIA cuOpt to optimize delivery routes, with workflows for orders and tasks.',
    stack: ['React', 'TypeScript', 'Node.js', 'NVIDIA cuOpt'],
  },
]
