## Modal

#### 모달 인터페이스

```tsx
<Modal>
  <Modal.Trigger>Open</Modal.Trigger>

  <Modal.Content>
    <div>안녕하세요 Linker입니다.</div>
  </Modal.Content>
</Modal>
```

#### 모달 오픈 상태를 저장해야할 때 useState와 같이 사용해주세요

```tsx
const [isOpen, setIsOpen] = useState(false);

<Modal open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
  <Modal.Trigger>Open</Modal.Trigger>

  <Modal.Content>
    <div>안녕하세요 Linker입니다.</div>
  </Modal.Content>
</Modal>;
```

#### OverayThem 주고 싶지 않을 때

```tsx
<Modal overayTheme="transparent">
  <Modal.Trigger>Open</Modal.Trigger>

  <Modal.Content>
    <div>안녕하세요 Linker입니다.</div>
  </Modal.Content>
</Modal>
```
