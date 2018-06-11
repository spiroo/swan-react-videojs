/*
 * @Author: DK
 * @Date: 2018-05-12 11:11:53
 * @Description: 分片上传组件
 * @Last Modified by: DK
 * @Last Modified time: 2018-06-11 17:07:06
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SwanReactVideo.less';

class SwanReactVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};

  render() {
    return <div>SwanReactVideo</div>;
  }
}

SwanReactVideo.defaultProps = {
  src: '',
};

SwanReactVideo.propTypes = {
  src: PropTypes.string,
};

export default SwanReactVideo;
