export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  fields: [
    {
      title: 'Categories',
      name: 'categories',
      type: 'string',
      options: {
        list: [
          {
            title: 'Senior Project Management',
            value: 'Senior Project Management',
          },
          { title: 'Junior Site Management', value: 'Junior Site Management' },
          { title: 'Carpentry', value: 'Carpentry' },
          { title: 'Office', value: 'Office' },
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
    {
      title: 'Feature Image',
      name: 'featureimage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'detail',
      title: 'Deail',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
};
