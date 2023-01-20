import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemas'

export default defineConfig({
  name: 'default',
  title: 'Terris & Company',

  projectId: 'wd0p9tvc',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
