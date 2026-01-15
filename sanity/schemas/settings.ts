import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Настройки',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Название сайта',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Описание сайта',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Логотип',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'currency',
      title: 'Валюта',
      type: 'string',
      initialValue: '₽',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Телефон',
      type: 'string',
    }),
  ],
})
