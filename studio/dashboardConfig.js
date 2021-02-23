export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6034ca96762750f27b199e55',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1qe3cu64',
                  apiId: '043789d9-dfca-45fd-9c1b-9db873fed7f8'
                },
                {
                  buildHookId: '6034ca96ece609c9e14b2241',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fwjo9676',
                  apiId: '100a81ab-24ab-4e9a-998a-ed5d0bd4b978'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GeraudApril/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fwjo9676.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
