import React, { Component, PropTypes } from 'react';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

@connect
export default class Modal extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    isBare: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    store: PropTypes.object.isRequired,
    services: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === 27) this.services.ui.closeModal();
  }

  render() {
    const {
      store: { ui: { activeModal } },
      services: { ui: { toggleModal, closeModal } },
      children,
      name,
      title,
      isBare = false,
      className,
    } = this.props;
    const isVisible = name === activeModal;

    return (
      <div className={cn('Modal', { isVisible }, className)}>
        <div className={cn('Modal__bg')} onClick={() => toggleModal(name)}></div>
        <div className={cn(isBare ? null : 'Modal__content')}>
          {title && <h2 className={cn('Modal__title')}>{title}</h2>}
          <div className={cn('Modal__close', 'fa fa-times-circle-o')} onClick={() => closeModal()}></div>
          {isVisible ? children : null}
        </div>
      </div>
    );
  }
}
