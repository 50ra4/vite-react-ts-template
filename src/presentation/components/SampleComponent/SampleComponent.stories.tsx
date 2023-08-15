import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { SampleComponent } from 'src/presentation/components/SampleComponent/SampleComponent';

export default {
  component: SampleComponent,
} as ComponentMeta<typeof SampleComponent>;

export const Example: ComponentStoryObj<typeof SampleComponent> = {
  args: {},
};
