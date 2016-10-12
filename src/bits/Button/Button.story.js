import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
  .add('Default colors', () => (
    <div>
      <p><Button className="Btn--primary">Primary button</Button></p>
      <p><Button className="Btn--secondary">Secondary button</Button></p>
      <p><Button className="Btn--tertiary">Tertiary button</Button></p>
      <p><Button className="Btn--positive">Positive button</Button></p>
      <p><Button className="Btn--negative">Negative button</Button></p>
    </div>
  ))
  .add('With some emoji', () => (
    <p>
      <Button onClick={action('clicked')}>👍 like</Button>
    </p>
  ));
