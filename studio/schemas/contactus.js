export default {
  name: 'contactus',
  type: 'document',
  title: 'Contact Us',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'client',
      type: 'string',
      title: 'Client Portal',
    },
    {
      name: 'keynote',
      type: 'file',
      title: 'Onboarding Keynote',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'client'
    }
  }

};
