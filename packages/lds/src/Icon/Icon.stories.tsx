import { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';
import { iconWrapper, storybookContainer } from './Icon.css';
import { Txt } from '../Txt';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Template: Story = {
  render: () => {
    return (
      <>
        <Txt typography="h3">mono</Txt>
        <div className={storybookContainer}>
          <div className={iconWrapper}>
            <Icon name="back" />
            <Txt typography="p1">back</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="calendar" />
            <Txt typography="p1">calendar</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="calender-gray" />
            <Txt typography="p1">calendar-gray</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="close" />
            <Txt typography="p1">close</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="down" />
            <Txt typography="p1">down</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="list" />
            <Txt typography="p1">list</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="more" />
            <Txt typography="p1">more</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="more-gray" />
            <Txt typography="p1">more-gray</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="next" />
            <Txt typography="p1">next</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="next-gray" />
            <Txt typography="p1">next-gray</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="plus" />
            <Txt typography="p1">plus</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="reset" />
            <Txt typography="p1">reset</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="reset-gray" />
            <Txt typography="p1">reset-gray</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="search" />
            <Txt typography="p1">search</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="setting" />
            <Txt typography="p1">setting</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="share" />
            <Txt typography="p1">share</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="time" />
            <Txt typography="p1">time</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="time-gray" />
            <Txt typography="p1">time-gray</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="user" />
            <Txt typography="p1">user</Txt>
          </div>
        </div>

        <br />

        <Txt typography="h3">fill</Txt>
        <div className={storybookContainer}>
          <div className={iconWrapper}>
            <Icon name="arrow-fill" />
            <Txt typography="p1">arrow-fill</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="kakao" />
            <Txt typography="p1">kakao</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="pencil-fill" />
            <Txt typography="p1">pencil-fill</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="pencil-fill-blue" />
            <Txt typography="p1">pencil-fill-blue</Txt>
          </div>

          <div className={iconWrapper}>
            <Icon name="question-fill-purple" />
            <Txt typography="p1">question-fill-purple</Txt>
          </div>
        </div>
      </>
    );
  },
};
