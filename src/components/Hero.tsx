import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              ✨ Добро пожаловать в мой блог
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Создаю
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {' '}контент{' '}
              </span>
              который вдохновляет
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Делюсь опытом в веб-разработке, дизайне и креативных технологиях. 
              Присоединяйтесь к сообществу единомышленников!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                Читать статьи
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Обо мне
                <Icon name="User" size={20} className="ml-2" />
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-secondary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Icon name="Github" size={24} />
              </a>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <img 
              src="https://cdn.poehali.dev/projects/2a3c0a83-1b1b-44f1-808c-9d4ea446b6d8/files/ef4b10a3-a8d8-4fdb-922a-f1cedad10919.jpg"
              alt="Hero"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
