'use client';

import { AddFriendBottomSheet } from '@features/contact/components';
import { AddScheduleBottomSheet } from '@features/schedule/components';
import { BottomSheet, Button, IconButton } from '@linker/lds';
import type { FABType } from '@linker/lds/src/Button/FAB';
import { useEffect, useState } from 'react';

import { linkButton } from './FloatingButton.css';

type ContentType = 'calendar' | 'user';

const FloatingButton = () => {
  const [fabType, setFabType] = useState<FABType>('extand');
  const [contentType, setContentType] = useState<ContentType>('calendar');
  const [isOpenFAB, setIsOpenFAB] = useState(false);

  useEffect(() => {
    if (fabType === 'default') {
      return;
    }

    const timer = setTimeout(() => {
      setFabType('default');
    }, 10_000);

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const BottomSheetContext = {
    calendar: <AddScheduleBottomSheet />,
    user: <AddFriendBottomSheet />,
  };

  return (
    <BottomSheet>
      <BottomSheet.Trigger disabled={fabType === 'default'}>
        <Button.FAB
          text="일정을 등록해보세요"
          type="extand"
          open={isOpenFAB}
          onOpenChange={() => {
            setIsOpenFAB((prev) => !prev);
          }}
        >
          <BottomSheet.Trigger>
            <IconButton
              name="calendar"
              className={linkButton}
              onClick={() => {
                setContentType('calendar');
                setIsOpenFAB((prev) => !prev);
              }}
            />
          </BottomSheet.Trigger>
          <BottomSheet.Trigger>
            <IconButton
              name="user"
              className={linkButton}
              onClick={() => {
                setContentType('user');
                setIsOpenFAB((prev) => !prev);
              }}
            />
          </BottomSheet.Trigger>
        </Button.FAB>
      </BottomSheet.Trigger>

      {BottomSheetContext[contentType]}
    </BottomSheet>
  );
};

export default FloatingButton;
