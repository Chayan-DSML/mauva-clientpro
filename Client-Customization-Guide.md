# Client Customization Guide

This guide provides instructions on how to customize various aspects of the application, including managing story circles, updating product information, and changing the color scheme.

## Managing Story Circles

The story circles on the home page can be scheduled to appear and disappear on specific dates. This is useful for seasonal promotions or special events.

To manage the story circle dates, open the following file: `src/components/HomePage.tsx`

Inside this file, you will find a constant named `allCategories`. This is an array of objects, where each object represents a story circle.

### Scheduling a Story Circle

To schedule a story circle, add the `startDate` and `endDate` properties to the category object. The date format is `YYYY-MM-DD`.

**Example:**

'''javascript
const allCategories: Category[] = [
    {
        id: 'diwali',
        name: 'Diwali',
        image: 'https://images.unsplash.com/photo-1542544224-45d6f2430062?w=400',
        startDate: '2025-10-10',
        endDate: '2025-10-24',
    },
    // ... other categories
];
'''

In this example, the "Diwali" story circle will only be visible from October 10th, 2025, to October 24th, 2025.

### Always-Visible Story Circles

If you want a story circle to be visible at all times, simply omit the `startDate` and `endDate` properties.

**Example:**

'''javascript
const allCategories: Category[] = [
    { id: 'sarees', name: 'Sarees', image: 'https://images.unsplash.com/photo-1610171337839-f62f33f6a61b?w=400' },
    // ... other categories
];
'''

The "Sarees" story circle in this example will always be displayed.
