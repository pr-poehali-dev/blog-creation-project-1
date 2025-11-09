import ArticleCard from './ArticleCard';

const FeaturedArticles = () => {
  const articles = [
    {
      title: 'Современные тренды веб-дизайна 2024',
      excerpt: 'Разбираем главные тенденции в дизайне веб-интерфейсов: градиенты, анимации и минимализм.',
      category: 'Дизайн',
      date: '15 окт 2024',
      image: 'https://cdn.poehali.dev/projects/2a3c0a83-1b1b-44f1-808c-9d4ea446b6d8/files/6d3eb642-688e-434e-8158-1f7b5b719c8e.jpg',
      readTime: '5 мин',
      tags: ['UI/UX', 'Тренды', 'Веб-дизайн', 'Градиенты']
    },
    {
      title: 'React и TypeScript: лучшие практики',
      excerpt: 'Как правильно структурировать проект на React с TypeScript для максимальной производительности.',
      category: 'Разработка',
      date: '12 окт 2024',
      image: 'https://cdn.poehali.dev/projects/2a3c0a83-1b1b-44f1-808c-9d4ea446b6d8/files/ef4b10a3-a8d8-4fdb-922a-f1cedad10919.jpg',
      readTime: '8 мин',
      tags: ['React', 'TypeScript', 'Frontend', 'Best Practices']
    },
    {
      title: 'Путь к продуктивности: мой опыт',
      excerpt: 'Делюсь инструментами и методиками, которые помогли мне увеличить продуктивность в 3 раза.',
      category: 'Продуктивность',
      date: '8 окт 2024',
      image: 'https://cdn.poehali.dev/projects/2a3c0a83-1b1b-44f1-808c-9d4ea446b6d8/files/459577ae-ffe6-4f76-9396-7dbeb7d25196.jpg',
      readTime: '6 мин',
      tags: ['Продуктивность', 'Инструменты', 'Лайфхаки', 'Тайм-менеджмент']
    }
  ];

  return (
    <section id="articles" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Популярные статьи
          </h2>
          <p className="text-xl text-gray-600">
            Самые интересные материалы из моего блога
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;