# UI Components Usage Examples

This document provides examples of how to use the new UI components created for the Monoatom Labs website.

## PageHeader Component

The PageHeader component creates standardized page headers with breadcrumb navigation.

```jsx
import PageHeader from '../components/ui/PageHeader';

// Basic usage
<PageHeader
  title="Our Products"
  subtitle="Innovative graphene-enhanced materials for industrial applications"
  breadcrumbs={[
    { label: 'Products', path: '/#products' }
  ]}
/>

// Large variant with multiple breadcrumbs
<PageHeader
  title="Graphacrete"
  subtitle="High-performance graphene-reinforced concrete"
  variant="large"
  breadcrumbs={[
    { label: 'Products', path: '/#products' },
    { label: 'Graphacrete' }
  ]}
/>

// Minimal variant
<PageHeader
  title="Contact Us"
  variant="minimal"
/>
```

**Props:**
- `title` (string, required): Page title
- `subtitle` (string, optional): Page subtitle/description
- `breadcrumbs` (array, optional): Array of breadcrumb objects with `label` and optional `path`
- `variant` (string, optional): 'default', 'large', or 'minimal'
- `className` (string, optional): Additional CSS classes

---

## CallToAction Component

The CallToAction component creates CTA sections with customizable buttons and layouts.

```jsx
import CallToAction from '../components/ui/CallToAction';
import { Hexagon } from 'lucide-react';

// Default centered layout
<CallToAction
  title="Ready to get started?"
  description="Contact us today to learn more about our graphene solutions"
  primaryButton={{
    text: 'Contact Us',
    link: '/#contact'
  }}
  secondaryButton={{
    text: 'View Products',
    link: '/#products'
  }}
  theme="dark"
/>

// Split layout with icon
<CallToAction
  title="Partner with us"
  description="Explore collaboration opportunities"
  variant="split"
  icon={Hexagon}
  primaryButton={{
    text: 'Learn More',
    link: '/#partnership'
  }}
  theme="dark"
/>

// Compact variant
<CallToAction
  title="Download our company profile"
  variant="compact"
  primaryButton={{
    text: 'Download PDF',
    onClick: () => window.open('/company-profile.pdf')
  }}
  theme="light"
/>
```

**Props:**
- `title` (string, required): CTA heading
- `description` (string, optional): CTA description
- `primaryButton` (object, optional): Object with `text`, `link` or `onClick`, and optional `icon`
- `secondaryButton` (object, optional): Same as primaryButton
- `variant` (string, optional): 'default', 'compact', or 'split'
- `theme` (string, optional): 'dark' or 'light'
- `icon` (component, optional): Lucide icon component
- `className` (string, optional): Additional CSS classes

---

## Card Component

The Card component is a flexible container for content with various styling options.

```jsx
import Card from '../components/ui/Card';
import { Package } from 'lucide-react';

// Basic card with header and content
<Card
  header="Product Name"
  variant="default"
  theme="dark"
>
  <p className="text-neutral-400">Product description goes here</p>
</Card>

// Card with icon and footer
<Card
  icon={Package}
  header="Feature Title"
  footer={<button>Learn More</button>}
  variant="elevated"
  hoverable
>
  <p className="text-neutral-400">Feature description</p>
</Card>

// Clickable card with link
<Card
  header="View Product"
  link="/#products/graphacrete"
  hoverable
  clickable
>
  <p className="text-neutral-400">Click to view details</p>
</Card>

// Using Card subcomponents for more control
<Card variant="bordered" theme="dark">
  <Card.Header>
    <Card.Title>Custom Title</Card.Title>
    <Card.Description>Subtitle text</Card.Description>
  </Card.Header>
  <Card.Body>
    <p className="text-neutral-400">Main content</p>
  </Card.Body>
  <Card.Footer>
    <button>Action</button>
  </Card.Footer>
</Card>
```

**Props:**
- `header` (string or component, optional): Card header content
- `footer` (component, optional): Card footer content
- `icon` (component, optional): Lucide icon component
- `variant` (string, optional): 'default', 'bordered', 'elevated', or 'flat'
- `theme` (string, optional): 'dark' or 'light'
- `hoverable` (boolean, optional): Enable hover effects
- `clickable` (boolean, optional): Enable click cursor
- `link` (string, optional): React Router link path
- `onClick` (function, optional): Click handler
- `className` (string, optional): Additional CSS classes

**Subcomponents:**
- `Card.Header`: Header section wrapper
- `Card.Body`: Body section wrapper
- `Card.Footer`: Footer section wrapper
- `Card.Title`: Styled title component
- `Card.Description`: Styled description component

---

## Tabs Component

The Tabs component creates tabbed interfaces with multiple variants.

