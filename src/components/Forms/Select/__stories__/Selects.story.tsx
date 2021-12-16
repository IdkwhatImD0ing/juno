import React, { ComponentProps, useState } from 'react';

import range from 'lodash/range';

import { Meta, Story } from '@storybook/react';

import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
} from '../../../../storybook';
import { RcGrid } from '../../../Grid';
import { RcListItem } from '../../../List/ListItem';
import { RcMenuItem } from '../../../Menu';
import { RcTypography } from '../../../Typography';
import { RcCheckbox } from '../../Checkbox';
import { RcSelect } from '../Select';

export default {
  title: '🚀 Cleanup Components/Selects/Select',
  component: RcSelect,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    ...sortInDocTable<keyof SelectProps>([
      'variant',
      'size',
      'disabled',
      'error',
      'required',
      'fullWidth',
      'virtualize',
      'label',
      'placeholder',
      'open',
      'displayEmpty',
      'readOnly',
      'focused',
      'autoFocus',
    ]),
    ...notControlInDocTable<keyof SelectProps>([
      'multiple',
      'defaultValue',
      'value',
    ]),
    ...notShowInDocTable<keyof SelectProps>(['onFocus', 'onBlur']),
  },
} as Meta;

const menus = [
  { id: -1, value: 0 },
  { id: 0, value: 'Zero' },
  { id: 1, value: 'One: truncated when text too long!!!' },
  { id: 2, value: 'Two' },
  { id: 3, value: 'Three' },
];

type SelectProps = ComponentProps<typeof RcSelect>;

const disabledIndexes = [5];

const virtualizeMenus = range(0, 1000).map((index) => {
  return (
    <RcMenuItem
      disabled={disabledIndexes.includes(index)}
      key={`${index}-Item`}
      // use data-search-text for virtualize search
      data-search-text={`${index}-Item`}
      value={`${index}-Item`}
    >
      {index}-Item
    </RcMenuItem>
  );
});

export const Select: Story<SelectProps> = ({ id, variant, ...args }) => {
  const [value, setValue] = useState<number | undefined>(undefined);
  const [value2, setValue2] = useState();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    setValue(+value);
  };

  return (
    <RcGrid container>
      <RcGrid item xs={6}>
        <RcTypography
          color="neutral.f06"
          variant="headline1"
          paragraph
          display="block"
        >
          LineSelect
        </RcTypography>
        <RcSelect
          {...args}
          id="line-select"
          onChange={handleChange}
          onOpen={(e) => {
            console.log('open', e);
          }}
          value={value}
        >
          {menus.map((item) => (
            <RcMenuItem value={item.id} key={item.id}>
              {item.value}
            </RcMenuItem>
          ))}
        </RcSelect>
      </RcGrid>
      <RcGrid item xs={6}>
        <RcTypography
          color="neutral.f06"
          variant="headline1"
          paragraph
          display="block"
        >
          BoxSelect
        </RcTypography>
        <RcSelect
          {...args}
          variant="box"
          id="box-select"
          SelectInputProps={{
            MenuProps: {
              MenuListProps: {
                'aria-activedescendant': 'test message',
              },
            },
          }}
          onChange={handleChange}
          onOpen={(e) => {
            console.log('open', e);
          }}
          value={value}
        >
          {menus.map((item) => (
            <RcMenuItem value={item.id} key={item.id}>
              {item.value}
            </RcMenuItem>
          ))}
        </RcSelect>
      </RcGrid>
      <RcGrid item xs={6}>
        <RcTypography
          color="neutral.f06"
          variant="headline1"
          paragraph
          display="block"
        >
          VirtualizeLineSelect
        </RcTypography>
        <RcSelect
          {...args}
          id="virtual-line-select"
          onChange={(e: any) => setValue2(e.target.value)}
          onOpen={(e) => {
            console.log('open', e);
          }}
          virtualize
          value={value2}
        >
          {virtualizeMenus}
        </RcSelect>
      </RcGrid>
      <RcGrid item xs={6}>
        <RcTypography
          color="neutral.f06"
          variant="headline1"
          paragraph
          display="block"
        >
          VirtualizeBoxSelect
        </RcTypography>
        <RcSelect
          {...args}
          variant="box"
          id="virtual-box-select"
          onChange={(e: any) => setValue2(e.target.value)}
          onOpen={(e) => {
            console.log('open', e);
          }}
          virtualize
          value={value2}
        >
          {virtualizeMenus}
        </RcSelect>
      </RcGrid>
    </RcGrid>
  );
};

Select.args = {
  placeholder: 'Select an age, please',
  label: 'Team Name',
  helperText: 'Some important helper text',
};

Select.argTypes = {
  ...notControlInDocTable<keyof SelectProps>(['id', 'variant']),
};

