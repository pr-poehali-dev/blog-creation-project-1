import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface TagFilterProps {
  onTagSelect?: (tag: string) => void;
}

const TagFilter = ({ onTagSelect }: TagFilterProps) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = [
    { name: 'Все', count: 45, color: 'default' },
    { name: 'React', count: 12, color: 'primary' },
    { name: 'TypeScript', count: 10, color: 'secondary' },
    { name: 'UI/UX', count: 15, color: 'accent' },
    { name: 'Figma', count: 8, color: 'primary' },
    { name: 'CSS', count: 9, color: 'secondary' },
    { name: 'Продуктивность', count: 11, color: 'accent' },
    { name: 'Frontend', count: 14, color: 'primary' },
    { name: 'Дизайн', count: 13, color: 'secondary' },
    { name: 'Тренды', count: 7, color: 'accent' },
    { name: 'Инструменты', count: 10, color: 'primary' },
    { name: 'Best Practices', count: 6, color: 'secondary' }
  ];

  const handleTagClick = (tagName: string) => {
    const newTag = tagName === 'Все' ? null : tagName;
    setSelectedTag(newTag);
    if (onTagSelect) {
      onTagSelect(newTag || '');
    }
  };

  return (
    <div className="py-12 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-6">
          <Icon name="Tags" size={24} className="text-primary" />
          <h3 className="text-2xl font-bold">Фильтр по тегам</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {allTags.map((tag) => (
            <Badge
              key={tag.name}
              variant={selectedTag === tag.name || (selectedTag === null && tag.name === 'Все') ? 'default' : 'outline'}
              className={`
                cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-200
                ${selectedTag === tag.name || (selectedTag === null && tag.name === 'Все')
                  ? 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 scale-105'
                  : 'hover:bg-gray-100 hover:scale-105'
                }
              `}
              onClick={() => handleTagClick(tag.name)}
            >
              <span>{tag.name}</span>
              <span className="ml-2 opacity-70">({tag.count})</span>
            </Badge>
          ))}
        </div>

        {selectedTag && (
          <div className="mt-6 flex items-center gap-3 animate-fade-in">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Icon name="Filter" size={16} />
              <span>Фильтр активен:</span>
              <Badge variant="default" className="bg-gradient-to-r from-primary to-secondary">
                {selectedTag}
              </Badge>
            </div>
            <button
              onClick={() => handleTagClick('Все')}
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              <Icon name="X" size={14} />
              Сбросить
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagFilter;