```jsx
import Tabs from '../components/ui/Tabs';
import { Package, Settings, Info } from 'lucide-react';

// Basic tabs
<Tabs
  tabs={[
    {
      label: 'Overview',
      content: <div>Overview content here</div>
    },
    {
      label: 'Specifications',
      content: <div>Specifications content here</div>
    },
    {
      label: 'Applications',
      content: <div>Applications content here</div>
    }
  ]}
  defaultTab={0}
  theme="dark"
/>

// Tabs with icons
<Tabs
  tabs={[
    {
      label: 'Products',
      icon: Package,
      content: <div>Products content</div>
    },
    {
      label: 'Settings',
      icon: Settings,
      content: <div>Settings content</div>
    },
    {
      label: 'About',
      icon: Info,
      content: <div>About content</div>
    }
  ]}
  variant="pills"
  theme="dark"
/>

// Underline variant
<Tabs
  tabs={[
    { label: 'Tab 1', content: <div>Content 1</div> },
    { label: 'Tab 2', content: <div>Content 2</div> }
  ]}
  variant="underline"
  theme="light"
/>

// Vertical orientation
<Tabs
  tabs={[
    { label: 'Section 1', content: <div>Content 1</div> },
    { label: 'Section 2', content: <div>Content 2</div> }
  ]}
  orientation="vertical"
  theme="dark"
/>

// Controlled tabs (for advanced use cases)
import { useState } from 'react';

function MyComponent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs.Controlled
      tabs={[
        { label: 'Tab 1', content: <div>Content 1</div> },
        { label: 'Tab 2', content: <div>Content 2</div> }
      ]}
      activeTab={activeTab}
      onChange={setActiveTab}
      theme="dark"
    />
  );
}
```

**Props:**
- `tabs` (array, required): Array of tab objects with `label`, `content`, and optional `icon`
- `defaultTab` (number, optional): Index of default active tab (uncontrolled mode)
- `onChange` (function, optional): Callback when tab changes
- `variant` (string, optional): 'default', 'pills', or 'underline'
- `theme` (string, optional): 'dark' or 'light'
- `orientation` (string, optional): 'horizontal' or 'vertical'
- `className` (string, optional): Additional CSS classes

**Controlled variant:**
Use `Tabs.Controlled` with `activeTab` and `onChange` props for controlled state management.

---

## Navigation Components

### Navbar

The updated Navbar includes:
- Dropdown menus for Products, About, Technology, and Industries
- Hash-based routing using React Router's Link component
- Mobile responsive menu with collapsible dropdowns
- Active link highlighting

### Footer

The updated Footer includes:
- Complete sitemap structure with all sections
- Quick links organized by category (Company, Products, Technology, Industries, Resources)
- Contact information
- Hash-based routing for all links

Both components are automatically included in the MainLayout and require no additional configuration.

---

## Design System Notes

All components use:
- **Tailwind CSS** for styling
- **Dark theme** as default (neutral-950 background)
- **Consistent spacing** (padding in increments of 4px)
- **Smooth transitions** (duration-300)
- **Lucide React icons** for iconography
- **React Router Link** for navigation

Color palette:
- Background: `bg-neutral-950` (dark) or `bg-white` (light)
- Text: `text-white` or `text-neutral-900`
- Borders: `border-neutral-800` (dark) or `border-neutral-200` (light)
- Muted text: `text-neutral-400` (dark) or `text-neutral-600` (light)

---

## Example Page Implementation

Here's a complete example of using these components together:

```jsx
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Tabs from '../components/ui/Tabs';
import CallToAction from '../components/ui/CallToAction';
import { Package, Zap, Shield } from 'lucide-react';

const ProductPage = () => {
  return (
    <div className="bg-neutral-950">
      {/* Page Header */}
      <PageHeader
        title="Graphacrete"
        subtitle="High-performance graphene-reinforced concrete"
        breadcrumbs={[
          { label: 'Products', path: '/#products' },
          { label: 'Graphacrete' }
        ]}
      />

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card icon={Package} header="High Strength" hoverable>
              <p className="text-neutral-400">30% increase in compressive strength</p>
            </Card>
            <Card icon={Zap} header="Fast Setting" hoverable>
              <p className="text-neutral-400">Reduced curing time by 40%</p>
            </Card>
            <Card icon={Shield} header="Durability" hoverable>
              <p className="text-neutral-400">Enhanced resistance to weathering</p>
            </Card>
          </div>

          {/* Tabbed Content */}
          <Tabs
            tabs={[
              {
                label: 'Overview',
                content: <div className="text-neutral-400">Product overview content</div>
              },
              {
                label: 'Technical Specs',
                content: <div className="text-neutral-400">Technical specifications</div>
              },
              {
                label: 'Applications',
                content: <div className="text-neutral-400">Use cases and applications</div>
              }
            ]}
            variant="underline"
          />
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Interested in Graphacrete?"
        description="Contact our team to discuss your project requirements"
        primaryButton={{ text: 'Get in Touch', link: '/#contact' }}
        secondaryButton={{ text: 'Download Datasheet', onClick: () => {} }}
        variant="split"
      />
    </div>
  );
};

export default ProductPage;
```

---

For more examples and component variations, refer to the individual component source files in `src/components/ui/`.
