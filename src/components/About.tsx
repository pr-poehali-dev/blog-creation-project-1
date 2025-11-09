import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const skills = [
    { icon: 'Code', title: 'Веб-разработка', description: 'React, TypeScript, Node.js' },
    { icon: 'Palette', title: 'UI/UX Дизайн', description: 'Figma, Adobe XD, Sketch' },
    { icon: 'Lightbulb', title: 'Креативность', description: 'Инновационные решения' },
    { icon: 'Users', title: 'Коммуникация', description: 'Работа в команде' }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-3xl" />
            <img 
              src="https://cdn.poehali.dev/projects/2a3c0a83-1b1b-44f1-808c-9d4ea446b6d8/files/459577ae-ffe6-4f76-9396-7dbeb7d25196.jpg"
              alt="About me"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Обо мне
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Привет! Я креативный разработчик и дизайнер с 5+ лет опыта создания 
              современных веб-приложений. Люблю делиться знаниями и вдохновлять других 
              на создание крутых проектов.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              В этом блоге я рассказываю о веб-технологиях, дизайне, продуктивности 
              и делюсь лайфхаками из своей практики.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {skills.map((skill, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon name={skill.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{skill.title}</h4>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
