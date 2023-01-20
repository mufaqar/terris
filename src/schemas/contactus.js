export default {
  name: 'contact',
  title: 'Contact Page',
  type: 'document',
  fields: [
    {
      name: 'clientportal',
      title: 'Client Portal',
      type: 'string',
    },
    {
      name: 'onboard',
      title: 'Onboarding Keynote',
      type: 'file',
    },
  ],
  preview: {
    select: {
      title: 'Page Elements',
    },
    prepare: (selection) => {
      return {
        ...selection,
      };
    },
  },
};