Select.parameters = {
  tags: [
    {
      name: 'Mui',
      href: 'https://material-ui.com/components/selects/#select',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const LineSelect: Story<SelectProps> = ({ ...args }) => {
  const [value, setValue] = useState<number | undefined>(undefined);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    setValue(+value);
  };

  const [value2, setValue2] = useState<number[]>([]);

  const handleChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // * here will get the result array
    console.log(event);
    setValue2(event.target.value as any);
  };

  return (
    <>
      <RcTypography color="neutral.f06" variant="body2">
        Single Select
      </RcTypography>
      <RcSelect
        onChange={handleChange}
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
        {...args}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
      <RcTypography color="neutral.f06" variant="body2">
        Custom color
      </RcTypography>
      <RcSelect
        onChange={handleChange}
        color="warning.f11"
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
        {...args}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
      <RcTypography color="neutral.f06" variant="body2">
        Focused with custom color
      </RcTypography>
      <RcSelect
        onChange={handleChange}
        color="success.f11"
        focused
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
        {...args}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
      <RcTypography color="neutral.f06" variant="body2">
        Multiple
      </RcTypography>
      <RcSelect
        onChange={handleChange2}
        multiple
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value2}
        renderValue={(v: number[]) => `Filter(${v?.length})`}
        {...args}
        placeholder="Select multiple item"
      >
        {menus.map((item) => (
          <RcListItem singleLine value={item.id} key={item.id}>
            <RcCheckbox checked={value2.indexOf(item.id) > -1} />
            {item.value}
          </RcListItem>
        ))}
      </RcSelect>
      <RcTypography color="neutral.f06" variant="body2">
        Focused
      </RcTypography>
      <RcSelect
        onChange={handleChange}
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
        focused
        {...args}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
      <RcTypography color="neutral.f06" variant="body2">
        Error
      </RcTypography>
      <RcSelect
        onChange={handleChange}
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
        error
        {...args}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
      <RcTypography color="neutral.f06" variant="body2">
        Disabled
      </RcTypography>
      <RcSelect
        onChange={handleChange}
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
        disabled
        {...args}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
    </>
  );
};

LineSelect.storyName = 'LineSelect';

LineSelect.args = {
  id: 'select-id',
  variant: 'line',
  placeholder: 'Select an age, please',
  label: 'Team Name',
  helperText: 'Some important helper text',
};

LineSelect.argTypes = {
  ...notShowInDocTable<keyof SelectProps>([]),
};

export const BoxSelect: Story<SelectProps> = ({ ...args }) => {
  const [value, setValue] = useState<number | undefined>(undefined);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    setValue(+value);
  };

  return (
    <>
      <RcTypography color="neutral.f06" variant="body2">
        Single Select
      </RcTypography>
      <RcSelect
        {...args}
        onChange={handleChange}
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
      <RcTypography color="neutral.f06" variant="body2">
        Focused with custom color
      </RcTypography>
      <RcSelect
        onChange={handleChange}
        color="warning.f11"
        focused
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
        {...args}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
      <br />
      <RcSelect
        onChange={handleChange}
        color="success.f11"
        focused
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
        {...args}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
      <RcTypography color="neutral.f06" variant="body2">
        Error
      </RcTypography>
      <RcSelect
        {...args}
        error
        onChange={handleChange}
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
      <RcTypography color="neutral.f06" variant="body2">
        Disabled
      </RcTypography>
      <RcSelect
        {...args}
        disabled
        onChange={handleChange}
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
      <RcTypography color="neutral.f06" variant="body2">
        Focused
      </RcTypography>
      <RcSelect
        {...args}
        focused
        onChange={handleChange}
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
    </>
  );
};

BoxSelect.storyName = 'BoxSelect';

BoxSelect.args = {
  id: 'select-id2',
  variant: 'box',
  placeholder: 'Select an age, please',
  label: 'Team Name',
  helperText: 'Some important helper text',
};

BoxSelect.argTypes = {
  ...notShowInDocTable<keyof SelectProps>([]),
};

export const SelectWithoutLabel: Story<SelectProps> = () => {
  const [value, setValue] = useState<number | undefined>(undefined);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    setValue(+value);
  };

  return (
    <>
      <RcSelect
        placeholder="Select an age, please"
        onChange={handleChange}
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
      <br />
      <br />
      <RcSelect
        variant="box"
        placeholder="Select an age, please"
        onChange={handleChange}
        onOpen={(e) => {
          console.log('open', e);
        }}
        value={value}
      >
        {menus.map((item) => (
          <RcMenuItem value={item.id} key={item.id}>
            {item.value}
          </RcMenuItem>
        ))}
      </RcSelect>
    </>
  );
};
