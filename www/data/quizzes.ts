export default [
  {
    title: 'Ionic 2 Quizz',
    icon: 'ionic',
    topicId: 0,
    items: [{
      question: 'What is the color of the ionic logo ?',
      choices: [
        'green',
        'red',
        'blue',
        'yellow'
      ],
      answer: 'blue'
    },
    {
      question: 'On which framework does Ionic 2 relies ?',
      choices: [
        'React',
        'Cocoa',
        'React Native',
        'Angular 2'
      ],
      answer: 'Angular 2'
    }]
  },
  {
    title: 'Angular 2 Quizz',
    icon: 'angular',
    topicId: 1,
    items: [{
      question: 'What is the color of the angular logo ?',
      choices: [
        'green',
        'red',
        'blue',
        'yellow'
      ],
      answer: 'red'
    },
    {
      question: 'Who is the creator and maintainor of Angular 2 ?',
      choices: [
        'Facebook',
        'Apple',
        'IBM',
        'Google'
      ],
      answer: 'Google'
    }]
  },
  {
    title: 'Git Quizz',
    icon: 'git',
    topicId: 2,
    items: [{
      question: 'What does the "git reset HEAD" command do ?',
      choices: [
        'Reset the current git repo',
        'Remove added files from the add stack',
        'Create branch named HEAD',
        'Reset my git configuration to default settings'
      ],
      answer: 'Remove added files from the add stack'
    },
    {
      question: 'What command do I use to switch to the feature1 branch ?',
      choices: [
        'git switch feature1',
        'git go feature1',
        'git checkout feature1',
        'git branch feature1'
      ],
      answer: 'git checkout feature1'
    }]
  },
  {
    title: 'CSS 3 Quizz',
    icon: 'css',
    topicId: 3,
    items: [{
      question: 'What syntax do I use to change the style of a class ?',
      choices: [
        '#myClass',
        '.myClass',
        '~myClass',
        '{myClass}'
      ],
      answer: '.myClass'
    },
    {
      question: 'Which of the following is a CSS 3 Framework ?',
      choices: [
        'jQuery',
        'Symfony',
        'Sass',
        'Bootstrap'
      ],
      answer: 'Bootstrap'
    }]
  },
  {
    title: 'CircleCI Quizz',
    icon: 'circleci',
    topicId: 4,
    items: [{
      question: 'What type of file do I need to configure my project to use CircleCI ?',
      choices: [
        '.yml',
        '.xml',
        '.json',
        '.txt'
      ],
      answer: '.yml'
    },
    {
      question: 'Another question on CircleCI ?',
      choices: [
        'Yes',
        'No',
        'Maybe',
        '???'
      ],
      answer: 'Yes'
    }]
  },
  {
    title: 'TypeScript Quizz',
    icon: 'typescript',
    topicId: 5,
    items: [{
      question: 'What is the main difference between typescript and javascript ?',
      choices: [
        'Typescript handles multiple inheritence',
        'Javascript is like java, typescript like C++',
        'Typescript offers class declaration',
        'it is a typed language'
      ],
      answer: 'it is a typed language'
    },
    {
      question: 'Another question on Typescript ?',
      choices: [
        'Yes',
        'No',
        'Maybe',
        '???'
      ],
      answer: 'No'
    }]
  }
]
