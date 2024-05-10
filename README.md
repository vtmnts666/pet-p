This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Общие понятия

- Для ui компонеентов используем shadcn ui, если какого то компоненета там нет, то пишем свой в папке components/ui
- В разработке испоьзуем taliwindcss, стараемся избегать указание фикс значений в квадратных скобках , например (mx-[3px]), если такого значения нет, то можно создать в конфиге новое, либо взять ближайшее
- Для компоненета `<Image />` стараемся вседа точно указывать размеры, либо описывать пропс sizes, чтобы картинки подгонялись под нужные размеры, особенно это важное при использовании fill пропса
- Работаем строго в своей ветке, в main ничего напрямую не пушить
- Стараемся не делать большие компоненты и разбивать их на более мелкие + хранить все мелкие компоненеты в разных файлах (shadcn исключение), например:

```bash
  ├── hero
  │ ├── hero-video.tsx
  │ ├── hero-title.tsx
  │ └── hero-description.tsx
```

## Styleguide

- Все папки и компоненты называются через kebab-case 'my-folder, my-component'

### components

- **shared**: Содержит глобальные блочные компоненты, которые могут использоваться на любой - странице, такие как блоки "Контакты" или "Отзывы".
- **ui**: Содержит компоненты Shadcn, устанавливаемые через Shadcn CLI. Модификации и - добавления в эту папку разрешены.
- **layout**: Содержит компоненты макета, которые повторяются на страницах, влияя на общий - макет страницы (например, шапка, навигация, подвал, боковая панель).
- **hooks**: Содержит пользовательские хуки React.
- **lib**: Содержит вспомогательные функции, различные конфигурации, схемы и т.д.
- **providers**: Содержит провайдеры, все объединены в компоненте providers.tsx.

### api

- папка services содержит в себе сервисы апи, внутри которой всегда есть файл _.serivce.ts и _.helper.ts, в первом файле описываются различные обращения к апи, в втором типы для этих обращаений
- client создается на корневом уровне этой папки, а так же базовые типы описываются там же в другом файле
- **generated** содержит в себе сгенерированный апи с помощью **kubb**
