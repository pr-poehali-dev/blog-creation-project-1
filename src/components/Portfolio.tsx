import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce платформа',
      description: 'Разработка полнофункционального интернет-магазина с интеграцией платежей',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://cdn.poehali.dev/projects/2a3c0a83-1b1b-44f1-808c-9d4ea446b6d8/files/ef4b10a3-a8d8-4fdb-922a-f1cedad10919.jpg'
    },
    {
      title: 'Дизайн-система компании',
      description: 'Создание единой дизайн-системы для корпоративных продуктов',
      tags: ['Figma', 'React', 'Storybook'],
      image: 'https://cdn.poehali.dev/projects/2a3c0a83-1b1b-44f1-808c-9d4ea446b6d8/files/6d3eb642-688e-434e-8158-1f7b5b719c8e.jpg'
    },
    {
      title: 'SaaS аналитика',
      description: 'Платформа для визуализации и анализа бизнес-метрик в реальном времени',
      tags: ['TypeScript', 'D3.js', 'Firebase'],
      image: 'https://cdn.poehali.dev/projects/2a3c0a83-1b1b-44f1-808c-9d4ea446b6d8/files/459577ae-ffe6-4f76-9396-7dbeb7d25196.jpg'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Портфолио
          </h2>
          <p className="text-xl text-gray-600">
            Избранные проекты из моей практики
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white flex items-center gap-2">
                    <Icon name="ExternalLink" size={16} />
                    <span className="text-sm font-medium">Посмотреть проект</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
