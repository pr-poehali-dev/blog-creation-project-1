import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Categories = () => {
  const categories = [
    {
      icon: 'Code',
      name: 'Разработка',
      count: 24,
      color: 'from-primary to-primary/70',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: 'Palette',
      name: 'Дизайн',
      count: 18,
      color: 'from-secondary to-secondary/70',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary'
    },
    {
      icon: 'Zap',
      name: 'Продуктивность',
      count: 15,
      color: 'from-accent to-accent/70',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent'
    },
    {
      icon: 'BookOpen',
      name: 'Обучение',
      count: 12,
      color: 'from-primary/80 to-accent/80',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: 'Sparkles',
      name: 'Инновации',
      count: 9,
      color: 'from-secondary/80 to-primary/80',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary'
    },
    {
      icon: 'TrendingUp',
      name: 'Карьера',
      count: 11,
      color: 'from-accent/80 to-secondary/80',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent'
    }
  ];

  return (
    <section id="categories" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Категории
          </h2>
          <p className="text-xl text-gray-600">
            Изучайте материалы по темам
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="flex items-center justify-between relative">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 ${category.iconBg} rounded-xl group-hover:scale-110 transition-transform`}>
                      <Icon name={category.icon} size={24} className={category.iconColor} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">{category.count} статей</p>
                    </div>
                  </div>
                  
                  <Icon 
                    name="ArrowRight" 
                    size={20} 
                    className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" 
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
