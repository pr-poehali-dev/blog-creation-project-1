import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface SearchResult {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
}

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const allArticles: SearchResult[] = [
    {
      title: 'Современные тренды веб-дизайна 2024',
      excerpt: 'Разбираем главные тенденции в дизайне веб-интерфейсов',
      category: 'Дизайн',
      tags: ['UI/UX', 'Тренды', 'Веб-дизайн']
    },
    {
      title: 'React и TypeScript: лучшие практики',
      excerpt: 'Как правильно структурировать проект на React с TypeScript',
      category: 'Разработка',
      tags: ['React', 'TypeScript', 'Frontend']
    },
    {
      title: 'Путь к продуктивности: мой опыт',
      excerpt: 'Делюсь инструментами и методиками продуктивности',
      category: 'Продуктивность',
      tags: ['Продуктивность', 'Инструменты', 'Лайфхаки']
    },
    {
      title: 'Figma для разработчиков',
      excerpt: 'Как использовать Figma эффективно в команде',
      category: 'Дизайн',
      tags: ['Figma', 'Инструменты', 'Командная работа']
    },
    {
      title: 'CSS Grid: полное руководство',
      excerpt: 'Всё о CSS Grid Layout от основ до продвинутых техник',
      category: 'Разработка',
      tags: ['CSS', 'Frontend', 'Верстка']
    }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      const filtered = allArticles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <Button
        variant="outline"
        className="gap-2 text-gray-600"
        onClick={() => setIsOpen(true)}
      >
        <Icon name="Search" size={18} />
        <span className="hidden md:inline">Поиск статей...</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Поиск по блогу</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Введите запрос для поиска..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus
              />
            </div>

            {searchQuery.trim().length > 0 && (
              <div className="space-y-3">
                {searchResults.length > 0 ? (
                  <>
                    <p className="text-sm text-gray-500">
                      Найдено результатов: {searchResults.length}
                    </p>
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h4 className="font-semibold text-lg hover:text-primary transition-colors">
                            {result.title}
                          </h4>
                          <Badge variant="secondary" className="shrink-0">
                            {result.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {result.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {result.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Icon name="SearchX" size={48} className="mx-auto text-gray-300 mb-3" />
                    <p className="text-gray-500">Ничего не найдено</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Попробуйте изменить запрос
                    </p>
                  </div>
                )}
              </div>
            )}

            {searchQuery.trim().length === 0 && (
              <div className="py-8">
                <h5 className="font-semibold mb-3">Популярные теги:</h5>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'UI/UX', 'Figma', 'CSS', 'Продуктивность', 'Frontend', 'Дизайн'].map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                      onClick={() => handleSearch(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchBar;
