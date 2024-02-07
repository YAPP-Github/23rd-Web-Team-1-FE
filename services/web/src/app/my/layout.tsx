import { MyHeader } from '@features/my';
import { Button, Layout, Icon } from '@linker/lds';

function MyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MyHeader />
      <Layout>
        {children}

        <Button.FAB text="일정을 등록해보세요" type="extand">
          <Icon name="plus-white" size={42} />
        </Button.FAB>
      </Layout>
    </>
  );
}

export default MyLayout;
