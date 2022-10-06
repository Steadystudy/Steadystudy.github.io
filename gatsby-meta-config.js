module.exports = {
  title: `Steadystudy.com`,
  description: `꾸준하게 학습하는 사람의 기술블로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://steadystudy.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `민상기`,
    bio: {
      role: `프론트엔드 개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'profile.jpeg', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/Steadystudy`,
      linkedIn: ``,
      email: `sgmin206@naver.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.03 ~ 08',
        activity: '프로그래머스 데브코스 프론트엔드과정 2기',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '따봉',
        description:
          '사용자 간 칭찬 포스트를 공유하는 SNS 애플리케이션',
        techStack: ['ReactJS','JavaScript','Git','Storybook'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: 'https://github.com/prgrms-fe-devcourse/FEDC2_TTaBong_Dali',
          demo: 'https://ttabong.netlify.app/',
        },
      },
      {
        title: '링북',
        description:
          '북마크 공유 소셜 서비스',
        techStack: ['Next.js', 'Typescript','Git','Axios'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: 'https://github.com/prgrms-web-devcourse/Team-03-LinkBook-FE',
          demo: 'https://linkbook.tk/',
        },
      },
    ],
  },
};
