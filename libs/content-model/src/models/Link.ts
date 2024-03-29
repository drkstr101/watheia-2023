import { ObjectModel } from '@stackbit/types';

export const Link: ObjectModel = {
  type: 'object',
  name: 'Link',
  label: 'Link',
  labelField: 'label',
  fieldGroups: [{ name: 'styles', label: 'Styles' }],
  fields: [
    { type: 'string', name: 'label', label: 'Label', default: 'Learn more', required: true },
    { type: 'string', name: 'href', label: 'URL', default: '/', required: true },
    {
      type: 'enum',
      name: 'underline',
      group: 'styles',
      controlType: 'button-group',
      label: 'Underline',
      options: [
        { label: 'Always', value: 'always' },
        { label: 'Hover', value: 'hover' },
        { label: 'None', value: 'none' },
      ],
      default: 'always',
    },
    {
      type: 'enum',
      name: 'color',
      group: 'styles',
      controlType: 'button-group',
      label: 'Color',
      options: [
        { label: 'Neutral', value: 'neutral' },
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Accent', value: 'accent' },
      ],
      default: 'default',
    },
  ],
};
