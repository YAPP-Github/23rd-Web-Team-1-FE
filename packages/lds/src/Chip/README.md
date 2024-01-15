## Chip

### Chip 하나만 사용할 경우

```tsx
import { Chip } from '@linker/lds';

<Chip>Text</Chip>;
```

<br />

### Chip을 그룹으로 사용할 경우

```tsx
import { Chip } from '@linker/lds';
import { useState } from 'react';

const Component = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  return (
    <Chip.Group>
      {items.map((item) => {
        return (
          <Chip key={item} selected={selectedItem === item} onClick={() => setSelectedItem(item)}>
            Text
          </Chip>
        );
      })}
    </Chip.Group>
  );
};
```
