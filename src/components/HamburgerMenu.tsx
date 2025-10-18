import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Menu } from 'lucide-react';

interface HamburgerMenuProps {
  onCategorySelect: (categoryId: string, path: string[]) => void;
}

const menuItems = [
  {
    title: 'KURTIS',
    subItems: [
      'Daily wear',
      'Ethnic',
      'College Friendly',
      'Corporate Friendly',
    ],
  },
  {
    title: 'LEHENGAS',
    subItems: ['Bridals', 'Weddings'],
  },
  {
    title: 'GOWNS',
    subItems: ['Party Wear', 'Evening Gowns'],
  },
  {
    title: 'SAREES',
    subItems: ['Silk', 'Cotton', 'Designer'],
  },
    {
    title: 'DRESSES',
    subItems: ['Casual', 'Formal'],
  },
  {
    title: 'JEWELRY',
    subItems: ['Earrings', 'Necklaces', 'Rings'],
  },
  {
    title: 'ACCESSORIES',
    subItems: ['Bags', 'Belts', 'Scarves'],
  },
];

const toCategoryId = (name: string) => name.toLowerCase().replace(/ /g, '-');

export function HamburgerMenu({ onCategorySelect }: HamburgerMenuProps) {
  const [open, setOpen] = useState(false);

  const handleSubItemClick = (mainCategory: string, subItem: string) => {
    const categoryId = toCategoryId(subItem);
    onCategorySelect(categoryId, [mainCategory, subItem]);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>
        <div className="flex-grow overflow-y-auto">
          <Accordion type="multiple" className="w-full">
            {menuItems.map((item) => (
              <AccordionItem value={item.title} key={item.title}>
                <AccordionTrigger className="px-4">{item.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-2 pl-8">
                    {item.subItems.map((subItem) => (
                      <li key={subItem}>
                        <Button 
                          variant="link" 
                          onClick={() => handleSubItemClick(item.title, subItem)}
                        >
                          {subItem}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}
